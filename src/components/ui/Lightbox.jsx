import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ui } from '../../data/siteContent';
import ImageWithFallback from './ImageWithFallback';

export default function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) {
  const current = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1);
    if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && current && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
          onKeyDown={handleKeyDown}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal-950/90 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full text-cream-200/80 hover:text-cream-50 transition-colors focus-ring"
                aria-label={ui.closeLightbox}
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-hidden rounded-2xl bg-charcoal-900 shadow-2xl">
                <ImageWithFallback
                  src={current.src}
                  alt={current.alt}
                  className="w-full max-h-[75vh] object-contain bg-charcoal-900"
                  loading="eager"
                />
                {(current.caption || current.alt) && (
                  <div className="px-6 py-4 border-t border-charcoal-700/50">
                    <p className="text-sm text-cream-200/80">
                      {current.caption || current.alt}
                    </p>
                    <p className="mt-1 text-xs text-cream-400/50">
                      {ui.imageOf(currentIndex + 1, items.length)}
                    </p>
                  </div>
                )}
              </div>

              {hasPrev && (
                <button
                  onClick={() => onNavigate(currentIndex - 1)}
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-14',
                    'flex h-11 w-11 items-center justify-center rounded-full',
                    'bg-cream-50/10 text-cream-100 backdrop-blur-sm hover:bg-cream-50/20 transition-colors focus-ring'
                  )}
                  aria-label={ui.prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {hasNext && (
                <button
                  onClick={() => onNavigate(currentIndex + 1)}
                  className={cn(
                    'absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-14',
                    'flex h-11 w-11 items-center justify-center rounded-full',
                    'bg-cream-50/10 text-cream-100 backdrop-blur-sm hover:bg-cream-50/20 transition-colors focus-ring'
                  )}
                  aria-label={ui.nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
