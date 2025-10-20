'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">E-Commerce</span>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Discover amazing products at great prices. Your one-stop shop for all your needs with fast delivery and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="linkedin" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/accordion" text="FAQ" />
              <FooterLink href="/blog" text="Blog" />
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <FooterLink href="/shipping" text="Shipping Info" />
              <FooterLink href="/returns" text="Returns" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms of Service" />
              <FooterLink href="/size-guide" text="Size Guide" />
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>



        {/* Bottom Bar - Mobile Optimized */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
              
              {/* Copyright - Always centered on mobile */}
              <div className="text-gray-400 text-sm text-center md:text-left order-2 md:order-1">
                © {currentYear} E-Commerce Catalog. All rights reserved.
              </div>
              
              {/* Legal Links - Centered on mobile */}
              <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm order-1 md:order-2">
                <FooterLink href="/privacy" text="Privacy" small />
                <FooterLink href="/terms" text="Terms" small />
                <FooterLink href="/cookies" text="Cookies" small />
                <FooterLink href="/sitemap" text="Sitemap" small />
              </div>
              
              {/* Payment Methods - Hidden on very small screens */}
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400 order-3">
                <span className="hidden lg:inline">Secure payments:</span>
                <div className="flex space-x-1">
                  <PaymentIcon type="visa" />
                  <PaymentIcon type="mastercard" />
                  <PaymentIcon type="paypal" />
                  <PaymentIcon type="applepay" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

// Social Media Icon Component
function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const icons: { [key: string]: React.ReactNode } = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.558-.741-.947-.95-2.157-.586-3.317.364-1.159 1.205-2.051 2.291-2.487 1.086-.436 2.306-.366 3.327.188 1.021.554 1.722 1.548 1.922 2.66.2 1.112-.125 2.239-.895 3.087-.77.848-1.87 1.327-2.97 1.327zm7.548 0c-.551 0-1.102-.14-1.593-.416-.49-.275-.897-.67-1.175-1.148-.278-.478-.416-1.022-.399-1.574.017-.552.188-1.088.5-1.551.311-.463.752-.835 1.274-1.075.522-.24 1.107-.339 1.688-.285.58.054 1.133.26 1.6.598.467.338.83.795 1.05 1.323.22.528.288 1.106.198 1.667-.09.561-.335 1.083-.708 1.514-.373.43-.86.752-1.409.931-.55.179-1.141.208-1.706.086-.566-.122-1.082-.392-1.49-.78l.849-.849c.258.258.586.459.95.583.363.124.752.167 1.136.125.384-.042.752-.161 1.077-.347.325-.186.598-.436.8-.731.202-.295.327-.628.366-.973.039-.345-.01-.693-.143-1.016-.133-.323-.347-.611-.624-.833-.277-.222-.608-.371-.962-.434-.354-.063-.72-.038-1.063.072-.342.11-.652.3-.904.552-.252.252-.439.562-.543.9-.104.339-.122.699-.052 1.044.07.345.23.663.463.92.233.257.531.444.863.542.331.098.685.103 1.019.014.334-.089.635-.27.87-.52l1.061 1.061c-.421.421-.94.75-1.515.96-.575.21-1.19.297-1.803.255zm-7.548-5.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
      aria-label={icon}
    >
      {icons[icon]}
    </a>
  );
}

