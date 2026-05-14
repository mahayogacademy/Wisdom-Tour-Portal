import React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const cities = [
    { name: "Edmonton", path: "/edmonton" },
    { name: "Calgary", path: "/calgary" },
    { name: "Vancouver", path: "/vancouver" },
    { name: "Ottawa", path: "/ottawa" },
    { name: "Toronto", path: "/toronto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-primary tracking-wide">
            Himalayan Meditation <span className="text-secondary">&</span> Wisdom Tour
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {cities.map((city) => (
              <Link 
                key={city.name} 
                href={city.path}
                className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-medium px-6">
              <Link href="/toronto">Reserve Spot</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {cities.map((city) => (
                <Link 
                  key={city.name} 
                  href={city.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-primary hover:text-secondary block py-2"
                >
                  {city.name}
                </Link>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground mt-4 w-full">
                <Link href="/toronto" onClick={() => setIsOpen(false)}>Reserve Spot</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}