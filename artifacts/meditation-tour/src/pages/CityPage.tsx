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

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-primary">{part}</strong> : part
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

interface CityEvent {
  dates: string;
  time?: string;
  hideDate?: boolean;
  title?: string;
  venue: string;
  address: string;
  note?: string;
}

interface CityEventGroup {
  freeBadge?: boolean;
  label: string;
  badge: string;
  badgeStyle: "amber" | "teal";
  description?: string;
  featured?: boolean;
  link?: string;
  events: CityEvent[];
}

const cityEventGroups: Record<string, CityEventGroup[]> = {
  calgary: [
    {
      label: "Open Sessions",
      badge: "Free Admission",
      badgeStyle: "teal",
      events: [
        {
          dates: "Thu, July 9",
          time: "5 – 8 PM",
          title: "Inauguration Program",
          venue: "Shri Sitaram Mandir Society of Calgary",
          address: "3219 34 Ave SE, Calgary, AB T2B 2M6",
        },
        {
          dates: "Sat, July 11",
          time: "4 – 7 PM",
          title: "Special Spiritual Discourse (Satsang)",
          venue: "Shri Sitaram Mandir Society of Calgary",
          address: "3219 34 Ave SE, Calgary, AB T2B 2M6",
        },
        {
          dates: "Sun, July 12",
          time: "4 – 7 PM",
          title: "Special Spiritual Discourse (Satsang)",
          venue: "Shri Sitaram Mandir Society of Calgary",
          address: "3219 34 Ave SE, Calgary, AB T2B 2M6",
        },
      ],
    },
    {
      label: "Himalayan Siddha Mahayog Meditation",
      badge: "By Registration",
      badgeStyle: "amber",
      description: "Sessions begin at 7:00 AM sharp. Please plan to arrive 15–20 minutes early to settle in. This is a 2-day program package — attendance on both days is required.",
      events: [
        {
          dates: "Sat, July 11",
          time: "7 – 11 AM",
          venue: "Shri Sitaram Mandir Society of Calgary",
          address: "3219 34 Ave SE, Calgary, AB T2B 2M6",
        },
        {
          dates: "Sun, July 12",
          time: "7 – 11 AM",
          venue: "Shri Sitaram Mandir Society of Calgary",
          address: "3219 34 Ave SE, Calgary, AB T2B 2M6",
        },
      ],
    },
  ],
  edmonton: [
    {
      label: "Open Sessions",
      badge: "RSVP Today",
      badgeStyle: "teal",
      freeBadge: true,
      link: "https://forms.gle/cbV8VPVZrQnp6Zoo9",
      events: [
        {
          dates: "Mon, July 27",
          time: "4 – 7 PM",
          title: "Grand Opening",
          venue: "Italian Cultural Centre",
          address: "14230 133 Ave NW, Edmonton, AB T5L 4W4",
        },
        {
          dates: "Tue, July 28",
          time: "8 – 10 AM",
          title: "Introductory Session: Himalayan Siddha Mahayog",
          venue: "Italian Cultural Centre",
          address: "14230 133 Ave NW, Edmonton, AB T5L 4W4",
        },
        {
          dates: "Tue, July 28",
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
      description: "Sessions begin at 7:00 AM sharp. Please plan to arrive 15–20 minutes early to complete registration and settle in before we begin.",
      events: [
        {
          dates: "Sat & Sun, July 4 & 5",
          time: "7 – 11 AM (both days)",
          venue: "Council of India Societies of Edmonton",
          address: "9504 37 Ave NW, Edmonton, AB T6E 5N2",
        },
      ],
    },
    {
      label: "5-Day Guru Purnima Celebration",
      badge: "Details Coming Soon",
      badgeStyle: "teal",
      featured: true,
      description: "A sacred multi-day celebration honouring the Guru on the auspicious full moon of Ashadha. Join us for an extraordinary convergence of devotion, wisdom, and divine grace.",
      events: [
        {
          dates: "Sat–Wed, July 25–29",
          venue: "Vishnu Mandir (Fiji Sanatan Society of Alberta)",
          address: "12629 69 St NW, Edmonton, AB T5C 0G7",
        },
      ],
    },
  ],
  vancouver: [
    {
      label: "Open Sessions",
      badge: "Free Admission",
      badgeStyle: "teal",
      description: "Cultural performances, special guests, and a wisdom talk from His Holiness Jagadguru Mahayogi Siddhababa.",
      events: [
        {
          dates: "Fri, July 17",
          time: "5 – 8 PM",
          title: "Grand Welcoming",
          venue: "Hindu Buddhist Foundation of Canada",
          address: "12351 Winram Rd, Surrey, BC V3V 3Y4",
        },
        {
          dates: "Sat, July 18",
          time: "4 – 7 PM",
          title: "Wisdom Talk & Q and A Session (Satsang) with His Holiness",
          venue: "Hindu Buddhist Foundation of Canada",
          address: "12351 Winram Rd, Surrey, BC V3V 3Y4",
        },
        {
          dates: "Sun, July 19",
          time: "4 – 7 PM",
          title: "Wisdom Talk & Q and A Session (Satsang) with His Holiness",
          venue: "Hindu Buddhist Foundation of Canada",
          address: "12351 Winram Rd, Surrey, BC V3V 3Y4",
        },
      ],
    },
    {
      label: "Himalayan Siddha Mahayog Meditation",
      badge: "By Registration",
      badgeStyle: "amber",
      description: "Sessions begin at 7:00 AM sharp. Please plan to arrive 15–20 minutes early to settle in. This is a 2-day program package — attendance on both days is required. Lunch will be served.",
      events: [
        {
          dates: "Sat, July 18",
          time: "7 – 11 AM",
          venue: "Hindu Buddhist Foundation of Canada",
          address: "12351 Winram Rd, Surrey, BC V3V 3Y4",
        },
        {
          dates: "Sun, July 19",
          time: "7 – 11 AM",
          venue: "Hindu Buddhist Foundation of Canada",
          address: "12351 Winram Rd, Surrey, BC V3V 3Y4",
        },
      ],
    },
  ],
  ottawa: [
    {
      label: "Open Session",
      badge: "RSVP Today",
      badgeStyle: "teal",
      freeBadge: true,
      link: "https://forms.gle/GjUBvTDQiVidSmi87",
      description: "Cultural performances, special guests, and a wisdom talk from His Holiness Jagadguru Mahayogi Siddhababa.",
      events: [
        {
          dates: "Sat, Aug 1",
          time: "1 – 5 PM",
          title: "Grand Welcoming",
          venue: "Ottawa Masonic Centre",
          address: "2140 Walkley Rd, Ottawa, ON K1G 3V3",
        },
      ],
    },
    {
      label: "Himalayan Siddha Mahayog Meditation",
      badge: "By Registration",
      badgeStyle: "amber",
      description: "Please arrive at 7am to complete registration and settle in. The program will begin at 7:30am sharp and doors will be closed.\n\nThis is a 2-day program package — attendance on both days is required. Lunch will be served.",
      events: [
        {
          dates: "Sun, Aug 2",
          time: "7 AM – 4 PM",
          venue: "Ottawa Masonic Centre",
          address: "2140 Walkley Rd, Ottawa, ON K1G 3V3",
          note: "Doors close at 7:30am — please arrive on time.",
        },
        {
          dates: "Mon, Aug 3",
          time: "7 AM – 4 PM",
          venue: "Ottawa Masonic Centre",
          address: "2140 Walkley Rd, Ottawa, ON K1G 3V3",
          note: "Doors close at 7:30am — please arrive on time.",
        },
      ],
    },
  ],
};

const cityEvents: Record<string, CityEvent[]> = {
  calgary: [
    { dates: "July 11–12", venue: "Shri Sitaram Mandir Society of Calgary", address: "3219 34 Ave SE, Calgary, AB T2B 2M6" },
  ], // superseded by cityEventGroups below
  vancouver: [
    { dates: "July 17–19", venue: "Hindu Buddhist Foundation of Canada", address: "12351 Winram Rd, Surrey, BC V3V 3Y4" },
  ],
  ottawa: [
    { dates: "Aug 1–3", venue: "Ottawa Masonic Centre", address: "2140 Walkley Rd, Ottawa, ON K1G 3V3" },
  ],
  toronto: [],
};


const faqGroups = [
  {
    title: "Understanding Mahayog",
    items: [
      { q: "What is Kundalini?", a: "Kundalini is the dormant cosmic energy of transformation that lies at the base of the spine. It is the power of higher consciousness within every individual, waiting to be awakened. Recognized across traditions — as Shakti in Tantra, Qi in Chinese medicine, and through Kabbalah in Western mysticism — awakening this latent energy is universally viewed as the path to one's highest potential." },
      { q: "What is Kundalini Awakening?", a: "Kundalini awakening refers to the activation of the latent spiritual energy within a person, leading to expanded awareness and inner transformation. Regardless of one's spiritual path, it is the foundation for true inner evolution and self-realization." },
      { q: "How is Kundalini Awakened Safely?", a: "Through Guru Grace (Shaktipat): Jagadguru Mahayogi Siddhababa can awaken a seeker's Kundalini through touch, sight, mantra, or pure intention. With the guidance of an enlightened Master, Kundalini rises naturally, safely, and in alignment with the seeker's individual journey. Attempting to awaken Kundalini without proper guidance carries significant risks — the energy is potent and can cause imbalances if not properly directed." },
      { q: "What happens once Kundalini is Awakened?", a: "After awakening, the practitioner becomes the observer during meditation. Experiences unfold across three levels — the physical body (automatic asanas, mudras, mantra), the subtle body (inner visualizations, energy flow through the nāḍīs), and the causal body (deep purification of impressions, growing inner peace). Each individual's experience is unique." },
      { q: "What is the Chakra System?", a: "Chakras are subtle energy centers formed at the junctions of the three main energy channels. In Mahayog, chakras are not forced or stimulated — through the natural rising of Kundalini, they are engaged as needed. The seven primary chakras range from Muladhara (stability, grounding) at the base of the spine to Sahasrara (stillness, unity) at the crown." },
    ],
  },
  {
    title: "Eligibility & Preparation",
    items: [
      { q: "Who can attend?", a: "The program is open to sincere seekers of all backgrounds, nationalities, and spiritual traditions. No prior experience with yoga or meditation is required — the only prerequisite is genuine openness to inner exploration and commitment to attend the full program." },
      { q: "Do I need prior meditation experience?", a: "No. The program welcomes complete beginners as well as experienced practitioners. The initiation process is guided entirely by the Guru's transmission and does not depend on prior technique or knowledge. Come as you are." },
      { q: "Are there health or age requirements?", a: "There is no strict age minimum, though participants under 18 may need parental consent. Those with significant medical or psychiatric conditions are encouraged to consult a healthcare provider before attending and to share relevant details in the health section of the registration form." },
      { q: "What should I wear or bring?", a: "Comfortable, loose-fitting clothing in natural fabrics is recommended. White or soft neutral tones are traditional, though not required. A shawl or light wrap is useful for seated sessions. You may also bring a personal meditation mat. All other essential materials will be provided." },
      { q: "What languages are sessions conducted in?", a: "Sessions will be conducted primarily in Hindi, Nepali, or English — whichever best serves the participants present. Please indicate the languages you speak in the registration form so we can accommodate you." },
    ],
  },
  {
    title: "Meditation Program",
    items: [
      { q: "What happens during the meditation program?", a: "The meditation program is a structured, immersive introduction to Mahayog Meditation, culminating in the transmission of Shaktipat initiation by Jagadguru Mahayogi Siddhababa. Each day includes guided meditation sessions, teachings on Kundalini and the subtle body, and open time for questions. The program builds progressively, preparing each participant to receive initiation safely and with awareness." },
      { q: "Can I join if I miss a day?", a: "Full attendance is required for program completion and to receive initiation. If you are unable to commit to all days, we encourage you to register for a future intake. Regular workshops are held monthly, typically beginning on the first Saturday." },
    ],
  },
  {
    title: "Fees & Registration",
    items: [
      { q: "Is there a fee for the program?", a: "**There is no fee for the meditation teaching or initiation.** The teachings are offered freely as a spiritual gift.\n\nTo help cover the practical costs of organizing the Canada programs, including venue, administration, participant access, online resources, and ongoing meditation support, **participants are asked to register through a one-time $100 Mahayog Meditation Membership**.\n\nThis membership supports the volunteer-run, not-for-profit efforts of Mahayogi Siddhababa Spiritual Academy and helps make these programs accessible, organized, and sustainable for all seekers.\n\n**Your one-time Mahayog Meditation Membership includes:**", bullets: ["Access to the 2-day Himalayan Siddha Mahayog meditation program", "5 guided meditation classes, in person and/or online", "Access to eligible Canada Tour city events", "Online weekend guided group meditation", "Online student learning portal", "Online wisdom and Q&A sessions with His Holiness", "Continued guidance and support in the practice", "Free meditation access at participating Himalayan Siddha Mahayog centres worldwide, where available"], aExtra: "No sincere seeker will be turned away due to financial hardship. If the membership cost presents a barrier, please contact the organizing team." },
      { q: "Can I cancel or reschedule?", a: "If you are unable to attend, please notify the organizing team as soon as possible. Your Seva Contribution can be refunded or transferred to a future intake where space is available. Contact canada@siddhamahayog.org for support." },
    ],
  },
  {
    title: "After Initiation",
    items: [
      { q: "What happens after I receive initiation?", a: "Initiation is a beginning, not an end. Once Kundalini is awakened, the energy continues to purify and unfold naturally through your daily meditation practice. After the program you will receive guidance on how to maintain and deepen your practice independently." },
      { q: "How do I continue my practice?", a: "Participants receive instruction in Mahayog self-practice, which can be maintained at home. Ongoing resources — teachings, group sittings (satsang), and access to the broader Mahayog community — are available through your online student learning portal after registration." },
      { q: "Is there ongoing support after initiation?", a: "Yes. Mahayog is not a one-time event — it is a living practice. Your local center provides regular satsang and access to meditation teachings under the guidance of His Holiness Jagadguru Mahayogi Siddhababa." },
    ],
  },
];

export default function CityPage({ city }: CityPageProps) {
  const [openFaqGroup, setOpenFaqGroup] = useState<number | null>(null);
  const [openFaqItem, setOpenFaqItem] = useState<string | null>(null);
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
              Join Jagadguru Mahayogi Siddhababa for a transformative program.
            </p>
            <a
              href={`mailto:canada@siddhamahayog.org?subject=Registration - ${city}`}
              className="inline-block mt-6 px-7 py-3 bg-secondary text-white font-semibold text-sm uppercase tracking-widest rounded-full shadow-lg hover:bg-secondary/90 transition-colors"
            >
              Register
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-10">Program Details</h2>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* LEFT — Events */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full lg:w-7/12"
            >
              <div className="space-y-6 md:space-y-8">
                {(() => {
                  const groups = cityEventGroups[cityKey];
                  if (groups) {
                    return (
                      <div className="space-y-5">
                        {groups.map((group, gi) => (
                          <div key={gi} className={`${gi > 0 ? "pt-8 border-t border-border/50" : ""}`}>
                            {/* Group header */}
                            {group.featured && (
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-xl">🌕</span>
                                <div className="h-px flex-1 bg-secondary/20" />
                                <span className="text-base">🪷</span>
                                <div className="h-px flex-1 bg-secondary/20" />
                                <span className="text-xl">🌕</span>
                              </div>
                            )}
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className={`font-serif font-bold text-primary ${group.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{group.label}</h3>
                              {group.freeBadge && (
                                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary/70">
                                  Free Admission
                                </span>
                              )}
                              {group.link ? (
                                <a
                                  href={group.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                                >
                                  {group.badge} ↗
                                </a>
                              ) : (
                                <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                  group.badgeStyle === "amber"
                                    ? "bg-secondary/15 text-secondary"
                                    : "bg-primary/10 text-primary/70"
                                }`}>
                                  {group.badge}
                                </span>
                              )}
                            </div>
                            {group.description && (
                              <div className="text-sm md:text-base font-light italic mb-5 text-muted-foreground space-y-2">
                                {group.description.split("\n\n").map((para, i) => (
                                  <p key={i}>{para}</p>
                                ))}
                              </div>
                            )}
                            {/* Events — left accent line */}
                            <div className="ml-1 border-l-2 border-secondary/25 pl-5 space-y-5">
                              {group.events.map((ev, i) => (
                                <div key={i} className="relative">
                                  <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary/40 border-2 border-background" />
                                  <p className="font-sans text-base md:text-lg text-secondary">
                                    {!ev.hideDate && <span className="font-bold">{ev.dates}</span>}{ev.time && <span className="font-normal ml-2">· {ev.time}</span>}
                                  </p>
                                  {ev.title && <p className="text-primary/80 font-medium text-sm md:text-base mt-0.5">{ev.title}</p>}
                                  <p className="text-muted-foreground font-light text-sm md:text-base mt-0.5">{ev.venue}</p>
                                  <p className="text-sm text-muted-foreground/60 mt-0.5">{ev.address}</p>
                                  {ev.note && <p className="text-xs text-secondary/80 font-medium italic mt-1">{ev.note}</p>}
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
                            <p className="font-sans text-base md:text-lg text-secondary">
                              <span className="font-bold">{ev.dates}</span>{ev.time && <span className="font-normal ml-2">· {ev.time}</span>}
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

              </div>
            </motion.div>

            {/* RIGHT — What to Expect + Register */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full lg:w-5/12"
            >
              <h3 className="font-serif font-bold text-xl md:text-2xl text-primary mb-6">Himalayan Siddha Mahayog Meditation</h3>

              <div className="p-5 md:p-8 bg-card border border-border rounded-xl">
                <h4 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">What to Expect</h4>
                <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed mb-5">
                  These sessions offer guided practice for cultivating inner stillness and self-awareness, whether you are new to meditation or already experienced.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    Guided Mahayog meditation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    Spiritual discourse &amp; wisdom
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    Pranic &amp; energy awakening practices
                  </li>
                </ul>
              </div>


              {/* Register Button */}
              <div className="mt-8">
                <a href={`mailto:canada@siddhamahayog.org?subject=Registration - ${city}`}>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-sans font-semibold tracking-[0.12em] uppercase px-10 h-13 rounded-full text-base w-full sm:w-auto">
                    Register for {city}
                  </Button>
                </a>
              </div>

              {/* Your Guide */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-serif text-lg font-bold text-primary mb-4">Your Guide</h4>
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
            </motion.div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-secondary text-xs font-semibold tracking-[0.3em] uppercase mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqGroups.map((group, gi) => {
              const isGroupOpen = openFaqGroup === gi;
              return (
                <motion.div
                  key={gi}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: gi * 0.05 } } }}
                  className="rounded-2xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => { setOpenFaqGroup(isGroupOpen ? null : gi); setOpenFaqItem(null); }}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-background hover:bg-muted/40 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-secondary text-base">◆</span>
                      <span className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase text-primary">{group.title}</span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isGroupOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-4 h-4 text-muted-foreground shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isGroupOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border divide-y divide-border">
                          {group.items.map((item, ii) => {
                            const key = `${gi}-${ii}`;
                            const isOpen = openFaqItem === key;
                            return (
                              <div key={ii}>
                                <button
                                  onClick={() => setOpenFaqItem(isOpen ? null : key)}
                                  className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-background hover:bg-muted/30 transition-colors text-left"
                                >
                                  <span className="font-medium text-primary text-base md:text-lg">{item.q}</span>
                                  <motion.svg
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-4 h-4 text-secondary shrink-0"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                  </motion.svg>
                                </button>
                                <AnimatePresence initial={false}>
                                  {isOpen && (
                                    <motion.div
                                      key="answer"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.25, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-6 pb-5 pt-1 text-base md:text-lg text-foreground font-light leading-relaxed space-y-3">
                                        {item.a.split("\n\n").map((para, pi) => (
                                          <p key={pi}>{renderBold(para)}</p>
                                        ))}
                                        {"bullets" in item && item.bullets && (
                                          <ul className="space-y-1.5 pl-1">
                                            {(item.bullets as string[]).map((b, bi) => (
                                              <li key={bi} className="flex items-start gap-2">
                                                <span className="text-secondary mt-1.5 text-xs shrink-0">•</span>
                                                <span>{b}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                        {"aExtra" in item && item.aExtra && (
                                          <p className="italic">{item.aExtra as string}</p>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
