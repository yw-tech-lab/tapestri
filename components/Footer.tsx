export default function Footer() {
  return (
    <footer className="bg-background-default border-t border-border-default py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4 text-text-primary">Tapestri Collective</h3>
            <p className="text-text-secondary text-sm font-light">
              Weaving beautiful digital experiences for the modern web.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-text-primary">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Features</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Pricing</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-text-primary">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">About</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Blog</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 text-text-primary">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Twitter</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">LinkedIn</a></li>
              <li><a href="#contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-token-normal font-light">Contact</a></li>
            </ul>
          </div>
        </div> */}
        
        <div className="pt-8 text-center">
          <p className="text-sm text-text-secondary font-light">&copy; {new Date().getFullYear()} Tapestri Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

