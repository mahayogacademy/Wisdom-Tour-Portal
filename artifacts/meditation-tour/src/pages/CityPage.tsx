import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Heart, ChevronDown, Users } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import teacherImg from "@assets/IMG_9838_1778799314514.JPG";
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

interface CityEvent {
  dates: string;
  time?: string;
  title?: string;
  venue: string;
  address: string;
}

interface CityEventGroup {
  label: string;
  badge: string;
  badgeStyle: "amber" | "teal";
  description?: string;
  events: CityEvent[];
}

const cityEventGroups: Record<string, CityEventGroup[]> = {
  edmonton: [
    {
      label: "Open Sessions",
      badge: "RSVP Only",
      badgeStyle: "teal",
      events: [
        {
          dates: "July 27",
          time: "4 – 7 PM",
          title: "Grand Opening",
          venue: "Italian Cultural Centre",
          address: "14230 133 Ave NW, Edmonton, AB T5L 4W4",
        },
        {
          dates: "July 28",
          time: "8 – 10 AM",
          title: "Introductory Session: Himalayan Siddha Mahayog",
          venue: "Italian Cultural Centre",
          address: "14230 133 Ave NW, Edmonton, AB T5L 4W4",
        },
        {
          dates: "July 28",
          time: "11 AM – 1 PM",
          title: "Satsang with His Holiness Jagadguru Mahayogi Siddhababa",
          venue: "Hindu Society of Alberta",
          address: "14225 133 Ave NW, Edmonton, AB T5L 4W3",
        },
      ],
    },
    {
      label: "Himalayan Siddha Mahayog Meditation",
      badge: "By Registration",
      badgeStyle: "amber",
      events: [
        {
          dates: "July 4 & 5",
          venue: "Council of India Societies of Edmonton",
          address: "9504 37 Ave NW, Edmonton, AB T6E 5N2",
        },
      ],
    },
    {
      label: "Upcoming Program",
      badge: "Details Coming Soon",
      badgeStyle: "teal",
      events: [
        {
          dates: "July 25 – 29",
          venue: "Vishnu Mandir (Fiji Sanatan Society of Alberta)",
          address: "12629 69 St NW, Edmonton, AB T5C 0G7",
        },
      ],
    },
  ],
};

const cityEvents: Record<string, CityEvent[]> = {
  calgary: [
    { dates: "July 11–12", venue: "Shri Sitaram Mandir Society of Calgary", address: "3219 34 Ave SE, Calgary, AB T2B 2M6" },
  ],
  vancouver: [
    { dates: "July 17–19", venue: "Hindu Buddhist Foundation of Canada", address: "12351 Winram Rd, Surrey, BC V3V 3Y4" },
  ],
  ottawa: [
    { dates: "Aug 1–3", venue: "Ottawa Masonic Centre", address: "2140 Walkley Rd, Ottawa, ON K1G 3V3" },
  ],
  toronto: [],
};

const calgaryFaqs = [
  {
    q: "Do I need any prior meditation experience?",
    a: "Not at all. These sessions are designed to be accessible to complete beginners as well as seasoned practitioners. No prior knowledge or preparation is required — just an open mind and a willingness to experience.",
  },
  {
    q: "How long is each session?",
    a: "Each session runs approximately 2 hours, including guided meditation, a wisdom talk (satsang), and time for questions. You are welcome to stay afterward to speak with the teacher.",
  },
  {
    q: "Is this suitable for all ages and backgrounds?",
    a: "Yes — people of all ages, spiritual backgrounds, and walks of life are warmly welcome. The teachings are universal and carry meaning whether you are new to spirituality or have been on a path for many years.",
  },
];

