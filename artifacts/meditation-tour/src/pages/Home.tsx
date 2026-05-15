import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, CheckCircle, BookOpen, Download, Brain, MessageCircle, Flame } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-home.png";
import teacherImg from "@assets/IMG_9838_1778799314514.JPG";
import lotusImg from "@/assets/images/lotus.png";
import cityEdmonton from "@/assets/images/city-edmonton.png";
import cityCalgary from "@/assets/images/city-calgary.png";
import cityVancouver from "@/assets/images/city-vancouver.png";
import cityOttawa from "@/assets/images/city-ottawa.png";
import cityToronto from "@/assets/images/city-toronto.png";
import hiddenScienceImg from "@/assets/images/hidden-science.png";
import featureBarImg from "@assets/ChatGPT_Image_May_14,_2026,_08_41_38_PM_1778805736984.png";
import whatToExpectImg from "@assets/ChatGPT_Image_May_14,_2026,_08_52_19_PM_1778806499335.png";

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
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 min-h-[85vh] md:min-h-[95vh] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Left-side fade so text is readable; right side shows Siddhababa clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
          <img
            src={heroImg}
            alt="Jagadguru Mahayogi Siddhababa meditating in the Himalayas"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl"
          >
            {/* Subtitle — small caps */}
            <motion.p variants={fadeInUp} className="text-white/75 text-xs md:text-sm font-medium tracking-[0.28em] uppercase mb-4 drop-shadow">
              Jagadguru Mahayogi Siddha Baba
            </motion.p>

            {/* Main title — stacked large serif */}
            <motion.h1 variants={fadeInUp} className="font-serif font-bold text-white leading-[0.9] drop-shadow-lg mb-3">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight">Himalayan</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight">Meditation</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-secondary mt-1">
                &amp; Wisdom Tour
              </span>
            </motion.h1>

            {/* Lotus divider */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 my-5 max-w-xs">
              <div className="h-px flex-1 bg-white/35" />
              <span className="text-white/60 text-base">🪷</span>
              <div className="h-px flex-1 bg-white/35" />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="text-white/80 text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-8 drop-shadow">
              Awaken &nbsp;•&nbsp; Transform &nbsp;•&nbsp; Realize
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-sans font-semibold tracking-[0.15em] uppercase px-8 h-12 md:h-14 rounded-full w-full sm:w-auto" data-testid="button-reserve-spot">
                <Link href="/edmonton">Canada Tour 🍁</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 text-sm md:text-base px-8 h-12 md:h-14 rounded-full w-full sm:w-auto" data-testid="button-view-cities">
                <a href="#cities">View Cities</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-14 md:pt-28 md:pb-10 bg-background">
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

      {/* Hidden Science / Mahayog Section */}
      <section className="py-14 md:pt-10 md:pb-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12 md:gap-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* Left — Text */}
              <motion.div variants={fadeInUp} className="w-full min-w-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />
                  <div className="flex items-center gap-2 text-secondary/60">
                    <span className="text-lg">✦</span>
                    <span className="text-2xl">✦</span>
                    <span className="text-lg">✦</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
                  Discover the Hidden Science Within You
                </h2>
                <div className="space-y-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8">
                  <p>Ancient wisdom that has guided seekers for thousands of years.</p>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-secondary mb-2">
                  Himalayan Siddha Mahayog Meditation
                </h3>
                <div className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-medium mb-5">
                  3 Session Special
                </div>
                <p className="text-muted-foreground font-light text-base leading-relaxed mb-7">
                  Over the course of three transformative sessions, you will be guided through an ancient meditation technique designed to awaken dormant energy, clear mental blocks, and establish a profound connection with your inner self.
                </p>
                <h4 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-5">What to Expect</h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Live guided meditation with a Himalayan Siddha master",
                    "Activation of dormant kundalini energy & chakras",
                    "Yogic exercises & breathing techniques for clarity and calm",
                    "Personal guidance on your spiritual path",
                    "A profound experience of inner discovery and awakening",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground font-light">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* E-Book download — card style with chakra/lotus thumbnail */}
                <div className="mt-8 pt-7 border-t border-border">
                  <div className="flex items-start gap-4 bg-background rounded-2xl p-4 border border-border shadow-sm">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-secondary/10 flex items-center justify-center">
                      <img src={lotusImg} alt="Chakra lotus symbol" className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <a
                        href="/hidden-science-within-you.pdf"
                        download="The-Hidden-Science-Within-You.pdf"
                        className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors"
                      >
                        <Download className="w-4 h-4 shrink-0" />
                        Download Free E-Book
                      </a>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        This e-book reveals the profound science of the inner world — chakras, prana, and the path to samadhi — as taught by the living Siddha masters of the Himalayas.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — Photo + Feature Bar */}
              <motion.div variants={fadeInUp} className="w-full min-w-0 flex flex-col gap-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                  <img
                    src={hiddenScienceImg}
                    alt="Person meditating — chakra and kundalini awakening"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative divider before The Journey */}
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
      <section className="py-14 md:py-28 relative overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              The Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-white/70 font-light mb-10 md:mb-16">
              Programs across Canada designed for deep transformation.
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
            <div className="relative flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-0">
              {/* Connecting line (desktop only) */}
              <div className="hidden sm:block absolute top-9 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-white/10 via-secondary/60 to-white/10" />

              {[
                {
                  Icon: Brain,
                  title: "Himalayan Siddha Mahayog Meditation",
                  desc: "Awaken dormant energy, still the mind, and experience the depths of the inner self.",
                  iconColor: "text-violet-300",
                  ringColor: "border-violet-400/50",
                  bgColor: "bg-violet-900/40",
                },
                {
                  Icon: MessageCircle,
                  title: "Wisdom Talks (Satsang)",
                  desc: "Sit in the presence of a living master and receive profound teachings on consciousness, the Self, and reality.",
                  iconColor: "text-teal-300",
                  ringColor: "border-teal-400/50",
                  bgColor: "bg-teal-900/40",
                },
                {
                  Icon: Flame,
                  title: "Vedic Ceremonies",
                  desc: "Powerful Vedic practices that purify the environment, invoke inner energy and help remove obstacles.",
                  iconColor: "text-secondary",
                  ringColor: "border-secondary/50",
                  bgColor: "bg-secondary/10",
                },
              ].map(({ Icon, title, desc, iconColor, ringColor, bgColor }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center text-center flex-1 px-4"
                >
                  <div className={`relative z-10 w-[72px] h-[72px] rounded-full ${bgColor} border ${ringColor} shadow-lg backdrop-blur-sm flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-white mb-2">{title}</h4>
                  <p className="text-white/60 font-light text-base leading-relaxed max-w-[220px] mx-auto">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
