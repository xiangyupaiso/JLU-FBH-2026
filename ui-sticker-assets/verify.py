import numpy as np
from PIL import Image
from scipy import ndimage
import os

OUT = r"c:\Users\香芋派\.trae-cn\Official-wiki\ui-sticker-assets"
FILES = ["back-to-top.png", "cursor-default.png", "cursor-active.png"]


def stats(name):
    a = np.asarray(Image.open(os.path.join(OUT, name)).convert("RGBA")).astype(np.float32)
    alpha = a[..., 3] / 255.0
    edge = (alpha > 0.02) & (alpha < 0.98)
    n = int(edge.sum())
    d_white = np.linalg.norm(a[..., :3] - 255.0, axis=2)
    fringe = int((edge & (d_white < 30)).sum())
    ghost = int(((alpha > 0.02) & (alpha < 0.30)).sum())
    # 暗底亮斑：深色背景(40)合成后仍发亮的边缘外像素（JPEG 振铃残留判定）
    over_dark = alpha[..., None] * a[..., :3] + (1 - alpha[..., None]) * 40.0
    bright = np.linalg.norm(over_dark - 40.0, axis=2) > 90
    ring = ndimage.binary_dilation(alpha > 0.5, iterations=3) & (alpha <= 0.5)
    speck = int((bright & ring).sum())
    # 边缘 alpha 过渡平滑度：中间值档位数量
    levels = len(np.unique((alpha[edge] * 20).astype(int))) if n else 0
    print(f"{name}: 半透明边缘px={n}, 近白残留={fringe}, 低alpha幽灵={ghost}, "
          f"alpha过渡档位={levels}/20, 暗底亮斑={speck}")


def crop(name, box, bg, tag, scale=1, resample=Image.LANCZOS):
    img = Image.open(os.path.join(OUT, name)).convert("RGBA")
    c = img.crop(box)
    if scale > 1:
        c = c.resize(((box[2] - box[0]) * scale, (box[3] - box[1]) * scale), resample)
    canvas = Image.new("RGBA", c.size, bg)
    canvas.alpha_composite(c)
    canvas.convert("RGB").save(os.path.join(OUT, f"chk_{tag}.png"))


for n in FILES:
    stats(n)

crop("cursor-active.png", (960, 1000, 1234, 1221), (40, 40, 40, 255), "active_br_dark_x3", 3)
crop("cursor-active.png", (960, 1000, 1234, 1221), (255, 255, 255, 255), "active_br_white_x3", 3)
crop("back-to-top.png", (110, 560, 290, 760), (40, 40, 40, 255), "btt_left_dark_x3", 3)
crop("back-to-top.png", (110, 560, 290, 760), (255, 255, 255, 255), "btt_left_white_x3", 3)
crop("cursor-default.png", (58, 142, 400, 420), (255, 255, 255, 255), "default_flower_x2", 2)
print("done")
