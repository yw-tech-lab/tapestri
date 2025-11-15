# Design Tokens Guide

This project uses a design token system that makes it extremely easy for clients to customize the site's appearance without touching code.

## Quick Start

1. **Edit `design-tokens.json`** - This is the only file you need to modify!
2. **Rebuild the site** - Run `npm run build` to see your changes

## What are Design Tokens?

Design tokens are simple values (colors, spacing, fonts, etc.) stored in one place. When you change a token, it automatically updates everywhere it's used on the site.

## How to Customize

### Changing Colors

Edit the `colors` section in `design-tokens.json`:

```json
{
  "colors": {
    "primary": {
      "900": "#111827"  // Change this to your brand color
    },
    "accent": {
      "500": "#ef4444"  // Change this to your accent color
    }
  }
}
```

**Common color changes:**
- `primary.900` - Main dark color (used for text, buttons)
- `primary.50` - Lightest gray (used for backgrounds)
- `accent.500` - Accent color (used for highlights, links)

### Changing Spacing

Edit the `spacing` section:

```json
{
  "spacing": {
    "md": "1rem",   // Default spacing
    "lg": "1.5rem", // Large spacing
    "xl": "2rem"    // Extra large spacing
  }
}
```

### Changing Typography

Edit the `typography` section:

```json
{
  "typography": {
    "fontSize": {
      "base": "1rem",      // Base text size
      "lg": "1.125rem",    // Large text
      "2xl": "1.5rem"      // Heading size
    },
    "fontWeight": {
      "normal": "400",     // Regular weight
      "medium": "500",     // Medium weight
      "bold": "700"        // Bold weight
    }
  }
}
```

### Changing Border Radius

Edit the `borderRadius` section:

```json
{
  "borderRadius": {
    "lg": "0.5rem",   // Rounded corners
    "xl": "0.75rem",  // More rounded
    "full": "9999px"  // Fully rounded (pills)
  }
}
```

## Using Tokens in Components

After updating tokens, you can use them in your components:

### Colors
```tsx
// Primary colors
<div className="bg-primary-900 text-primary-50">...</div>

// Accent colors
<button className="bg-accent-500 hover:bg-accent-600">...</button>

// Semantic colors
<div className="bg-background-secondary text-text-primary">...</div>
```

### Spacing
```tsx
<div className="p-token-md m-token-lg">...</div>
```

### Border Radius
```tsx
<button className="rounded-token-lg">...</button>
```

## Example: Complete Brand Color Change

To change your entire site's color scheme:

1. Open `design-tokens.json`
2. Find the `primary` colors section
3. Replace the hex values with your brand colors:

```json
{
  "colors": {
    "primary": {
      "50": "#f0f9ff",   // Lightest blue
      "100": "#e0f2fe",
      "200": "#bae6fd",
      "300": "#7dd3fc",
      "400": "#38bdf8",
      "500": "#0ea5e9",  // Main blue
      "600": "#0284c7",
      "700": "#0369a1",
      "800": "#075985",
      "900": "#0c4a6e",   // Darkest blue
      "950": "#082f49"
    }
  }
}
```

4. Save the file
5. Run `npm run build`
6. Your entire site now uses your brand colors!

## Tips

- **Start with colors** - Changing primary and accent colors has the biggest visual impact
- **Use a color palette generator** - Tools like [Coolors.co](https://coolors.co) can help generate color scales
- **Test in browser** - After building, check your site to see how changes look
- **Keep it simple** - You don't need to change every token, just the ones that matter for your brand

## Need Help?

- All tokens are documented in `design-tokens.json` with comments
- Check existing components to see how tokens are used
- The CSS variables are automatically generated from the JSON file

