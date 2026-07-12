import { motion, useReducedMotion } from 'framer-motion';
import { closing } from '../../data/siteContent';
import ImageWithFallback from '../ui/ImageWithFallback';

export default function Closing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="closing"
      className="relative scroll-mt-20 overflow-hidden"
    >
      {/* Full-width image with overlay text */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={closing.image}
            alt={closing.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        </div>

        <div className="container-wide relative z-10 section-padding">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream-100 leading-[1.1] text-balance">
              {closing.headline}
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-cream-200/80 leading-relaxed text-balance">
              {closing.subheadline}
            </p>
            <p className="mt-8 text-cream-300/60 leading-relaxed max-w-lg">
              {closing.body}
            </p>

            <div className="mt-12 pt-8 border-t border-cream-100/10">
              <p className="text-sm text-cream-300/50 italic">{closing.signOff}</p>
              <p className="mt-2 font-display text-2xl text-cream-100">
                {closing.signature}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
