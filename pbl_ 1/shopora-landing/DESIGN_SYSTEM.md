# Shopora Design System & Color Palette

## 🎨 Brand Colors

### Primary Color Palette
```
Primary:   #6C63FF (Deep Purple)
Secondary: #8B5CF6 (Medium Purple)
Accent:    #00C2FF (Cyan/Sky Blue)
```

### Neutral Colors
```
Dark Background: #050813
Dark Card:       #0f172a
Slate 900:       #111827
Slate 950:       #0b1228
White:           #ffffff (with opacity)
```

### Semantic Colors
```
Success:  #10b981
Warning:  #f59e0b
Error:    #ef4444
Info:     #3b82f6
```

## 🎯 Color Usage Guide

### Primary (#6C63FF)
- Main CTA buttons
- Logo/branding
- Primary links
- Highlight text

### Secondary (#8B5CF6)
- Secondary CTAs
- Hover states
- Accent borders
- Gradient overlays

### Accent (#00C2FF)
- Badges
- Important highlights
- Icon accents
- Featured elements

## 📐 Typography System

### Heading Sizes
```
H1: text-5xl md:text-6xl lg:text-7xl (60-112px)
H2: text-4xl md:text-5xl (36-48px)
H3: text-2xl md:text-3xl (24-30px)
H4: text-xl md:text-2xl (20-24px)
```

### Body Text
```
Large:    text-lg (18px) - for descriptions
Base:     text-base (16px) - default text
Small:    text-sm (14px) - secondary info
XSmall:   text-xs (12px) - labels/badges
```

### Font Family
```
Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica
```

## 🔲 Spacing Scale

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
```

Usage: `p-4` (16px padding), `my-8` (32px margin)

## 🎭 Shadow System

### Subtle
```
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
```

### Standard
```
shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Glow Effects
```
shadow-glow: 0 20px 80px rgba(108, 99, 255, 0.25)
shadow-glow-lg: 0 30px 100px rgba(108, 99, 255, 0.35)
shadow-glow-accent: 0 25px 50px rgba(0, 194, 255, 0.25)
```

## 🎬 Border Radius

```
Subtle:    rounded-lg (8px)
Medium:    rounded-xl (12px)
Large:     rounded-2xl (16px)
Extra:     rounded-3xl (24px)
Full:      rounded-full (9999px)
```

## ✨ Glassmorphism

### Glass Effect
```
bg-white/10          // 10% white overlay
backdrop-blur-xl     // Strong blur
border border-white/10  // Subtle border
```

### Implementation
```jsx
<div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
  Glassmorphic content
</div>
```

## 🎨 Gradient Examples

### Gradient Text
```jsx
className="bg-gradient-to-r from-shopora-primary to-shopora-accent bg-clip-text text-transparent"
```

### Gradient Background
```jsx
className="bg-gradient-to-br from-slate-900 to-slate-950"
```

### Animated Gradient
```
animation: gradient-shift 3s ease infinite;
background-size: 300% 300%;
```

## 📱 Responsive Typography

### Mobile First
```jsx
// Small on mobile, larger on desktop
className="text-lg md:text-2xl lg:text-4xl"
```

### Common Breakpoints
```
sm:  640px (tablets)
md:  768px (small desktop)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1536px (very large)
```

## 🎯 Component Tokens

### Button States
```
Default:  bg-shopora-primary
Hover:    bg-shopora-secondary + shadow-glow
Active:   scale-95
Disabled: opacity-50 cursor-not-allowed
```

### Card Tokens
```
Border:       border border-white/10
Background:   bg-gradient-to-br from-slate-900/60 to-slate-950/80
Shadow:       shadow-xl shadow-black/20
Hover:        border-shopora-primary/30 shadow-glow-primary/20
```

### Badge Tokens
```
Background:  bg-shopora-accent/20
Border:      border border-shopora-accent/30
Text:        text-shopora-accent
```

## 🎪 Animation Tokens

### Duration
```
Fast:    200ms (UI feedback)
Normal:  300ms (regular animations)
Slow:    600ms (entrance animations)
```

### Easing
```
easeOut:     cubic-bezier(0.16, 1, 0.3, 1)
easeInOut:   cubic-bezier(0.4, 0, 0.2, 1)
easeLinear:  cubic-bezier(0, 0, 1, 1)
```

## 🔄 Interaction Feedback

### Hover
```
Scale:  1.02 - 1.05
Lift:   -4px to -8px
Shadow: Increase
Color:  Brighten/change
```

### Active/Click
```
Scale:  0.95 - 0.98
Shadow: Decrease
```

### Loading
```
Opacity: pulse
Blur:    varies
Scale:   slight zoom
```

## 📊 Color Combinations

### Recommended Pairings
```
Primary + Accent:       #6C63FF + #00C2FF (Good contrast)
Secondary + Accent:     #8B5CF6 + #00C2FF (Vibrant)
Primary + Secondary:    #6C63FF + #8B5CF6 (Cohesive)
```

### Dark Mode
```
Text:           #e2e8f0 (slate-200)
Secondary Text: #94a3b8 (slate-400)
Background:     #0f172a (slate-900)
Border:         rgba(255,255,255,0.1)
```

## 🎓 Design Principles

1. **Contrast** - Ensure readability
2. **Hierarchy** - Clear visual priority
3. **Consistency** - Repeated patterns
4. **Whitespace** - Room to breathe
5. **Accessibility** - Color-blind friendly

## ✅ Quality Checklist

- [ ] Colors meet WCAG AA contrast
- [ ] Animations are smooth (60fps)
- [ ] Spacing is consistent
- [ ] Typography is readable
- [ ] Mobile responsive
- [ ] No color-only communication
- [ ] Icons are clear and consistent

## 🎨 Customization Workflow

### Step 1: Update Config
```js
// tailwind.config.js
colors: {
  shopora: {
    primary: '#YOUR_PRIMARY',
    secondary: '#YOUR_SECONDARY',
    accent: '#YOUR_ACCENT',
  }
}
```

### Step 2: Test Globally
- Check header
- Check buttons
- Check cards
- Check highlights

### Step 3: Adjust Shadows
```js
boxShadow: {
  'glow': `0 20px 80px ${yourColor}`,
}
```

### Step 4: Update Gradients
Update any hardcoded gradient values in components

## 📚 Reference Files

- Colors: `tailwind.config.js` → `colors`
- Shadows: `tailwind.config.js` → `boxShadow`
- Typography: `src/index.css`
- Components: `src/components/`

---

Use this system to maintain consistency across the entire application. 🎨✨
