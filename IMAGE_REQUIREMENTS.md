# Image Requirements & Replacement Guide

This document specifies the exact image filenames needed for sites that use images.

## 🎨 Design Style Site (Nordic Minimalism)

**Location:** `docs/design_style/images/`

### ✅ NO IMAGES REQUIRED

The Nordic Minimalism site has been designed to be **completely image-free**. It uses:
- Typography and whitespace for visual impact
- Color swatches displayed via CSS
- Symbolic icons (unicode characters)
- Gradient backgrounds and pure CSS design elements

**This site is ready to deploy as-is with no images needed.**

---

## 💼 Portfolio Site (Bakr Abushaar - Cybersecurity)

**Location:** `docs/portfolio/images/`

### Required Images:

1. **`headshot.jpg`**
   - **Subject:** Professional headshot photo
   - **Suggested:** Professional portrait, business attire, neutral background
   - **Dimensions:** 800x800px minimum (square or portrait)
   - **Alt text in code:** "Professional headshot of Bakr Abushaar, cybersecurity professional"

2. **`project-1.jpg`**
   - **Subject:** Network security project visualization
   - **Suggested:** Network diagram, firewall configuration, security infrastructure
   - **Dimensions:** 1200x800px minimum (landscape)
   - **Alt text in code:** "Network security infrastructure diagram showing firewall configuration, network segmentation, and security zones"

3. **`project-2.jpg`**
   - **Subject:** Security analysis or assessment project
   - **Suggested:** Dashboard, vulnerability scan results, security metrics
   - **Dimensions:** 1200x800px minimum (landscape)
   - **Alt text in code:** "Security dashboard showing vulnerability scan results, risk metrics, and remediation progress"

4. **`og-image.jpg`**
   - **Subject:** Social media preview image
   - **Suggested:** Professional branding or portfolio preview
   - **Dimensions:** 1200x630px (Facebook/LinkedIn standard)

---

## 🍫 Client Site (Noir Chocolat - Chocolate Desserts)

**Location:** `docs/client_site/images/`

### Required Images:

1. **`product-1.jpg`**
   - **Subject:** Dark Velvet Mousse dessert
   - **Suggested:** Elegant chocolate mousse with mirror glaze, professional food photography
   - **Dimensions:** 800x600px minimum
   - **Alt text in code:** "Dark chocolate mousse cake with gold leaf garnish and mirror glaze finish"

2. **`product-2.jpg`**
   - **Subject:** Artisan Truffle Collection
   - **Suggested:** Assorted chocolate truffles, various coatings, professional presentation
   - **Dimensions:** 800x600px minimum
   - **Alt text in code:** "Assorted chocolate truffles with various coatings including cocoa powder and chopped nuts"

3. **`product-3.jpg`**
   - **Subject:** Belgian Chocolate Tart
   - **Suggested:** Chocolate tart with berries, elegant plating, professional food photography
   - **Dimensions:** 800x600px minimum
   - **Alt text in code:** "Elegant chocolate tart with fresh berries and edible flowers on white plate"

4. **`og-image.jpg`**
   - **Subject:** Social media preview image
   - **Suggested:** Brand hero image or signature dessert
   - **Dimensions:** 1200x630px (Facebook/LinkedIn standard)

5. **`hero.jpg`** *(Optional)*
   - **Subject:** Background image for hero section
   - **Suggested:** Chocolate texture, cocoa beans, abstract chocolate background
   - **Dimensions:** 1920x1080px minimum
   - **Note:** Used as background with 15% opacity overlay

---

## 📐 General Image Guidelines

### Technical Requirements:
- **Format:** JPG (JPEG) preferred for photos
- **Quality:** High quality, but optimized for web (under 500KB each)
- **Color Space:** sRGB
- **Orientation:** Match suggested dimensions above

### Content Guidelines:
- **Professional Quality:** All images should look professional and polished
- **Consistent Style:** Images within each site should have consistent lighting/style
- **Rights:** Ensure you have rights to use all images
- **Accessibility:** Images should be clear and understandable

### Optimization Tips:
1. Resize images to appropriate dimensions before uploading
2. Compress images using tools like TinyPNG or ImageOptim
3. Maintain aspect ratios to avoid distortion
4. Test images on both desktop and mobile views

---

## 🔄 How to Replace Images

### Simple Replacement Process:

1. **Prepare your new image:**
   - Resize to recommended dimensions
   - Optimize file size
   - Rename to exact filename (case-sensitive)

2. **Replace the file:**
   - Navigate to appropriate `images/` folder
   - Delete old image file (if exists)
   - Upload new image with correct filename

3. **No code changes needed:**
   - HTML and CSS automatically use new image
   - Alt text remains the same
   - No deployment changes required

### Example:
```bash
# To replace the portfolio headshot:
# 1. Prepare your-photo.jpg
# 2. Rename to: headshot.jpg
# 3. Replace: docs/portfolio/images/headshot.jpg
# Done!
```

---

## 🎯 Image Sources (Suggestions)

### Free Stock Photo Resources:
- **Unsplash** (unsplash.com) - High-quality free photos
- **Pexels** (pexels.com) - Free stock photos and videos
- **Pixabay** (pixabay.com) - Free images and vectors

### Category-Specific:
- **Cybersecurity:** Search "network security", "cyber security", "data protection", "network diagram"
- **Chocolate/Desserts:** Search "chocolate dessert", "gourmet chocolate", "artisan truffle", "chocolate cake"

### Creating Placeholder Images:
If you need temporary placeholders:
- **Placeholder.com** - Simple colored placeholders
- **Unsplash Source** - Random category-specific images
- **Lorem Picsum** - Random photo placeholders

---

## ✅ Current Image Status

### Design Style Site:
- ✅ **NO IMAGES NEEDED** - Site is complete without images

### Portfolio Site:
- ⚠️ `headshot.jpg` - Needs professional headshot
- ⚠️ `project-1.jpg` - Needs network security visualization
- ⚠️ `project-2.jpg` - Needs security dashboard image
- ⚠️ `og-image.jpg` - Needs social preview image

### Client Site:
- ⚠️ `product-1.jpg` - Needs chocolate mousse image
- ⚠️ `product-2.jpg` - Needs truffle collection image
- ⚠️ `product-3.jpg` - Needs chocolate tart image
- ⚠️ `og-image.jpg` - Needs social preview image
- ⚠️ `hero.jpg` - Optional chocolate background

**Total Images Needed: 8 (Portfolio: 4, Chocolate Site: 4-5)**

---

## 🚨 Important Reminders

1. **Exact Filenames:** Must match exactly (case-sensitive)
2. **File Extensions:** Use `.jpg` (not `.jpeg`, `.JPG`, or `.png`)
3. **No Spaces:** Filenames should not contain spaces
4. **Correct Location:** Place in appropriate `images/` directory
5. **Test After Upload:** View site to confirm images display correctly

---

## 🎨 Special Note: Nordic Minimalism Site

The Nordic Minimalism design site has been intentionally created to showcase minimalist design principles without relying on photography. This demonstrates:

- **True Minimalism:** Design through restraint
- **Typography as Art:** Using text as the primary visual element
- **Color Theory:** CSS-based color swatches
- **Negative Space:** Whitespace as a design element
- **Performance:** Faster load times without images

This approach is both philosophically consistent with Nordic design principles and practically eliminates the need for image sourcing.

---

**Last Updated:** December 16, 2025
