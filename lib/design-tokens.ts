// Design tokens configuration
// Edit this file to customize your site's design
// All changes will automatically apply throughout the site

import tokens from '../design-tokens.json'

export const designTokens = tokens

// Helper function to get CSS variable name
export function getTokenVar(category: string, key: string, subKey?: string): string {
  if (subKey) {
    return `--token-${category}-${key}-${subKey}`
  }
  return `--token-${category}-${key}`
}

// Helper to convert tokens to CSS variables
export function tokensToCSSVars(): string {
  let css = ':root {\n'
  
  // Colors
  if (tokens.colors) {
    Object.entries(tokens.colors).forEach(([category, values]: [string, any]) => {
      if (typeof values === 'object' && !Array.isArray(values)) {
        Object.entries(values).forEach(([key, value]: [string, any]) => {
          css += `  ${getTokenVar('color', category, key)}: ${value};\n`
        })
      }
    })
  }
  
  // Spacing
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]: [string, any]) => {
      css += `  ${getTokenVar('spacing', key)}: ${value};\n`
    })
  }
  
  // Typography
  if (tokens.typography) {
    Object.entries(tokens.typography).forEach(([category, values]: [string, any]) => {
      if (typeof values === 'object' && !Array.isArray(values)) {
        Object.entries(values).forEach(([key, value]: [string, any]) => {
          css += `  ${getTokenVar('typography', category, key)}: ${value};\n`
        })
      }
    })
  }
  
  // Border Radius
  if (tokens.borderRadius) {
    Object.entries(tokens.borderRadius).forEach(([key, value]: [string, any]) => {
      css += `  ${getTokenVar('radius', key)}: ${value};\n`
    })
  }
  
  css += '}\n'
  return css
}

