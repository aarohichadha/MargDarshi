import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient-green">Marg</span>Darshi
            </h3>
            <p className="text-background/80 leading-relaxed">
              Empowering Indian students to discover their true potential beyond marks. 
              Your data-driven career companion for meaningful growth.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-accent-orange cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-accent-orange cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-accent-orange cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/60 hover:text-accent-orange cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">How It Works</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Career Paths</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent-orange transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-orange" />
                <span className="text-background/80">support@margdarshi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-orange" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent-orange" />
                <span className="text-background/80">Bengaluru, Karnataka, India</span>
              </div>
            </div>
            
            {/* Language Toggle */}
            <div className="pt-4">
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-background/10 text-background rounded-lg text-sm hover:bg-accent-orange transition-colors">
                  English
                </button>
                <button className="px-3 py-1 bg-background/10 text-background rounded-lg text-sm hover:bg-accent-orange transition-colors">
                  हिंदी
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 MargDarshi. All rights reserved. Marks are data, not destiny.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent-orange transition-colors">Sitemap</a>
              <a href="#" className="text-background/60 hover:text-accent-orange transition-colors">Accessibility</a>
              <a href="#" className="text-background/60 hover:text-accent-orange transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;