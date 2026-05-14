import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-home.png";
import teacherImg from "@assets/IMG_2389_1778725702179.JPG";
import lotusImg from "@/assets/images/lotus.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const cities = [
    { name: "Edmonton", path: "/edmonton", desc: "Gateway to the north" },
    { name: "Calgary", path: "/calgary", desc: "Foothills of wisdom" },
    { name: "Vancouver", path: "/vancouver", desc: "Coastal serenity" },
    { name: "Ottawa", path: "/ottawa", desc: "Capital reflection" },
    { name: "Toronto", path: "/toronto", desc: "Heart of the journey" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10" />
          <img
            src={heroImg}
            alt="Himalayan mountains sunrise"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block text-secondary font-medium tracking-widest uppercase mb-4 text-xs md:text-sm">
              Canada 2026
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight drop-shadow-lg">
              <span className="whitespace-nowrap">Himalayan Meditation</span>{" "}
              <span className="text-secondary">&amp;</span> Wisdom Tour
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-primary-foreground font-semibold tracking-wide mb-8 drop-shadow">
              With His Holiness Jagadguru Mahayogi Siddhababa
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary-foreground/85 font-light italic mb-10 max-w-md mx-auto leading-relaxed">
              For inner peace, clarity, and transformation.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground text-base md:text-lg px-8 h-12 md:h-14 w-full sm:w-auto" data-testid="button-reserve-spot">
                <Link href="/edmonton">Reserve Spot</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-8 h-12 md:h-14 w-full sm:w-auto" data-testid="button-view-cities">
                <a href="#cities">View Cities</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-14 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="w-full lg:w-auto lg:flex-shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:w-72">
                <img
                  src={teacherImg}
                  alt="His Holiness Jagadguru Mahayogi Siddhababa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 35%, transparent 60%)' }} />
                <div className="absolute bottom-0 left-0 p-5 md:p-8">
                  <p className="text-white font-serif text-lg md:text-2xl font-semibold drop-shadow-md">Jagadguru Mahayogi Siddhababa</p>
                  <p className="text-white/80 text-xs tracking-wider uppercase mt-1 drop-shadow-md">Himalayan Siddha Master</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="w-full lg:w-auto lg:max-w-md"
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">
                Meet Enlightened Himalayan Yogi
              </h2>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  His Holiness Jagadguru Mahayogi Siddhababa is a Himalayan yogi and spiritual teacher dedicated to sharing the timeless wisdom of the ancient yogic tradition in a way that is accessible and meaningful for modern life. Deeply grounded in meditation, Vedic knowledge, and the inner sciences of yoga, he guides seekers from all backgrounds toward greater peace, clarity, and self-understanding.
                </p>
                <p>
                  Rooted in an unbroken Himalayan lineage, his teachings combine profound spiritual depth with warmth, humility, and practical insight. Through Himalayan Siddha Mahayog meditation, discourse, and personal guidance, he continues to inspire individuals and communities around the world on the path of inner transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect / Program */}
      {/* Cities Grid */}
      <section id="cities" className="py-14 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Tour Destinations</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Gatherings will be held across five major cities. Register early as spaces are limited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-8">
            {cities.map((city, idx) => (
              <motion.div
                key={city.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.08 } }
                }}
                className={
                  idx < 3
                    ? "lg:col-span-2"
                    : idx === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2"
                }
              >
                <Link href={city.path} className="group block h-full" data-testid={`link-city-${city.name.toLowerCase()}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-full transition-all duration-300 hover:shadow-xl active:scale-[0.98]">
                    <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/60 group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5 md:p-7">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 flex items-center justify-between">
                        {city.name}
                        <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <div className="space-y-1.5 mb-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>Date: To Be Announced</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>Venue: To Be Announced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect / Program */}
      <section className="py-14 md:py-28 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
              The Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-muted-foreground font-light mb-10 md:mb-16">
              A meticulously crafted program designed for deep transformation.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 md:p-12 shadow-sm border border-border text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">Himalayan Siddha Mahayog Meditation</h3>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-5">
                3 Session Special
              </div>
              <p className="text-muted-foreground font-light text-base md:text-lg mb-7 leading-relaxed">
                Over the course of three transformative sessions, you will be guided through ancient meditation techniques designed to awaken dormant energy, clear mental blocks, and establish a profound connection with your inner self.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-primary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary shrink-0" />
                  <span>Dates: Coming Soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <span>Venues: Coming Soon</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Divider */}
      <section className="relative py-20 md:py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <img
            src={lotusImg}
            alt="Glowing golden lotus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 md:mb-8">
            Begin Your Pilgrimage
          </h2>
          <p className="text-base md:text-xl text-primary-foreground/90 font-light mb-8 md:mb-10">
            A rare opportunity to sit with a master and experience the profound depths of Himalayan meditation.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground text-base md:text-lg px-8 md:px-10 h-12 md:h-16 font-serif w-full sm:w-auto">
            <Link href="/edmonton">Reserve Your Spot</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
