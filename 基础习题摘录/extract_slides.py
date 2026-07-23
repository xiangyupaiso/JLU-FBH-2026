import copy
import os
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.opc.constants import RELATIONSHIP_TYPE as RT
from lxml import etree
import re

# Paths
src_path = r"c:\Users\香芋派\.trae-cn\attachments\6a61d4020f310cbbec14e349/027d458d-3c01-45d9-b1ab-67ff839374ab_基础习题.pptx"
out_path = r"c:\Users\香芋派\.trae-cn\Official-wiki\基础习题摘录\基础习题_29-34.pptx"

# Slide numbers to extract (1-based)
start_slide = 29
end_slide = 34

print(f"Opening source presentation: {src_path}")
src_prs = Presentation(src_path)
print(f"Source has {len(src_prs.slides)} slides")

# Get slide dimensions
slide_width = src_prs.slide_width
slide_height = src_prs.slide_height

# Create new presentation
dst_prs = Presentation()
dst_prs.slide_width = slide_width
dst_prs.slide_height = slide_height

# We'll use a different approach: clone the XML directly
# First, get the slide master and layout references

# Function to clone a slide using XML manipulation
def clone_slide(src_prs, dst_prs, slide_index):
    """Clone a slide from source to destination presentation"""
    src_slide = src_prs.slides[slide_index]
    
    # Get the source slide's XML
    src_slide_xml = src_slide._element
    
    # Get the slide layout reference
    src_layout = src_slide.slide_layout
    
    # For simplicity, we'll use the first layout in the destination
    # Actually, let's just use a blank layout
    dst_layout = dst_prs.slide_layouts[6]  # blank layout
    
    # Add a new slide with blank layout
    new_slide = dst_prs.slides.add_slide(dst_layout)
    
    # Now we need to copy all shapes from source to destination
    # Clear the new slide's shapes first
    for shape in list(new_slide.shapes):
        sp = shape._element
        sp.getparent().remove(sp)
    
    # Copy all shapes
    shape_tree = new_slide.shapes._spTree
    nsmap = {
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'
    }
    
    # Copy all child elements from source slide's spTree
    for child in list(src_slide.shapes._spTree):
        if child.tag.endswith('}sp') or child.tag.endswith('}pic') or \
           child.tag.endswith('}grpSp') or child.tag.endswith('}cxnSp') or \
           child.tag.endswith('}graphicFrame'):
            # Deep copy the shape element
            new_child = copy.deepcopy(child)
            shape_tree.append(new_child)
    
    # Copy the background if any
    src_bg = src_slide._element.find('.//{http://schemas.openxmlformats.org/presentationml/2006/main}cSld')
    if src_bg is not None:
        bg_elem = src_bg.find('{http://schemas.openxmlformats.org/presentationml/2006/main}bg')
        if bg_elem is not None:
            new_csld = new_slide._element.find('.//{http://schemas.openxmlformats.org/presentationml/2006/main}cSld')
            if new_csld is not None:
                new_csld.insert(0, copy.deepcopy(bg_elem))
    
    return new_slide

# Clone the desired slides
target_indices = list(range(start_slide - 1, end_slide))  # 0-based
print(f"Extracting slides {start_slide} to {end_slide} (indices: {target_indices})")

for idx in target_indices:
    clone_slide(src_prs, dst_prs, idx)
    print(f"  Cloned slide {idx + 1}")

# Remove the default blank slide that was added with the presentation
# (dst_prs starts with one slide by default, but we used add_slide which adds more)
# Actually, Presentation() creates a presentation with one empty slide by default
# We need to remove that first empty slide

# Let's save first and check
print(f"Saving to: {out_path}")
dst_prs.save(out_path)

# Verify
verify_prs = Presentation(out_path)
print(f"Output presentation has {len(verify_prs.slides)} slides")
for i, slide in enumerate(verify_prs.slides):
    shapes_count = len(slide.shapes)
    print(f"  Slide {i+1}: {shapes_count} shapes")