import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { letters } from '../../data/siteContent';
import SectionWrapper, { StaggerContainer, StaggerItem } from '../ui/SectionWrapper';
import { cn } from '../../utils/cn';

function LetterCard({ letter, index }) {
  const prefersReducedMotion = useReducedMotion();
  const paragraphs = letter.content.split('\n\n');

  return (
    <StaggerItem>
      <Disclosure>
        {({ open }) => (
          <div className="glass-card overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-wine-900/5 dark:hover:shadow-black/20">
            <DisclosureButton className="flex w-full items-center justify-between gap-4 p-6 sm:p-8 text-left focus-ring rounded-2xl">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-wine-500 dark:text-gold-400">
                  {letter.date}
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl text-charcoal-900 dark:text-cream-100">
                  {letter.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-wine-400 dark:text-gold-500" />
              </motion.div>
            </DisclosureButton>

            <AnimatePresence initial={false}>
              {open && (
                <DisclosurePanel
                  static
                  as={motion.div}
                  initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-4 border-t border-cream-300/50 dark:border-charcoal-700/50 pt-6">
                    {paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className={cn(
                          'text-muted leading-relaxed',
                          i === 0 && 'text-charcoal-800 dark:text-cream-200'
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        )}
      </Disclosure>
    </StaggerItem>
  );
}

export default function Letters() {
  return (
    <SectionWrapper
      id="letters"
      label={letters.label}
      title={letters.title}
      subtitle={letters.subtitle}
    >
      <StaggerContainer className="space-y-4 max-w-3xl">
        {letters.items.map((letter, index) => (
          <LetterCard key={letter.id} letter={letter} index={index} />
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
