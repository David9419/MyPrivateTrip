import numpy as np, onnxruntime as ort, glob, os, sys, time
from PIL import Image, ImageFilter
so = ort.SessionOptions(); so.intra_op_num_threads = 4
s = ort.InferenceSession('x4.onnx', so, providers=['CPUExecutionProvider'])
def ia(arr):
    x = arr.astype(np.float32).transpose(2,0,1)[None]/255
    o = s.run(None, {'entree': x})[0][0].transpose(1,2,0)
    return (np.clip(o,0,1)*255).round().astype(np.uint8)
fichiers = sorted(glob.glob('brut/*.png'))
t0=time.time()
for i,f in enumerate(fichiers):
    nom = os.path.basename(f).replace('.png','.webp')
    im = np.asarray(Image.open(f).convert('RGB')); h,w,_ = im.shape
    # Ordi : bande horizontale du centre (16:10), avec 8 px de marge pour des bords propres
    if not os.path.exists('ordi/'+nom):
        ch=300; y=(h-ch)//2
        o = ia(im[y-8:y+ch+8])[32:32+ch*4]
        Image.fromarray(o).resize((1600,1000), Image.LANCZOS).save('ordi/'+nom, quality=80, method=6)
    # Téléphone : image entière, verticale
    if not os.path.exists('mobile/'+nom):
        o = ia(im)
        Image.fromarray(o).resize((900,1560), Image.LANCZOS).save('mobile/'+nom, quality=78, method=6)
    if i%12==0: print(i, len(fichiers), round(time.time()-t0), 's', flush=True)
print('FINI', round(time.time()-t0), flush=True)
