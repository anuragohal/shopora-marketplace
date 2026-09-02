# Shopora Redesign - Development Guide

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

Open `http://localhost:4173/` in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

## 📝 Component Usage Examples

### Button Component
```jsx
<Button 
  variant="primary"  // primary, secondary, accent, ghost
  size="lg"         // sm, md, lg
  href="#pricing"   // optional link
>
  Click Me
</Button>
```

### Feature Card
```jsx
<FeatureCard 
  icon="📍"
  title="Feature Title"
  description="Feature description here"
  delay={0.1}
/>
```

### Stat Card
```jsx
<StatCard 
  value="500+"
  label="Shops"
  icon="🏪"
  delay={0}
/>
```

## 🎨 Tailwind Customization

### Add Custom Color
```js
// tailwind.config.js
colors: {
  'custom': '#YOUR_HEX',
}
```

### Add Custom Animation
```js
animation: {
  'custom': 'customKeyframe 2s ease infinite',
}
```

## 📱 Responsive Classes

- `sm:` → 640px+
- `md:` → 768px+
- `lg:` → 1024px+
- `xl:` → 1280px+

Example:
```jsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

## 🎬 Framer Motion Examples

### Fade In On Scroll
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Hover Animation
```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>
```

## 🔍 Common Tasks

### Change Section Content
1. Open `src/sections/SectionName.jsx`
2. Find the data array (usually at top)
3. Update text, titles, descriptions
4. Changes reflect immediately

### Add New Feature
```jsx
// In FeaturesSection.jsx
const features = [
  // ... existing features
  {
    icon: '🎯',
    title: 'New Feature',
    description: 'Description here',
  },
];
```

### Update Colors
```js
// tailwind.config.js
shopora: {
  primary: '#NEW_COLOR',
}
```

Then use with: `text-shopora-primary`

### Add New Section
```jsx
// 1. Create src/sections/MySection.jsx
export const MySection = () => {
  return (
    <section className="py-20 md:py-32">
      {/* Content */}
    </section>
  );
};

// 2. Import in App.jsx
import { MySection } from './sections';

// 3. Add to render
<MySection />
```

## 🎯 File Locations Reference

| What | Where |
|------|-------|
| Main app | `src/App.jsx` |
| Components | `src/components/` |
| Sections | `src/sections/` |
| Styles | `src/index.css` |
| Config | `tailwind.config.js` |

## 🐛 Debugging Tips

### Check Mobile View
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on different screen sizes

### Verify Animations
- Check browser DevTools > Performance
- Look for jank or frame drops
- Test on actual mobile device

### CSS Issues
- Clear cache (Shift+Reload)
- Check Tailwind classes are valid
- Verify color values are correct

## 📊 Performance Checklist

✓ All images optimized
✓ No console errors
✓ Animations smooth (60fps)
✓ Mobile responsive
✓ Fast load time
✓ No broken links

## 🎓 Learning Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)

## 💬 Troubleshooting

### Styles not applying
- Ensure class names are correct
- Check Tailwind is compiled
- Clear browser cache

### Animations not working
- Check Framer Motion import
- Verify animation props
- Test in different browser

### Mobile layout broken
- Check responsive classes
- Verify viewport meta tag
- Test on real device

## 🚀 Deployment

### To Vercel
```bash
npm run build
# Push to GitHub, connect to Vercel
```

### To Netlify
```bash
npm run build
# Drag dist/ to Netlify
```

### To Any Server
```bash
npm run build
# Upload dist/ folder contents
```

## 📞 Support

For issues or questions:
1. Check the README_REDESIGN.md
2. Review component examples
3. Check Framer Motion docs
4. Test in different browser

---

Happy coding! 🎉
