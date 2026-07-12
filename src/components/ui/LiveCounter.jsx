import { motion } from "framer-motion";
import { useLiveTimer } from "../../hooks/useLiveTimer";
import { ui } from "../../data/siteContent";

function CounterUnit({ value, label }) {
  return (
    <div className="text-center">
      <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-medium tabular-nums text-charcoal-900 dark:text-cream-100">
        {value}
      </span>
      <span className="mt-1 block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function LiveCounter({ startDate, slideKey }) {
  const { years, months, days, hours, minutes, seconds } =
    useLiveTimer(startDate);

  return (
    <div className="glass-card p-6 sm:p-8">
      <motion.div
        key={slideKey}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-center gap-2 sm:gap-5 md:gap-8">
          <CounterUnit value={years} label={ui.years} />
          <CounterUnit value={months} label={ui.months} />
          <CounterUnit value={days} label={ui.days} />
          <CounterUnit value={hours} label={ui.hours} />
          <CounterUnit value={minutes} label={ui.minutes} />
          <CounterUnit value={seconds} label={ui.seconds} />
        </div>
      </motion.div>
    </div>
  );
}