export default function CityPage({ city }: CityPageProps) {
  const cityKey = city.toLowerCase();
  const heroImg = cityImages[cityKey] || torontoImg;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {/* Program Details — full width */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">Program Details</h2>

              <div className="space-y-6 md:space-y-8">
                {(() => {
                  const groups = cityEventGroups[cityKey];
                  if (groups) {
                    return (
                      <div className="space-y-5">
                        {groups.map((group, gi) => (
                          <div
                            key={gi}
                            className={`rounded-xl border p-5 md:p-6 ${
                              group.badgeStyle === "amber"
                                ? "border-secondary/30 bg-secondary/5"
                                : "border-primary/20 bg-primary/5"
                            }`}
                          >
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                              <h3 className="font-serif font-bold text-base md:text-lg text-primary">{group.label}</h3>
                              <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                group.badgeStyle === "amber"
                                  ? "bg-secondary text-white"
                                  : "bg-primary/15 text-primary"
                              }`}>
                                {group.badge}
                              </span>
                            </div>
                            <div className="space-y-4">
                              {group.events.map((ev, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-full bg-white/70 border border-border flex items-center justify-center shrink-0 mt-0.5">
                                    <Calendar className="w-4 h-4 text-secondary" />
                                  </div>
                                  <div>
                                    <p className="font-serif font-bold text-sm md:text-base text-primary">
                                      {ev.dates}{ev.time && <span className="font-sans font-normal text-secondary text-xs md:text-sm ml-2">· {ev.time}</span>}
                                    </p>
                                    {ev.title && <p className="text-primary/80 font-medium text-xs md:text-sm mt-0.5">{ev.title}</p>}
                                    <p className="text-muted-foreground font-light text-xs md:text-sm mt-0.5">{ev.venue}</p>
                                    <p className="text-xs text-muted-foreground/60 mt-0.5">{ev.address}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  const events = cityEvents[cityKey] ?? [];
                  if (events.length === 0) {
                    return (
                      <>
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
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-serif font-bold text-lg md:text-xl text-primary mb-1">Venue</h4>
                            <p className="text-muted-foreground font-light text-sm md:text-base">{city} Area</p>
                            <p className="text-xs md:text-sm text-muted-foreground/70 mt-1">Exact location coming soon</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                  return (
                    <>
                      {events.map((ev, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                          </div>
                          <div>
                            <p className="font-serif font-bold text-base md:text-lg text-primary">
                              {ev.dates}{ev.time && <span className="font-sans font-normal text-secondary text-sm md:text-base ml-2">· {ev.time}</span>}
                            </p>
                            {ev.title && <p className="text-primary/80 font-medium text-sm md:text-base mt-0.5">{ev.title}</p>}
                            <p className="text-muted-foreground font-light text-sm md:text-base mt-0.5">{ev.venue}</p>
                            <p className="text-xs md:text-sm text-muted-foreground/70 mt-0.5">{ev.address}</p>
                          </div>
                        </div>
                      ))}
                    </>
                  );
                })()}

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg md:text-xl text-primary mb-1">Schedule</h4>
                    <p className="text-muted-foreground font-light text-sm md:text-base">Himalayan Siddha Mahayog Meditation</p>
                    <p className="text-xs md:text-sm text-secondary font-medium mt-1">2 Day Retreat</p>
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

              {cityKey === "calgary" && (
                <div className="mt-6 flex items-start gap-4">
                  <Heart className="w-5 h-5 text-secondary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-1">Open to All — No Admission Fee</h4>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                      This program is offered freely as a gift of wisdom. Those who wish to support the mission of spreading these teachings may offer a voluntary donation — every contribution, large or small, is received with deep gratitude.
                    </p>
                  </div>
                </div>
              )}
              {/* Register Button */}
              <div className="mt-10 md:mt-14">
                <a href={`mailto:canada@siddhamahayog.org?subject=Registration - ${city}`}>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-sans font-semibold tracking-[0.12em] uppercase px-10 h-13 rounded-full text-base">
                    Register for {city}
                  </Button>
                </a>
              </div>
            </motion.div>

          {/* Calgary-only: full-width sections below */}
          {cityKey === "calgary" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-12 md:mt-16 space-y-6"
            >
              {/* Who is this for? + Your Guide — side by side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary mb-2">Who Is This For?</h4>
                    <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                      Everyone is welcome — no prior experience needed. Whether you have never meditated before or have been on a spiritual path for years, these sessions meet you exactly where you are. People of all ages, faiths, and backgrounds attend.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-4">Your Guide</h4>
                  <div className="flex items-start gap-4">
                    <img
                      src={teacherImg}
                      alt="Jagadguru Mahayogi Siddhababa"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top shrink-0 shadow-md border-2 border-secondary/30"
                    />
                    <div>
                      <p className="font-serif font-semibold text-primary text-base md:text-lg leading-tight">Jagadguru Mahayogi Siddhababa</p>
                      <p className="text-xs text-secondary font-medium tracking-wide uppercase mt-0.5 mb-2">Himalayan Siddha Master</p>
                      <p className="text-muted-foreground font-light text-sm leading-relaxed">
                        A living master rooted in an unbroken Himalayan lineage, Siddhababa has guided seekers from all backgrounds toward greater peace, clarity, and self-understanding. His teachings blend profound spiritual depth with warmth and practical insight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ — full width */}
              <div className="p-6 md:p-8 bg-card border border-border rounded-xl">
                <h4 className="font-serif text-xl font-bold text-primary mb-5">Frequently Asked Questions</h4>
                <div className="space-y-2">
                  {calgaryFaqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-background hover:bg-card/60 transition-colors"
                      >
                        <span className="font-medium text-sm md:text-base text-primary">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-secondary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
