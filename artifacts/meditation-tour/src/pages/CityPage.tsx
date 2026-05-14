import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ReservationForm } from "@/components/ReservationForm";

// Dynamically import images or use a map
import edmontonImg from "@/assets/images/edmonton.png";
import calgaryImg from "@/assets/images/calgary.png";
import vancouverImg from "@/assets/images/vancouver.png";
import ottawaImg from "@/assets/images/ottawa.png";
import torontoImg from "@/assets/images/toronto.png";

const cityImages: Record<string, string> = {
  edmonton: edmontonImg,
  calgary: calgaryImg,
  vancouver: vancouverImg,
  ottawa: ottawaImg,
  toronto: torontoImg,
};

interface CityPageProps {
  city: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CityPage({ city }: CityPageProps) {
  const cityKey = city.toLowerCase();
  const heroImg = cityImages[cityKey] || torontoImg; // fallback

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />

      {/* City Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          <img 
            src={heroImg} 
            alt={`${city} spiritual landscape`} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="inline-block text-secondary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Meditation & Wisdom Tour
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 drop-shadow-sm">
              {city}
            </h1>
            <p className="text-xl text-primary/80 font-light max-w-2xl">
              Join Jagadguru Mahayogi Siddhababa for a transformative 3-session special program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Program Details */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-5/12 order-2 lg:order-1"
            >
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">Program Details</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-primary mb-1">Dates</h4>
                    <p className="text-muted-foreground font-light">Coming Soon</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Reserve to receive updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-primary mb-1">Schedule</h4>
                    <p className="text-muted-foreground font-light">Himalayan Siddha Mahayog Meditation</p>
                    <p className="text-sm text-secondary font-medium mt-1">3 Session Special</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-primary mb-1">Venue</h4>
                    <p className="text-muted-foreground font-light">{city} Area</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Exact location coming soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">What to Expect</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Experience ancient meditation practices transmitted through an unbroken Himalayan lineage. These sessions are designed for deep inner peace and self-realization, suitable for both beginners and experienced seekers.
                </p>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Guided deep meditation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Spiritual discourse & wisdom
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Energy awakening practices
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-7/12 order-1 lg:order-2"
            >
              <div className="sticky top-32">
                <ReservationForm city={city} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}