import { useState } from "react";
import { timeSince, importantDates } from "../../data/siteContent";
import SectionWrapper from "../ui/SectionWrapper";
import LiveCounter from "../ui/LiveCounter";

export default function TimeSince() {
  const counters = timeSince.counters;
  const [index, setIndex] = useState(0);
  const active = counters[index];

  return (
    <SectionWrapper
      id="time-since"
      label={timeSince.label}
      title={timeSince.title}
      subtitle={timeSince.subtitle}
      className="bg-cream-100/50 dark:bg-charcoal-900/30"
    >
      <div className="mx-auto max-w-3xl">
        <LiveCounter
          startDate={importantDates[active.dateKey]}
          slideKey={index}
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
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
      </div>
    </SectionWrapper>
  );
}
