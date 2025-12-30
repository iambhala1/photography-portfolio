# Photography Portfolio Website

A clean, minimalist, and mobile-responsive photography portfolio website showcasing People, Street, and Monochrome photography.

## Project Structure

```
photography-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling and responsive design
├── js/
│   └── main.js        # Interactive features (lightbox, navigation)
├── images/
│   ├── people/        # People section photos
│   ├── street/        # Street section photos
│   └── blackwhite/    # Black & White section photos
└── README.md          # This file
```

## How to Add Photos

### Quick Start Guide

To add photos to your portfolio:

1. **Place your photos in the correct folder:**
   - People photos → `images/people/`
   - Monochrome (Black & White) photos → `images/blackwhite/`
   - Street photos → `images/street/`

2. **Open `index.html`** and find the gallery section you want to add photos to

3. **Add the HTML code** for each photo (see examples below)

4. **Save and refresh** your browser to see the changes

### Step 1: Prepare Your Photos

1. **Recommended Image Specifications:**
   - Format: JPG or PNG
   - Dimensions: 1200px - 2000px width (maintains quality while keeping file size reasonable)
   - Aspect Ratio: Square (1:1) works best for the grid layout
   - File Size: Optimize images to be under 500KB each for faster loading

2. **Image Optimization Tips:**
   - Use tools like TinyPNG, ImageOptim, or Photoshop to compress images
   - Maintain good quality while reducing file size
   - Consider using WebP format for even better compression (requires HTML updates)

### Step 2: Add Photos to Folders

1. **People Section Photos:**
   - Place all your human photography images in the `images/people/` folder
   - You can use any filename you prefer (e.g., `photo1.jpg`, `portrait-01.jpg`, etc.)
   - Just make sure the filename matches what you use in the HTML

2. **Street Section Photos:**
   - Place all your street photography images in the `images/street/` folder
   - You can use any filename you prefer (e.g., `street1.jpg`, `candid-01.jpg`, etc.)
   - Note: The Street gallery already contains 18 photos as examples

3. **Monochrome Section Photos:**
   - Place all your black and white photography images in the `images/blackwhite/` folder
   - Name them: `blackwhite-01.jpg`, `blackwhite-02.jpg`, `blackwhite-03.jpg`, etc.
   - Note: You can use any naming convention you prefer, just ensure the filename matches in the HTML

### Step 3: Update HTML File

Open `index.html` and add your photos to the respective gallery sections.

#### For People Section:

Find the `<div class="gallery" id="people-gallery">` section and add your images:

```html
<div class="gallery" id="people-gallery">
    <div class="gallery-item">
        <img src="images/people/people-01.jpg" alt="People photography description" loading="lazy" class="gallery-image">
    </div>
    <div class="gallery-item">
        <img src="images/people/people-02.jpg" alt="People photography description" loading="lazy" class="gallery-image">
    </div>
    <!-- Add more images as needed -->
</div>
```

#### For Street Section:

Find the `<div class="gallery" id="street-gallery">` section and add your images:

```html
<div class="gallery" id="street-gallery">
    <div class="gallery-item">
        <img src="images/street/street-01.jpg" alt="Street photography description" loading="lazy" class="gallery-image">
    </div>
    <div class="gallery-item">
        <img src="images/street/street-02.jpg" alt="Street photography description" loading="lazy" class="gallery-image">
    </div>
    <!-- Add more images as needed -->
</div>
```

#### For Monochrome Section:

Find the `<div class="gallery" id="blackwhite-gallery">` section and add your images:

```html
<div class="gallery" id="blackwhite-gallery">
    <div class="gallery-item">
        <img src="images/blackwhite/blackwhite-01.jpg" alt="Monochrome photography description" loading="lazy" class="gallery-image">
    </div>
    <div class="gallery-item">
        <img src="images/blackwhite/blackwhite-02.jpg" alt="Monochrome photography description" loading="lazy" class="gallery-image">
    </div>
    <!-- Add more images as needed -->
</div>
```

**Important Notes:**
- Always include descriptive `alt` text for accessibility (helps with SEO and screen readers)
- Keep the `loading="lazy"` attribute for performance (images load as you scroll)
- Maintain the exact HTML structure shown above (required for lightbox functionality)
- The `gallery-image` class is essential for the lightbox feature to work
- File paths are case-sensitive on some servers, so match the exact case of your filenames

### Step 4: Test Your Website

1. Open `index.html` in a web browser
2. Test on different screen sizes (mobile, tablet, desktop)
3. Click images to test the lightbox functionality
4. Test navigation menu on mobile devices

## Features

- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Image Lightbox**: Click any image to view it in full-screen mode
- **Smooth Navigation**: Smooth scrolling between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Keyboard Navigation**: Use arrow keys and Escape in lightbox
- **Lazy Loading**: Images load as you scroll for better performance

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #ffffff;    /* White/light color */
    --accent-color: #666666;       /* Gray accent color */
    --text-color: #333333;         /* Text color */
    --bg-color: #ffffff;           /* Background color */
}
```

### Changing Typography

Update the `font-family` in the `body` selector in `css/style.css`.

### Changing Hero Text

Edit the hero section in `index.html`:

```html
<h1 class="hero-title">Your Title Here</h1>
<p class="hero-subtitle">Your Subtitle Here</p>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Hosting Your Website

You can host this website on:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Free hosting with easy deployment
- **Vercel**: Free hosting for static sites
- **Any web hosting service**: Upload all files to your hosting provider

## Troubleshooting

### Images Not Showing
- Check that image paths are correct (case-sensitive on some servers)
- Ensure images are in the correct folders
- Verify image file names match exactly in HTML

### Lightbox Not Working
- Make sure JavaScript is enabled in your browser
- Check browser console for any JavaScript errors
- Ensure all images have the `gallery-image` class

### Mobile Menu Not Working
- Check that `main.js` is loaded correctly
- Verify JavaScript is enabled
- Test on a real mobile device, not just browser dev tools

## Support

For issues or questions, check:
- HTML structure matches the examples above
- All file paths are correct
- Images are properly optimized

---

Enjoy showcasing your photography!

