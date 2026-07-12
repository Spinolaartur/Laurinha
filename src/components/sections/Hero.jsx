import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero, ui, timeSince, importantDates } from "../../data/siteContent";
import { scrollToSection } from "../../hooks/useActiveSection";
import ImageWithFallback from "../ui/ImageWithFallback";
import LiveCounter from "../ui/LiveCounter";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const headlineLines = hero.headline.split("\n");

  const counters = timeSince.counters;
  const [index, setIndex] = useState(0);
  const active = counters[index];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center scroll-mt-0 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-cream-50 dark:bg-charcoal-950" />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-wine-200/20 dark:bg-wine-900/10 blur-3xl -translate-y-1/2 translate-x-1/4 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-300/15 dark:bg-gold-500/5 blur-3xl translate-y-1/2 -translate-x-1/4 animate-float-slow"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 section-padding pt-32 pb-20">
        {/* Title */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="section-eyebrow mb-6 justify-center"
          >
            {ui.heroEyebrow}
          </motion.p>

          <h1 className="heading-display">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-balance"
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Image + Time since */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero image */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-3xl shadow-elegant ring-1 ring-cream-300/40 dark:ring-charcoal-700/40">
              <ImageWithFallback
                src={hero.image}
                alt={hero.imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative frame */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-gold-400/40 dark:border-gold-500/25 -z-10"
              aria-hidden="true"
            />
          </motion.div>

          {/* Time since slider */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <LiveCounter
              startDate={importantDates[active.dateKey]}
              slideKey={index}
            />
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {counters.map((counter, i) => (
                <button
                  key={counter.dateKey}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={i === index}
                  className={
                    "rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 " +
                    (i === index
                      ? "bg-wine-600 text-cream-50 shadow-soft dark:bg-gold-400 dark:text-charcoal-950"
                      : "border border-charcoal-900/12 text-charcoal-700/80 hover:border-wine-400/50 hover:text-wine-600 dark:border-cream-100/15 dark:text-cream-100/70 dark:hover:border-gold-400/50 dark:hover:text-gold-300")
                  }
                >
                  {counter.pill}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
