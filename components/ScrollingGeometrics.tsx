'use client'

import { useEffect, useRef, useState } from 'react'

interface GeometricAsset {
  id: number
  shape: 'circle' | 'triangle' | 'square' | 'hexagon'
  size: number
  speed: number
  initialX: number
  initialY: number
  color: string
  opacity: number
}

export default function ScrollingGeometrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Create geometric assets with different properties
  // initialX is percentage from left, speed is pixels moved per pixel scrolled
  const assets: GeometricAsset[] = [
    // Left side - moving right
    { id: 1, shape: 'circle', size: 120, speed: 0.3, initialX: 5, initialY: 200, color: 'primary', opacity: 0.1 },
    { id: 2, shape: 'triangle', size: 80, speed: 0.5, initialX: 8, initialY: 600, color: 'accent', opacity: 0.15 },
    { id: 3, shape: 'square', size: 100, speed: 0.4, initialX: 3, initialY: 1000, color: 'primary', opacity: 0.12 },
    { id: 4, shape: 'hexagon', size: 90, speed: 0.35, initialX: 6, initialY: 1400, color: 'accent', opacity: 0.1 },
    { id: 5, shape: 'circle', size: 150, speed: 0.25, initialX: 2, initialY: 1800, color: 'primary', opacity: 0.08 },
    
    // Right side - moving left
    { id: 6, shape: 'triangle', size: 110, speed: -0.3, initialX: 92, initialY: 300, color: 'accent', opacity: 0.1 },
    { id: 7, shape: 'square', size: 95, speed: -0.45, initialX: 88, initialY: 700, color: 'primary', opacity: 0.13 },
    { id: 8, shape: 'hexagon', size: 130, speed: -0.35, initialX: 85, initialY: 1100, color: 'accent', opacity: 0.11 },
    { id: 9, shape: 'circle', size: 85, speed: -0.4, initialX: 90, initialY: 1500, color: 'primary', opacity: 0.14 },
    { id: 10, shape: 'triangle', size: 105, speed: -0.28, initialX: 87, initialY: 1900, color: 'accent', opacity: 0.09 },
  ]

  const renderShape = (asset: GeometricAsset, x: number, y: number) => {
    const baseColor = asset.color === 'primary' 
      ? 'var(--token-color-primary-400)' 
      : 'var(--token-color-accent-400)'
    
    // Calculate horizontal movement based on scroll
    const horizontalOffset = scrollY * asset.speed
    // Calculate vertical position relative to viewport
    const viewportY = asset.initialY - scrollY
    const rotation = scrollY * 0.1
    
    // Only show shape if it's within viewport or slightly outside
    if (typeof window !== 'undefined' && (viewportY < -200 || viewportY > window.innerHeight + 200)) {
      return null
    }
    
    const style: React.CSSProperties = {
      position: 'fixed',
      left: `calc(${x}% + ${horizontalOffset}px)`,
      top: `${viewportY}px`,
      width: `${asset.size}px`,
      height: `${asset.size}px`,
      opacity: asset.opacity,
      transform: `rotate(${rotation}deg)`,
      willChange: 'transform, left, top',
      pointerEvents: 'none',
      zIndex: 0,
    }

    switch (asset.shape) {
      case 'circle':
        return (
          <div
            key={asset.id}
            style={{
              ...style,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${baseColor}, ${baseColor}88)`,
              filter: 'blur(1px)',
            }}
          />
        )
      case 'triangle':
        return (
          <div
            key={asset.id}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${asset.size / 2}px solid transparent`,
              borderRight: `${asset.size / 2}px solid transparent`,
              borderBottom: `${asset.size}px solid ${baseColor}`,
              background: 'none',
              filter: 'blur(0.5px)',
            }}
          />
        )
      case 'square':
        return (
          <div
            key={asset.id}
            style={{
              ...style,
              borderRadius: '8px',
              background: `linear-gradient(45deg, ${baseColor}, ${baseColor}66)`,
              transform: `rotate(${scrollY * 0.15}deg)`,
              filter: 'blur(1px)',
            }}
          />
        )
      case 'hexagon':
        return (
          <div
            key={asset.id}
            style={{
              ...style,
              width: `${asset.size}px`,
              height: `${asset.size}px`,
              background: baseColor,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              filter: 'blur(1px)',
            }}
          />
        )
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {assets.map((asset) => renderShape(asset, asset.initialX, asset.initialY))}
    </div>
  )
}

