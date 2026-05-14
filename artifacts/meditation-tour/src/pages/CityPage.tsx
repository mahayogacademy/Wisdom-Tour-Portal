import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ReservationForm } from "@/components/ReservationForm";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CityPage({ city }: CityPageProps) {
  const cityKey = city.toLowerCase();
  const heroImg = cityImages[cityKey] || torontoImg;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />

      {/* City Hero */}
      <section className="relative pt-20 pb-12 md:pt-44 md:pb-24 min-h-[45vh] md:min-h-[55vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/75 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10" />
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
            className="max-w-3xl"
          >
            <span className="inline-block text-secondary font-medium tracking-widest uppercase mb-3 text-xs md:text-sm drop-shadow">
              Meditation &amp; Wisdom Tour
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 drop-shadow-md">
              {city}
            </h1>
            <p className="text-base md:text-xl text-white/80 font-light max-w-xl drop-shadow">
              Join Jagadguru Mahayogi Siddhababa for a transformative 3-session special program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Reservation form first on mobile, details second */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

            {/* Reservation Form — top on mobile, right on desktop */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full lg:w-7/12 order-1 lg:order-2"
            >
              <ReservationForm city={city} />
            </motion.div>

            {/* Program Details — below form on mobile, left on desktop */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full lg:w-5/12 order-2 lg:order-1"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Program Details</h2>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg md:text-xl text-primary mb-1">Dates</h4>
                    <p className="text-muted-foreground font-light text-sm md:text-base">Coming Soon</p>
                    <p className="text-xs md:text-sm text-muted-foreground/70 mt-1">Reserve to receive updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg md:text-xl text-primary mb-1">Schedule</h4>
                    <p className="text-muted-foreground font-light text-sm md:text-base">Himalayan Siddha Mahayog Meditation</p>
                    <p className="text-xs md:text-sm text-secondary font-medium mt-1">3 Session Special</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg md:text-xl text-primary mb-1">Venue</h4>
                    <p className="text-muted-foreground font-light text-sm md:text-base">{city} Area</p>
                    <p className="text-xs md:text-sm text-muted-foreground/70 mt-1">Exact location coming soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 p-5 md:p-8 bg-card border border-border rounded-xl">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">What to Expect</h3>
                <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed mb-4">
                  Experience ancient meditation practices transmitted through an unbroken Himalayan lineage. These sessions are designed for deep inner peace and self-realization, suitable for both beginners and experienced seekers.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    Guided deep meditation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    Spiritual discourse &amp; wisdom
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    Energy awakening practices
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
