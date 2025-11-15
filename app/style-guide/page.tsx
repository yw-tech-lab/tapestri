import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-background-default">
      <ScrollProgress />
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-light mb-6 text-text-primary tracking-tight">
              Style Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl font-light">
              A comprehensive reference for all design tokens used throughout the site. 
              Edit <code className="bg-background-secondary px-2 py-1 rounded text-sm">design-tokens.json</code> to customize.
            </p>
          </div>

          {/* Colors Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Colors</h2>
            
            {/* Primary Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-text-primary">Primary</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div key={shade} className="text-center">
                    <div 
                      className={`h-24 rounded-token-lg mb-2 border border-border-default`}
                      style={{
                        backgroundColor: `var(--token-color-primary-${shade})`
                      }}
                    />
                    <div className="text-xs text-text-secondary font-mono">primary-{shade}</div>
                    <div className="text-xs text-text-tertiary font-mono mt-1">
                      var(--token-color-primary-{shade})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-text-primary">Accent</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="text-center">
                    <div 
                      className={`h-24 rounded-token-lg mb-2 border border-border-default`}
                      style={{
                        backgroundColor: `var(--token-color-accent-${shade})`
                      }}
                    />
                    <div className="text-xs text-text-secondary font-mono">accent-{shade}</div>
                    <div className="text-xs text-text-tertiary font-mono mt-1">
                      var(--token-color-accent-{shade})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-text-primary">Semantic Colors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Backgrounds */}
                <div>
                  <h4 className="text-lg font-medium mb-4 text-text-primary">Backgrounds</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="h-16 bg-background-default rounded-token-lg border border-border-default mb-2 flex items-center justify-center">
                        <span className="text-text-primary font-mono text-sm">background-default</span>
                      </div>
                    </div>
                    <div>
                      <div className="h-16 bg-background-secondary rounded-token-lg border border-border-default mb-2 flex items-center justify-center">
                        <span className="text-text-primary font-mono text-sm">background-secondary</span>
                      </div>
                    </div>
                    <div>
                      <div className="h-16 bg-background-tertiary rounded-token-lg border border-border-default mb-2 flex items-center justify-center">
                        <span className="text-text-primary font-mono text-sm">background-tertiary</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Colors */}
                <div>
                  <h4 className="text-lg font-medium mb-4 text-text-primary">Text Colors</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-background-secondary rounded-token-lg">
                      <p className="text-text-primary text-lg mb-2">text-primary</p>
                      <p className="text-text-secondary text-lg mb-2">text-secondary</p>
                      <p className="text-text-tertiary text-lg mb-2">text-tertiary</p>
                      <p className="text-text-inverse text-lg bg-primary-900 px-2 py-1 rounded-token-sm inline-block">text-inverse</p>
                    </div>
                  </div>
                </div>

                {/* Border Colors */}
                <div>
                  <h4 className="text-lg font-medium mb-4 text-text-primary">Border Colors</h4>
                  <div className="space-y-3">
                    <div className="p-4 border-2 border-border-default rounded-token-lg">
                      <span className="text-text-secondary text-sm">border-default</span>
                    </div>
                    <div className="p-4 border-2 border-border-hover rounded-token-lg">
                      <span className="text-text-secondary text-sm">border-hover</span>
                    </div>
                    <div className="p-4 border-2 border-border-focus rounded-token-lg">
                      <span className="text-text-secondary text-sm">border-focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Typography</h2>
            
            {/* Font Sizes */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-text-primary">Font Sizes</h3>
              <div className="space-y-6 bg-background-secondary p-8 rounded-token-xl">
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-xs (0.75rem)</div>
                  <p className="text-xs text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-sm (0.875rem)</div>
                  <p className="text-sm text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-base (1rem)</div>
                  <p className="text-base text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-lg (1.125rem)</div>
                  <p className="text-lg text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-xl (1.25rem)</div>
                  <p className="text-xl text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-2xl (1.5rem)</div>
                  <p className="text-2xl text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-3xl (1.875rem)</div>
                  <p className="text-3xl text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-4xl (2.25rem)</div>
                  <p className="text-4xl text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">text-5xl (3rem)</div>
                  <p className="text-5xl text-text-primary">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>

            {/* Font Weights */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-text-primary">Font Weights</h3>
              <div className="space-y-4 bg-background-secondary p-8 rounded-token-xl">
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">font-light (300)</div>
                  <p className="text-xl font-light text-text-primary">Light weight text</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">font-normal (400)</div>
                  <p className="text-xl font-normal text-text-primary">Normal weight text</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">font-medium (500)</div>
                  <p className="text-xl font-medium text-text-primary">Medium weight text</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">font-semibold (600)</div>
                  <p className="text-xl font-semibold text-text-primary">Semibold weight text</p>
                </div>
                <div>
                  <div className="text-xs text-text-tertiary font-mono mb-1">font-bold (700)</div>
                  <p className="text-xl font-bold text-text-primary">Bold weight text</p>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Spacing</h2>
            <div className="space-y-6">
              {[
                { name: 'xs', value: '0.25rem', var: '--token-spacing-xs' },
                { name: 'sm', value: '0.5rem', var: '--token-spacing-sm' },
                { name: 'md', value: '1rem', var: '--token-spacing-md' },
                { name: 'lg', value: '1.5rem', var: '--token-spacing-lg' },
                { name: 'xl', value: '2rem', var: '--token-spacing-xl' },
                { name: '2xl', value: '3rem', var: '--token-spacing-2xl' },
                { name: '3xl', value: '4rem', var: '--token-spacing-3xl' },
                { name: '4xl', value: '6rem', var: '--token-spacing-4xl' },
              ].map((spacing) => (
                <div key={spacing.name} className="flex items-center gap-6">
                  <div className="w-32 text-text-secondary font-mono text-sm">{spacing.name}</div>
                  <div className="flex-1 bg-background-secondary rounded-token-lg p-4">
                    <div 
                      className="bg-primary-500 h-8 rounded-token-sm"
                      style={{ width: spacing.value }}
                    />
                  </div>
                  <div className="w-48 text-text-tertiary font-mono text-xs">{spacing.value}</div>
                  <div className="w-64 text-text-tertiary font-mono text-xs">{spacing.var}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Border Radius</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'none', var: '--token-radius-none' },
                { name: 'sm', var: '--token-radius-sm' },
                { name: 'md', var: '--token-radius-md' },
                { name: 'lg', var: '--token-radius-lg' },
                { name: 'xl', var: '--token-radius-xl' },
                { name: '2xl', var: '--token-radius-2xl' },
                { name: 'full', var: '--token-radius-full' },
              ].map((radius) => (
                <div key={radius.name} className="text-center">
                  <div 
                    className="h-24 bg-primary-500 mb-3 flex items-center justify-center"
                    style={{ borderRadius: `var(${radius.var})` }}
                  >
                    <span className="text-text-inverse text-sm font-medium">{radius.name}</span>
                  </div>
                  <div className="text-xs text-text-secondary font-mono">rounded-token-{radius.name}</div>
                  <div className="text-xs text-text-tertiary font-mono mt-1">{radius.var}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Buttons Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Buttons</h2>
            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-2xl font-medium mb-4 text-text-primary">Primary</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary-900 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-primary-800 transition-colors duration-token-normal">
                    Primary Button
                  </button>
                  <button className="bg-primary-800 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-primary-700 transition-colors duration-token-normal">
                    Primary Dark
                  </button>
                  <button className="bg-primary-700 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-primary-600 transition-colors duration-token-normal">
                    Primary Medium
                  </button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-2xl font-medium mb-4 text-text-primary">Secondary</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="text-text-primary px-6 py-3 rounded-token-full text-base font-medium hover:bg-background-secondary transition-colors duration-token-normal border border-border-default">
                    Secondary Button
                  </button>
                  <button className="text-text-primary px-6 py-3 rounded-token-full text-base font-medium hover:bg-background-tertiary transition-colors duration-token-normal">
                    Text Button
                  </button>
                </div>
              </div>

              {/* Accent Buttons */}
              <div>
                <h3 className="text-2xl font-medium mb-4 text-text-primary">Accent</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-accent-500 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-accent-600 transition-colors duration-token-normal">
                    Accent Button
                  </button>
                  <button className="bg-accent-600 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-accent-700 transition-colors duration-token-normal">
                    Accent Dark
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-2xl font-medium mb-4 text-text-primary">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="bg-primary-900 text-text-inverse px-4 py-2 rounded-token-full text-sm font-medium hover:bg-primary-800 transition-colors duration-token-normal">
                    Small
                  </button>
                  <button className="bg-primary-900 text-text-inverse px-6 py-3 rounded-token-full text-base font-medium hover:bg-primary-800 transition-colors duration-token-normal">
                    Medium
                  </button>
                  <button className="bg-primary-900 text-text-inverse px-8 py-4 rounded-token-full text-lg font-medium hover:bg-primary-800 transition-colors duration-token-normal">
                    Large
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-light mb-8 text-text-primary">Cards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background-default border border-border-default rounded-token-xl p-6">
                <h3 className="text-xl font-medium mb-3 text-text-primary">Default Card</h3>
                <p className="text-text-secondary">A simple card with default background and border.</p>
              </div>
              <div className="bg-background-secondary border border-border-default rounded-token-xl p-6">
                <h3 className="text-xl font-medium mb-3 text-text-primary">Secondary Card</h3>
                <p className="text-text-secondary">A card with secondary background color.</p>
              </div>
              <div className="bg-background-tertiary border border-border-default rounded-token-xl p-6">
                <h3 className="text-xl font-medium mb-3 text-text-primary">Tertiary Card</h3>
                <p className="text-text-secondary">A card with tertiary background color.</p>
              </div>
            </div>
          </section>

          {/* Usage Instructions */}
          <section className="mb-20 bg-background-secondary p-8 rounded-token-xl">
            <h2 className="text-4xl font-light mb-6 text-text-primary">How to Customize</h2>
            <div className="space-y-4 text-text-secondary">
              <p className="text-lg">
                To customize the design tokens, edit the <code className="bg-background-default px-2 py-1 rounded text-sm font-mono">design-tokens.json</code> file in the root of the project.
              </p>
              <div className="bg-background-default p-4 rounded-token-lg font-mono text-sm">
                <div className="text-text-tertiary mb-2">Example: Change primary color</div>
                <div className="text-text-primary">
                  {`{
  "colors": {
    "primary": {
      "900": "#1a1a1a"  // Your brand color
    }
  }
}`}
                </div>
              </div>
              <p className="text-lg">
                After editing, rebuild the site with <code className="bg-background-default px-2 py-1 rounded text-sm font-mono">npm run build</code> to see your changes.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

