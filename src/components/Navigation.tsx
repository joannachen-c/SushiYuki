import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Deals", href: "/#deals" },
    { label: "Menu", href: "/#menu" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-navy/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="font-serif text-2xl text-silk flex items-center gap-2">
              <img src="/SushiYukiLogo.png" alt="Sushi Yuki Logo" className="h-8" />
              Sushi Yuki
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-silk/70 hover:text-silk transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="sm" asChild>
                <a href="https://www.seamless.com/menu/sushi-yuki-165-w-72nd-st-new-york/7720360?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFkj4wpcjgj1gMOC8uJYGrYgUywJTuDjMIv1_lUvWQ1H89c52h8FAoYABJrzjgBp5DT-IvIE01LMSGxjGS8lpQLL11hmw%3D%3D" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-silk p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy pt-24 md:hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-silk/80 hover:text-silk transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="gold" 
                size="lg" 
                className="mt-4 w-full"
                asChild
              >
                <a 
                  href="https://www.seamless.com/menu/sushi-yuki-165-w-72nd-st-new-york/7720360?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFkj4wpcjgj1gMOC8uJYGrYgUywJTuDjMIv1_lUvWQ1H89c52h8FAoYABJrzjgBp5DT-IvIE01LMSGxjGS8lpQLL11hmw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Order Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