// Footer Link Component
function FooterLink({ href, text, small = false }: { href: string; text: string; small?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className={`text-gray-400 hover:text-white transition-colors duration-200 ${
          small ? 'text-xs' : 'text-base'
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

// Payment Icon Component
function PaymentIcon({ type }: { type: string }) {
  const icons: { [key: string]: React.ReactNode } = {
    visa: (
      <svg className="w-8 h-5" viewBox="0 0 24 16" fill="currentColor">
        <path d="M10.3 8.3c.1 1.3.9 2.1 2.3 2.1 1.1 0 1.8-.5 1.8-1.2 0-.6-.5-1-1.4-1.4-1.1-.4-1.5-.7-1.5-1.2 0-.5.5-.9 1.2-.9.7 0 1.1.3 1.2.9h1.7c-.1-1.3-.9-2.1-2.3-2.1-1.1 0-1.9.5-1.9 1.3 0 .6.5 1 1.4 1.4 1.1.4 1.5.7 1.5 1.2 0 .6-.6 1-1.4 1-.8 0-1.3-.3-1.4-.9h-1.7zm6.5 0c.2.8.8 1.1 1.6 1.1.7 0 1.2-.2 1.2-.2l.3 1.4c-.3.2-1 .4-1.8.4-1.7 0-2.7-1-2.7-2.4 0-1.2.9-2.1 2.3-2.1 1.2 0 1.9.7 1.9 1.6 0 .4-.2.7-.4.9h-2.4zm2.1-.9c0-.4-.4-.6-.9-.6-.5 0-.9.2-1 .6h1.9zm4.5.9c0 1.1.6 1.6 1.6 1.6.6 0 1.1-.1 1.4-.3l.3 1.3c-.4.2-1.1.4-1.9.4-1.7 0-2.7-1-2.7-2.4 0-1.2.9-2.1 2.3-2.1 1.2 0 1.9.7 1.9 1.6 0 .4-.2.7-.4.9h-2.5zm2.1-.9c0-.4-.4-.6-.9-.6-.5 0-.9.2-1 .6h1.9zM9.6 5.8H7.9l-1.3 4.7h1.7l.3-1.1h1.8l.2 1.1h1.5L9.6 5.8zm-.2 2.8l.4-1.8.4 1.8h-.8zM5.8 5.8H4.1L2.8 10.5h1.7l.3-1.1h1.8l.2 1.1h1.5L5.8 5.8zm-.2 2.8l.4-1.8.4 1.8h-.8z" />
      </svg>
    ),
    mastercard: (
      <svg className="w-8 h-5" viewBox="0 0 24 16" fill="currentColor">
        <path d="M15.4 8c0-1.9 1.5-3.4 3.4-3.4 1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4c-1.9 0-3.4-1.5-3.4-3.4zm-6.8 0c0-1.9-1.5-3.4-3.4-3.4S2.8 6.1 2.8 8s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4zm1.7 0c0 2.8 2.3 5.1 5.1 5.1s5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1z" />
      </svg>
    ),
    paypal: (
      <svg className="w-8 h-5" viewBox="0 0 24 16" fill="currentColor">
        <path d="M7.2 11.9h.8c.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7h-1.5c-.1 0-.2.1-.2.2v2.5c0 .4.3.7.7.7zm3.5-3.4h1.5c.1 0 .2.1.2.2v2.5c0 .4-.3.7-.7.7h-.8c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7zm7.1-2.1c-.9-.9-2.1-1.4-3.4-1.4h-4.3c-.4 0-.7.3-.7.7v5.7c0 .4.3.7.7.7h1.5c.4 0 .7-.3.7-.7v-1.5c0-.4.3-.7.7-.7h1.5c1.3 0 2.5-.5 3.4-1.4.9-.9 1.4-2.1 1.4-3.4 0-1.3-.5-2.5-1.4-3.4zm-.7 5.7c-.7.7-1.6 1-2.6 1h-1.5v-1.5h1.5c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-1.5v-1.5h1.5c1 0 1.9.3 2.6 1 .7.7 1 1.6 1 2.6 0 1-.3 1.9-1 2.6z" />
      </svg>
    ),
    applepay: (
      <svg className="w-8 h-5" viewBox="0 0 24 16" fill="currentColor">
        <path d="M18.7 8.4c0-.9.4-1.7 1.1-2.3-.5-.6-1.2-1-2-1.2-.9-.2-1.8 0-2.5.5-.5.4-.9 1-.9 1.7 0 .9.4 1.6 1.1 2.2.5.5 1.2.9 2 .9.9.1 1.7-.2 2.3-.8-.1-.1-.1-.3-.1-.4zm-2.3-4.5c.7-.8 1.7-1.2 2.7-1 .1 0 .3.1.4.1-.7.9-1.1 2-1.1 3.1 0 .4.1.8.2 1.2-.3.1-.6.2-1 .2-1.2 0-2.2-.7-2.8-1.7-.3-.6-.5-1.3-.5-2 0-1 .4-1.9 1.1-2.5v-.4zm4.6 8.1h-1.6c-.4 0-.7.3-.7.7v3.6c0 .4.3.7.7.7h1.6c.4 0 .7-.3.7-.7v-3.6c0-.4-.3-.7-.7-.7zm-10.2 0h-1.6c-.4 0-.7.3-.7.7v3.6c0 .4.3.7.7.7h1.6c.4 0 .7-.3.7-.7v-3.6c0-.4-.3-.7-.7-.7zm5.1 0h-1.6c-.4 0-.7.3-.7.7v3.6c0 .4.3.7.7.7h1.6c.4 0 .7-.3.7-.7v-3.6c0-.4-.3-.7-.7-.7z" />
      </svg>
    ),
  };

  return (
    <div className="bg-white rounded p-1 flex items-center justify-center">
      {icons[type]}
    </div>
  );
}
