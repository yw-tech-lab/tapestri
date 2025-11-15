#!/usr/bin/env node

/**
 * Sync Design Tokens Script
 * 
 * This script reads design-tokens.json and automatically updates
 * the CSS variables in app/globals.css
 * 
 * Run with: node scripts/sync-tokens.js
 * Or: npm run sync-tokens
 */

const fs = require('fs')
const path = require('path')

const tokensPath = path.join(__dirname, '..', 'design-tokens.json')
const cssPath = path.join(__dirname, '..', 'app', 'globals.css')

// Read design tokens
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'))

// Read current CSS file
let cssContent = fs.readFileSync(cssPath, 'utf8')

// Generate CSS variables from tokens
let cssVars = '  /* Design Tokens - Auto-generated from design-tokens.json */\n'
cssVars += '  /* DO NOT EDIT MANUALLY - Edit design-tokens.json instead */\n\n'

// Primary Colors
if (tokens.colors?.primary) {
  cssVars += '  /* Colors - Primary */\n'
  Object.entries(tokens.colors.primary).forEach(([shade, value]) => {
    cssVars += `  --token-color-primary-${shade}: ${value};\n`
  })
  cssVars += '\n'
}

// Accent Colors
if (tokens.colors?.accent) {
  cssVars += '  /* Colors - Accent */\n'
  Object.entries(tokens.colors.accent).forEach(([shade, value]) => {
    cssVars += `  --token-color-accent-${shade}: ${value};\n`
  })
  cssVars += '\n'
}

// Background Colors
if (tokens.colors?.background) {
  cssVars += '  /* Colors - Background */\n'
  Object.entries(tokens.colors.background).forEach(([key, value]) => {
    cssVars += `  --token-color-background-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Text Colors
if (tokens.colors?.text) {
  cssVars += '  /* Colors - Text */\n'
  Object.entries(tokens.colors.text).forEach(([key, value]) => {
    cssVars += `  --token-color-text-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Border Colors
if (tokens.colors?.border) {
  cssVars += '  /* Colors - Border */\n'
  Object.entries(tokens.colors.border).forEach(([key, value]) => {
    cssVars += `  --token-color-border-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Legacy variables for compatibility
cssVars += '  /* Legacy variables for compatibility */\n'
cssVars += '  --background: var(--token-color-background-default);\n'
cssVars += '  --foreground: var(--token-color-text-primary);\n'
cssVars += '\n'

// Spacing
if (tokens.spacing) {
  cssVars += '  /* Spacing */\n'
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars += `  --token-spacing-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Typography - Font Sizes
if (tokens.typography?.fontSize) {
  cssVars += '  /* Typography - Font Sizes */\n'
  Object.entries(tokens.typography.fontSize).forEach(([key, value]) => {
    cssVars += `  --token-typography-fontSize-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Typography - Font Weights
if (tokens.typography?.fontWeight) {
  cssVars += '  /* Typography - Font Weights */\n'
  Object.entries(tokens.typography.fontWeight).forEach(([key, value]) => {
    cssVars += `  --token-typography-fontWeight-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Border Radius
if (tokens.borderRadius) {
  cssVars += '  /* Border Radius */\n'
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars += `  --token-radius-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Transitions
if (tokens.transitions?.duration) {
  cssVars += '  /* Transitions */\n'
  Object.entries(tokens.transitions.duration).forEach(([key, value]) => {
    cssVars += `  --token-transition-duration-${key}: ${value};\n`
  })
  cssVars += '\n'
}

// Replace the :root section in the CSS file
// Split the CSS into parts before and after :root
const rootStartIndex = cssContent.indexOf(':root {')
const rootEndIndex = cssContent.indexOf('\n}', rootStartIndex) + 2

if (rootStartIndex === -1) {
  console.error('❌ Could not find :root block in CSS file')
  process.exit(1)
}

const beforeRoot = cssContent.substring(0, rootStartIndex)
const afterRoot = cssContent.substring(rootEndIndex)

// Reconstruct the CSS file
const newCssContent = beforeRoot + ':root {\n' + cssVars + '}' + afterRoot

// Write the updated CSS
fs.writeFileSync(cssPath, newCssContent, 'utf8')

console.log('✅ Design tokens synced successfully!')
console.log(`   Updated: ${cssPath}`)
console.log(`   Source: ${tokensPath}`)
