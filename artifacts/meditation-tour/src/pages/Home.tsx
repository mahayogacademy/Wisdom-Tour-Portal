import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-home.png";
import teacherImg from "@/assets/images/teacher.png";
import lotusImg from "@/assets/images/lotus.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
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
            className="max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block text-secondary font-medium tracking-widest uppercase mb-6 text-sm md:text-base">
              A Sacred Canadian Pilgrimage
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-5 leading-tight drop-shadow-lg">
              Himalayan Meditation <span className="text-secondary">&amp;</span> Wisdom Tour
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-secondary font-serif font-semibold mb-6 drop-shadow">
              His Holiness Jagadguru Mahayogi Siddhababa
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm md:text-base text-primary-foreground/75 font-medium tracking-widest uppercase mb-4">
              Guided Meditation <span className="mx-2 text-secondary">·</span> Timeless Spiritual Teachings <span className="mx-2 text-secondary">·</span> With Enlightened Himalayan Yogi &amp; Meditation Master
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-primary-foreground/85 font-light italic mb-12 max-w-xl mx-auto leading-relaxed">
              For inner peace, clarity, and transformation.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground text-lg px-8 h-14 w-full sm:w-auto" data-testid="button-reserve-spot">
                <Link href="/edmonton">Reserve Spot</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 h-14 w-full sm:w-auto" data-testid="button-view-cities">
                <a href="#cities">View Cities</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <img 
                  src={teacherImg} 
                  alt="Ancient texts in candle light representing the teacher's lineage" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-secondary font-serif text-2xl">Jagadguru Mahayogi Siddhababa</p>
                  <p className="text-primary-foreground/80 text-sm mt-2 tracking-wider uppercase">Himalayan Siddha Master</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
                The Master &amp; The Lineage
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Jagadguru Mahayogi Siddhababa is a Himalayan Siddha master bringing ancient wisdom traditions to Canada. For the first time in this season, a rare gathering opens its doors to those seeking profound spiritual deepening.
                </p>
                <p>
                  These timeless meditation practices, transmitted through direct lineage from the high Himalayas, offer a pathway to inner peace, profound healing, and self-realization. The teachings carry the warmth of a welcoming teacher and the power of unbroken sacred tradition.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect / Program */}
      <section className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              The Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground font-light mb-16">
              A meticulously crafted program designed for deep transformation.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border text-left">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Himalayan Siddha Mahayog Meditation</h3>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                3 Session Special
              </div>
              <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
                Over the course of three transformative sessions, you will be guided through ancient meditation techniques designed to awaken dormant energy, clear mental blocks, and establish a profound connection with your inner self.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-primary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Dates: Coming Soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Venues: Coming Soon</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cities Grid */}
      <section id="cities" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Tour Destinations</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Select your city to view local program details and reserve your spot. Space is highly limited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city, idx) => (
              <motion.div
                key={city.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
                }}
              >
                <Link href={city.path} className="group block h-full">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                      {/* We use a placeholder background color, but it will be replaced by the image in the real app if needed, here we just use CSS gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/60 group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl font-bold text-primary mb-2 flex items-center justify-between">
                        {city.name}
                        <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-muted-foreground font-light">{city.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Divider */}
      <section className="relative py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <img 
            src={lotusImg} 
            alt="Glowing golden lotus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
            Begin Your Pilgrimage
          </h2>
          <p className="text-xl text-primary-foreground/90 font-light mb-10">
            A rare opportunity to sit with a master and experience the profound depths of Himalayan meditation.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary-foreground text-lg px-10 h-16 font-serif">
            <Link href="/toronto">Reserve Your Spot</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}