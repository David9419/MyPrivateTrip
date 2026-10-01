# Charge les poids .pth sans PyTorch et construit un modèle ONNX SRVGGNetCompact (x4).
import zipfile, pickle, collections, numpy as np, onnx
from onnx import helper, TensorProto, numpy_helper

z = zipfile.ZipFile('general-x4v3.pth')
racine = z.namelist()[0].split('/')[0]
TYPES = {'FloatStorage': np.float32, 'HalfStorage': np.float16}

class Stockage:
    def __init__(self, dtype, cle): self.dtype, self.cle = dtype, cle

def rebuild(st, offset, size, stride, *a):
    data = np.frombuffer(z.read(f'{racine}/data/{st.cle}'), dtype=st.dtype)
    n = int(np.prod(size)) if len(size) else 1
    arr = data[offset:offset+n]
    return arr.reshape(size).astype(np.float32) if len(size) else arr.astype(np.float32)

class U(pickle.Unpickler):
    def find_class(self, mod, nom):
        if nom == '_rebuild_tensor_v2': return rebuild
        if nom == 'OrderedDict': return collections.OrderedDict
        if nom in TYPES: return nom
        return super().find_class(mod, nom)
    def persistent_load(self, pid):
        _, typ, cle, _, _ = pid
        return Stockage(TYPES[typ], cle)

etat = U(z.open(f'{racine}/data.pkl')).load()
if 'params' in etat: etat = etat['params']
cles = list(etat.keys())
print(len(cles), cles[:4], cles[-2:])

noeuds, inits = [], []
x = 'entree'
idx = sorted({int(k.split('.')[1]) for k in cles})
for i in idx:
    w = etat[f'body.{i}.weight']
    if w.ndim == 4:
        inits += [numpy_helper.from_array(w, f'w{i}'), numpy_helper.from_array(etat[f'body.{i}.bias'], f'b{i}')]
        noeuds.append(helper.make_node('Conv', [x, f'w{i}', f'b{i}'], [f'c{i}'], pads=[1,1,1,1]))
        x = f'c{i}'
    else:
        inits.append(numpy_helper.from_array(w.reshape(-1,1,1), f'p{i}'))
        noeuds.append(helper.make_node('PRelu', [x, f'p{i}'], [f'a{i}']))
        x = f'a{i}'
noeuds.append(helper.make_node('DepthToSpace', [x], ['ps'], blocksize=4, mode='CRD'))
inits.append(numpy_helper.from_array(np.array([1,1,4,4],np.float32), 'echelles'))
noeuds.append(helper.make_node('Resize', ['entree', '', 'echelles'], ['base'], mode='nearest'))
noeuds.append(helper.make_node('Add', ['ps','base'], ['sortie']))
g = helper.make_graph(noeuds, 'srvgg',
    [helper.make_tensor_value_info('entree', TensorProto.FLOAT, [1,3,None,None])],
    [helper.make_tensor_value_info('sortie', TensorProto.FLOAT, [1,3,None,None])], inits)
m = helper.make_model(g, opset_imports=[helper.make_opsetid('', 17)]); m.ir_version = 8
onnx.checker.check_model(m); onnx.save(m, 'x4.onnx'); print('ok')
