import { motion, useReducedMotion } from 'framer-motion';
import { timeline } from '../../data/siteContent';
import SectionWrapper, { StaggerContainer, StaggerItem } from '../ui/SectionWrapper';
import ImageWithFallback from '../ui/ImageWithFallback';
import { cn } from '../../utils/cn';

function TimelineCard({ milestone, index }) {
  const isEven = index % 2 === 0;
  const prefersReducedMotion = useReducedMotion();

  return (
    <StaggerItem>
      <div
        className={cn(
          'relative grid md:grid-cols-2 gap-8 md:gap-12 items-center',
          !isEven && 'md:[direction:rtl] md:*:[direction:ltr]'
        )}
      >
        {/* Content */}
        <div className={cn('space-y-4', !isEven && 'md:text-right')}>
          <time
            dateTime={milestone.isoDate}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-wine-500 dark:text-gold-400"
          >
            {milestone.date}
          </time>
          <h3 className="font-display text-2xl sm:text-3xl text-charcoal-900 dark:text-cream-100">
            {milestone.title}
          </h3>
          <p className="text-muted leading-relaxed max-w-md">
            {milestone.description}
          </p>
        </div>

        {/* Image or decorative element */}
        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {milestone.image ? (
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-wine-900/5 dark:shadow-black/20">
              <ImageWithFallback
                src={milestone.image}
                alt={milestone.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-2xl glass-card flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-wine-300/30 dark:border-wine-700/30 flex items-center justify-center">
                <span className="font-display text-2xl text-wine-400/50 dark:text-wine-600/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Timeline dot - mobile */}
        <div
          className="absolute left-0 top-0 md:hidden -translate-x-[calc(1.25rem+5px)] w-2.5 h-2.5 rounded-full bg-wine-400 dark:bg-gold-500 ring-4 ring-cream-50 dark:ring-charcoal-950"
          aria-hidden="true"
        />
      </div>
    </StaggerItem>
  );
}

export default function Timeline() {
  return (
    <SectionWrapper
      id="timeline"
      label={timeline.label}
      title={timeline.title}
      subtitle={timeline.subtitle}
    >
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-wine-300/40 via-wine-300/20 to-transparent dark:from-wine-700/40 dark:via-wine-700/20 md:-translate-x-px"
          aria-hidden="true"
        />

        <StaggerContainer className="space-y-16 md:space-y-24 pl-12 md:pl-0">
          {timeline.milestones.map((milestone, index) => (
            <TimelineCard
              key={milestone.isoDate + milestone.title}
              milestone={milestone}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
