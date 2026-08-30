import numpy as np
from PIL import Image
from scipy import ndimage
import os

BASE = r"c:\Users\香芋派\.trae-cn\attachments\6a8313ad77108b87c7b07f68"
OUT = r"c:\Users\香芋派\.trae-cn\Official-wiki\ui-sticker-assets"

TASKS = [
    ("cc00ee2d-7a32-4ebc-ad8d-e0b75f7e464f_微信图片_20260817214820_92_411.jpg", "back-to-top.png"),
    ("1325ecaf-dc61-4ea7-a892-032647dfc481_微信图片_20260817214821_93_411.jpg", "cursor-default.png"),
    ("25febd76-e5ba-4d01-8543-4a56d632c849_微信图片_20260817214822_94_411.jpg", "cursor-active.png"),
]

T0, T1 = 24.0, 80.0


def remove_bg(src, dst):
    img = Image.open(src).convert("RGB")
    rgb = np.asarray(img).astype(np.float32)
    h, w, _ = rgb.shape

    frame = np.concatenate([
        rgb[:2].reshape(-1, 3), rgb[-2:].reshape(-1, 3),
        rgb[:, :2].reshape(-1, 3), rgb[:, -2:].reshape(-1, 3),
    ])
    bgc = np.median(frame, axis=0)

    dist = np.linalg.norm(rgb - bgc, axis=2)

    bg_like = dist < T0
    lbl, _ = ndimage.label(bg_like)
    border = np.unique(np.concatenate([lbl[0], lbl[-1], lbl[:, 0], lbl[:, -1]]))
    border = border[border != 0]
    bg = np.isin(lbl, border)

    # 5px 邻域带覆盖描边外侧 JPEG 振铃灰像素；角色内部浅色元素有粗描边隔离，不受影响
    near_bg = ndimage.binary_dilation(bg, iterations=5)
    # 描边色距：邻域带内深色像素(>T1)即描边本体，其颜色距离作为覆盖率分母
    outline_d = dist[near_bg & ~bg & (dist > T1)]
    D = float(np.median(outline_d)) if outline_d.size else 286.0
    alpha = np.where(bg, 0.0, 1.0)
    # 线性覆盖率：像素色距/描边色距 = 白底混合比例的逆，物理正确的抗锯齿 alpha
    soft = np.clip(dist / D, 0.0, 1.0)
    m = near_bg & ~bg & (dist < D)
    alpha[m] = soft[m]

    alpha = ndimage.gaussian_filter(alpha, sigma=0.5)
    alpha = np.clip((alpha - 0.10) / 0.80, 0.0, 1.0)

    a3 = alpha[..., None]
    unmixed = (rgb - (1.0 - a3) * bgc) / np.maximum(a3, 1e-4)
    fg_rgb = np.where((a3 > 0.001) & (a3 < 0.999), np.clip(unmixed, 0, 255), rgb)

    out = np.dstack([fg_rgb, alpha * 255.0]).round().astype(np.uint8)
    Image.fromarray(out, "RGBA").save(dst)

    vis = alpha > 0.5
    ys, xs = np.where(vis)
    print(f"{os.path.basename(dst)}: size={w}x{h}, bgc={bgc.round(1)}, "
          f"transparent={100*(alpha<0.5).mean():.1f}%, "
          f"bbox=({xs.min()},{ys.min()})-({xs.max()},{ys.max()})")


def checkerboard(w, h, s=12):
    yy, xx = np.mgrid[0:h, 0:w]
    c = (((yy // s) + (xx // s)) % 2) * 60 + 190
    return np.dstack([c, c, c]).astype(np.uint8)


def preview(dst):
    img = Image.open(dst).convert("RGBA")
    a = np.asarray(img).astype(np.float32)
    h, w = a.shape[:2]
    cb = checkerboard(w, h).astype(np.float32)
    comp = a[..., :3] * (a[..., 3:4] / 255.0) + cb * (1 - a[..., 3:4] / 255.0)
    comp = np.clip(comp, 0, 255).astype(np.uint8)
    Image.fromarray(comp).save(dst.replace(".png", "_preview.png"))


for src, dst in TASKS:
    d = os.path.join(OUT, dst)
    remove_bg(os.path.join(BASE, src), d)
    preview(d)
print("done")
