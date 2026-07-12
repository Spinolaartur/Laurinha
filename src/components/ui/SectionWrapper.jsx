import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionWrapper({
  id,
  label,
  title,
  subtitle,
  children,
  className,
  dark = false,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden scroll-mt-20",
        dark && "bg-charcoal-900 dark:bg-charcoal-950",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-section-glow pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        {(label || title) && (
          <motion.header
            className="mb-16 md:mb-20 max-w-2xl"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {label && (
              <motion.p variants={fadeUp} className="section-eyebrow mb-4">
                {label}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="heading-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-balance"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg leading-relaxed text-muted max-w-xl"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}

export function StaggerContainer({ children, className, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        prefersReducedMotion
          ? {}
          : {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
