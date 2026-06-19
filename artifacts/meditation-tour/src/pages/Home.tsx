import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
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
      { q: "What languages are sessions conducted in?", a: "Sessions will be conducted primarily in English, Nepali, or Hindi — whichever best serves the participants present. Please indicate the languages you speak in the registration form so we can accommodate you." },
    ],
  },
  {
    title: "The Workshop",
    items: [
      { q: "What happens during the retreat?", a: "The retreat is a structured, immersive introduction to Mahayog Meditation, culminating in the transmission of Shaktipat initiation by Jagadguru Mahayogi Siddhababa. Each day includes guided meditation sessions, teachings on Kundalini and the subtle body, and open time for questions. The program builds progressively, preparing each participant to receive initiation safely and with awareness." },
      { q: "Can I join if I miss a day?", a: "Full attendance is required for program completion and to receive initiation. If you are unable to commit to all days, we encourage you to register for a future intake. Regular workshops are held monthly, typically beginning on the first Saturday." },
    ],
  },
  {
    title: "Fees & Registration",
    items: [
      { q: "Is there a fee for the program?", a: "There is no fee for the meditation teaching or initiation — the teachings are offered freely as a spiritual gift. To help cover practical costs of organizing the Canada programs, participants are asked to make a one-time $100 Seva Contribution at the time of registration. No sincere seeker will be turned away due to financial hardship." },
      { q: "What does the Seva Contribution include?", a: "Your contribution includes access to the 2-day Himalayan Siddha Mahayog meditation program, 5 guided meditation classes (in person and/or online), access to eligible Canada Tour city events, online weekend guided group meditation, an online student learning portal, online wisdom and Q&A sessions with His Holiness, and continued guidance and support in the practice." },
      { q: "Can I cancel or reschedule?", a: "If you are unable to attend, please notify the organizing team as soon as possible. Your Seva Contribution can be refunded or transferred to a future intake where space is available. Contact canada@siddhamahayog.org for support with cancellations or transfers." },
    ],
  },
  {
    title: "After Initiation",
    items: [
      { q: "What happens after I receive initiation?", a: "Initiation is a beginning, not an end. Once Kundalini is awakened, the energy continues to purify and unfold naturally through your daily meditation practice. After the retreat you will receive guidance on how to maintain and deepen your practice independently." },
      { q: "How do I continue my practice?", a: "Participants receive instruction in Mahayog self-practice, which can be maintained at home. Ongoing resources — teachings, group sittings (satsang), and access to the broader Mahayog community — are available through your online student learning portal after registration." },
      { q: "Is there ongoing support after initiation?", a: "Yes. Mahayog is not a one-time event — it is a living practice. Your local center provides regular satsang and access to meditation teachings under the guidance of His Holiness Jagadguru Mahayogi Siddhababa." },
    ],
  },
];

export default function Home() {
  const [openFaqGroup, setOpenFaqGroup] = useState<number | null>(null);
  const [openFaqItem, setOpenFaqItem] = useState<string | null>(null);
  const cities = [
    {
      name: "Edmonton", path: "/edmonton", img: cityEdmonton,
      events: [
        { dates: "June 27 & 28", venue: "Italian Cultural Centre" },
        { dates: "July 4 & 5", venue: "Council of India Societies of Edmonton" },
        { dates: "July 25–29", venue: "Vishnu Mandir (Fiji Sanatan Society)" },
      ],
    },
    {
      name: "Calgary", path: "/calgary", img: cityCalgary,
      events: [
        { dates: "July 11–12", venue: "Shri Sitaram Mandir Society of Calgary" },
      ],
    },
    {
      name: "Vancouver", path: "/vancouver", img: cityVancouver,
      events: [
        { dates: "July 17–19", venue: "Hindu Buddhist Foundation of Canada" },
      ],
    },
    {
      name: "Ottawa", path: "/ottawa", img: cityOttawa,
      events: [
        { dates: "Aug 1–3", venue: "Ottawa Masonic Centre" },
      ],
    },
    {
      name: "Toronto", path: "/toronto", img: cityToronto,
      events: [],
    },
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
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-sm md:text-base font-sans font-semibold tracking-[0.12em] uppercase px-8 h-12 md:h-14 rounded-full w-full sm:w-auto" data-testid="button-reserve-spot">
                <a href="#register">Reserve Your Spot</a>
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
                  His Holiness Jagadguru Mahayogi Siddhababa is a Himalayan Meditation Master and spiritual teacher dedicated to sharing the timeless wisdom of the ancient yogic tradition in a way that is accessible and meaningful for modern life. Deeply grounded in meditation, Vedic knowledge, and the inner sciences of yoga, he guides seekers from all backgrounds toward greater peace, clarity, and self-understanding.
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
              <a
                href="/who-is-siddhababa.pdf"
                download="Who-is-Jagadguru-Mahayogi-Siddhababa.pdf"
                className="inline-flex items-center gap-2 mt-6 text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors"
              >
                <Download className="w-4 h-4 shrink-0" />
                Download Free Guide — Who is His Holiness?
              </a>
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
                <h3 className="font-serif text-xl md:text-2xl font-bold text-secondary mb-2">
                  Himalayan Siddha Mahayog Meditation
                </h3>
                <div className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-medium mb-5">
                  2 Day Retreat
                </div>
                <p className="text-muted-foreground font-light text-base leading-relaxed mb-7">
                  Over the course of two days, you will be guided through an ancient meditation technique designed to awaken dormant energy, clear mental blocks, and establish a profound connection with your inner self.
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
                    <li key={item} className="flex items-start gap-3 text-base text-muted-foreground font-light leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>

              {/* Right — Photo + E-Book */}
              <motion.div variants={fadeInUp} className="w-full min-w-0 flex flex-col gap-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                  <img
                    src={hiddenScienceImg}
                    alt="Person meditating — chakra and kundalini awakening"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* E-Book download card */}
                <div className="flex items-start gap-4 bg-background rounded-2xl p-4 border border-border shadow-sm max-w-xs sm:max-w-sm mx-auto lg:mx-0 w-full">
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="/what-is-mahayog.pdf"
                      download="What-is-Mahayog.pdf"
                      className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-secondary/80 transition-colors"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      Download Free Guide
                    </a>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Mahayog reveals the profound science of the inner world — chakras, prana, and the path to samadhi.
                    </p>
                  </div>
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
                        {city.events.length === 0 ? (
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary shrink-0" />
                              <span>Dates coming soon</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                              <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary shrink-0" />
                              <span>Venue to be announced</span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {city.events.map((ev, i) => (
                              <div key={i} className="grid grid-cols-[20px_1fr] gap-x-2 gap-y-0.5 items-start">
                                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-secondary mt-0.5" />
                                <span className="text-sm lg:text-base font-semibold text-primary">{ev.dates}</span>
                                <span />
                                <span className="text-sm text-muted-foreground">{ev.venue}</span>
                              </div>
                            ))}
                          </div>
                        )}
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

      {/* FAQ Section */}
      <section className="py-14 md:py-24 bg-card">
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
                  {/* Group header */}
                  <button
                    onClick={() => {
                      setOpenFaqGroup(isGroupOpen ? null : gi);
                      setOpenFaqItem(null);
                    }}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-background hover:bg-muted/40 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-secondary text-base">◆</span>
                      <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">{group.title}</span>
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

                  {/* Q&A items */}
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
                                  <span className="font-medium text-primary text-sm md:text-base">{item.q}</span>
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
                                      <p className="px-6 pb-5 pt-1 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                                        {item.a}
                                      </p>
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
