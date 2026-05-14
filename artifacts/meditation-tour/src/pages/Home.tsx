import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, CheckCircle, BookOpen, Download, Brain, MessageCircle, Flame } from "lucide-react";
import { Nav } from "@/components/Nav";
import { EbookForm } from "@/components/EbookForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-home.png";
import teacherImg from "@assets/IMG_2389_1778725702179.JPG";
import lotusImg from "@/assets/images/lotus.png";
import cityEdmonton from "@/assets/images/city-edmonton.png";
import cityCalgary from "@/assets/images/city-calgary.png";
import cityVancouver from "@/assets/images/city-vancouver.png";
import cityOttawa from "@/assets/images/city-ottawa.png";
import cityToronto from "@/assets/images/city-toronto.png";

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
    { name: "Edmonton", path: "/edmonton", desc: "Gateway to the north", img: cityEdmonton },
    { name: "Calgary", path: "/calgary", desc: "Foothills of wisdom", img: cityCalgary },
    { name: "Vancouver", path: "/vancouver", desc: "Coastal serenity", img: cityVancouver },
    { name: "Ottawa", path: "/ottawa", desc: "Capital reflection", img: cityOttawa },
    { name: "Toronto", path: "/toronto", desc: "Heart of the journey", img: cityToronto },
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:mx-0">
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
              className="w-full lg:w-1/2"
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
              <div className="flex flex-wrap gap-3 mt-8">
                {["Meditation Master", "Chakra & Kundalini Expert", "Ayurveda Acharya", "Samadhi Siddha"].map((label) => (
                  <span
                    key={label}
                    className="px-4 py-1.5 rounded-full border border-primary/30 text-sm text-primary font-medium tracking-wide"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect / Program */}
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 py-2 px-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />
        <div className="flex items-center gap-2 text-secondary/60">
          <span className="text-lg">✦</span>
          <span className="text-2xl">✦</span>
          <span className="text-lg">✦</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
      </div>

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
                      <img
                        src={city.img}
                        alt={`${city.name} spiritual meditation gathering`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-orange-400/10 to-transparent" />
                    </div>
                    <div className="p-5 md:p-7 flex flex-col gap-4">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 flex items-center justify-between">
                          {city.name}
                          <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </h3>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary shrink-0" />
                            <span>Date: To Be Announced</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary shrink-0" />
                            <span>Venue: To Be Announced</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-1">
                        <div className="inline-block bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold font-sans px-5 py-2.5 rounded-xl transition-colors duration-200">
                          Reserve Spot
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

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
              The Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-muted-foreground font-light mb-10 md:mb-16">
              A meticulously crafted program designed for deep transformation.
            </motion.p>
          </motion.div>

          {/* Three Pillars — Horizontal Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-14 md:mb-20"
          >
            <div className="relative flex flex-col sm:flex-row items-start sm:items-start justify-between gap-10 sm:gap-0">
              {/* Connecting line (desktop only) */}
              <div className="hidden sm:block absolute top-9 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-secondary/30 via-secondary/60 to-secondary/30" />

              {[
                {
                  Icon: Brain,
                  label: "01",
                  title: "Mahayog Meditation",
                  desc: "Ancient Himalayan techniques to awaken dormant energy, still the mind, and experience the depths of inner silence.",
                },
                {
                  Icon: MessageCircle,
                  label: "02",
                  title: "Wisdom Talks (Satsang)",
                  desc: "Sit in the presence of a living master and receive profound teachings on consciousness, the Self, and reality.",
                },
                {
                  Icon: Flame,
                  label: "03",
                  title: "Vedic Ceremonies",
                  desc: "Sacred fire rituals and traditional Vedic practices that purify the space and invoke divine blessings.",
                },
              ].map(({ Icon, label, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center text-center flex-1 px-4"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-background border-2 border-secondary/40 shadow-md flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-primary mb-2">{title}</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-[220px] mx-auto">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Program */}
            <motion.div variants={fadeInUp} className="text-left flex flex-col gap-5">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">Himalayan Siddha Mahayog Meditation</h3>
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  3 Session Special
                </div>
                <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                  Over the course of three transformative sessions, you will be guided through ancient meditation techniques designed to awaken dormant energy, clear mental blocks, and establish a profound connection with your inner self.
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <h4 className="font-serif text-lg md:text-xl font-semibold text-primary mb-4">What to Expect</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    "Live guided meditation with a Himalayan Siddha master",
                    "Activation of dormant chakra & kundalini energy",
                    "Ancient breathing techniques (pranayama) for clarity and calm",
                    "Personal guidance on your spiritual path",
                    "A profound experience of inner stillness and awakening",
                    "Community of sincere seekers from across Canada",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground font-light">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* E-Book Download Card */}
            <motion.div variants={fadeInUp} className="bg-background rounded-2xl p-6 md:p-10 shadow-sm border border-border text-left flex flex-col gap-5 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-5">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div className="inline-block bg-primary/8 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4 border border-primary/20">
                  Free Download
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2 leading-snug">
                  The Hidden Science Within You
                </h3>
                <p className="text-secondary font-medium text-sm mb-5">
                  Understanding Himalayan Siddha Mahayog
                </p>
                <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed mb-8">
                  Discover the ancient wisdom that has guided seekers for thousands of years. This e-book reveals the profound science of the inner world — chakras, prana, and the path to samadhi — as taught by the living Siddha masters of the Himalayas.
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <a
                  href="#ebook-form"
                  className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-primary-foreground font-sans font-medium text-sm px-6 py-3 rounded-xl transition-colors w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Free E-Book
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3 font-light">
                  Enter your email below to receive your free copy instantly.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* E-Book Email Form */}
          <motion.div
            id="ebook-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="mt-8"
          >
            <EbookForm />
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
