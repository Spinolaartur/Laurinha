import { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { specialEvents } from '../../data/siteContent';
import SectionWrapper from '../ui/SectionWrapper';
import ImageWithFallback from '../ui/ImageWithFallback';
import { cn } from '../../utils/cn';

function EventContent({ event }) {
  const prefersReducedMotion = useReducedMotion();
  const paragraphs = event.tribute.split('\n\n');

  return (
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <time className="text-xs font-medium uppercase tracking-[0.2em] text-wine-500 dark:text-gold-400">
            {event.date}
          </time>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl text-charcoal-900 dark:text-cream-100">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="mt-2 text-muted">{event.subtitle}</p>
          )}
        </div>

        <div className="space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
        {event.photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={cn(
              'overflow-hidden rounded-2xl shadow-lg shadow-wine-900/5 dark:shadow-black/20',
              i === 0 && event.photos.length >= 3 && 'sm:row-span-2'
            )}
          >
            <div className={cn('relative', i === 0 && event.photos.length >= 3 ? 'h-full min-h-[300px]' : 'aspect-[4/3]')}>
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
              />
              {photo.caption && (
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-charcoal-900/70 to-transparent">
                  <p className="text-xs text-cream-100/90">{photo.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SpecialEvents() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SectionWrapper
      id="events"
      label={specialEvents.label}
      title={specialEvents.title}
      subtitle={specialEvents.subtitle}
      className="bg-cream-100/50 dark:bg-charcoal-900/30"
    >
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex flex-wrap gap-2 mb-12">
          {specialEvents.events.map((event) => (
            <Tab
              key={event.id}
              className={({ selected }) =>
                cn(
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-ring',
                  selected
                    ? 'bg-wine-600 text-cream-50 shadow-lg shadow-wine-600/20 dark:bg-wine-500'
                    : 'glass-card text-charcoal-700 hover:text-charcoal-900 dark:text-cream-300 dark:hover:text-cream-100'
                )
              }
            >
              {event.id === 'graduation' && (
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              )}
              {event.title}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {specialEvents.events.map((event) => (
            <TabPanel
              key={event.id}
              className="focus:outline-none"
            >
              <EventContent event={event} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </SectionWrapper>
  );
}
