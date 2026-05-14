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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — short on mobile, full on md+ */}
          <Link href="/" className="font-serif font-bold text-primary tracking-wide leading-tight">
            <span className="block md:hidden text-base">Himalayan M&amp;W Tour</span>
            <span className="hidden md:block text-xl lg:text-2xl">Himalayan Meditation <span className="text-secondary">&</span> Wisdom Tour</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.path}
                className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-medium px-5">
              <Link href="/edmonton">Reserve Spot</Link>
            </Button>
          </nav>

          {/* Mobile: Reserve button + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-primary-foreground text-xs px-3 h-9">
              <Link href="/edmonton">Reserve</Link>
            </Button>
            <button
              className="p-2 text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.path}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-lg text-primary hover:text-secondary block py-3 border-b border-border/40 last:border-0"
                >
                  {city.name}
                </Link>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary-foreground mt-4 w-full h-12 text-base">
                <Link href="/edmonton" onClick={() => setIsOpen(false)}>Reserve Your Spot</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
