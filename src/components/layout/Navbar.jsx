import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { navigation, ui } from '../../data/siteContent';
import { scrollToSection } from '../../hooks/useActiveSection';
import { cn } from '../../utils/cn';

export default function Navbar({ activeSection, isDark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12',
            'transition-all duration-500'
          )}
          aria-label={ui.navAria}
        >
          <div
            className={cn(
              'flex w-full items-center justify-between rounded-2xl px-5 py-3',
              'border border-cream-300/40 bg-cream-50/80 backdrop-blur-xl shadow-sm',
              'dark:border-charcoal-700/40 dark:bg-charcoal-950/80'
            )}
          >
            <button
              onClick={() => handleNavClick('hero')}
              className="font-display text-lg font-medium text-charcoal-900 dark:text-cream-100 focus-ring rounded-lg px-1"
            >
              {ui.siteBrand}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.slice(1, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 focus-ring',
                    activeSection === item.id
                      ? 'bg-wine-600/10 text-wine-700 dark:bg-wine-500/15 dark:text-gold-400'
                      : 'text-charcoal-700/70 hover:text-charcoal-900 dark:text-cream-300/60 dark:hover:text-cream-100'
                  )}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={onToggleDark}
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full text-charcoal-700 hover:bg-charcoal-800/5 dark:text-cream-300 dark:hover:bg-cream-100/5 transition-colors focus-ring"
                aria-label={isDark ? ui.lightMode : ui.darkMode}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onToggleDark}
                className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal-700 dark:text-cream-300 focus-ring"
                aria-label={isDark ? ui.lightMode : ui.darkMode}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal-700 dark:text-cream-300 focus-ring"
                aria-label={ui.openMenu}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <Dialog
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            className="relative z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <div className="fixed inset-0 flex justify-end">
              <DialogPanel
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="w-full max-w-xs bg-cream-50 dark:bg-charcoal-900 shadow-2xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between p-5 border-b border-cream-300/50 dark:border-charcoal-700/50">
                  <span className="font-display text-lg text-charcoal-900 dark:text-cream-100">
                    {ui.navigate}
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full focus-ring"
                    aria-label={ui.closeMenu}
                  >
                    <X className="h-5 w-5 text-charcoal-700 dark:text-cream-300" />
                  </button>
                </div>

                <div className="flex flex-col p-4 gap-1">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        'rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors focus-ring',
                        activeSection === item.id
                          ? 'bg-wine-600/10 text-wine-700 dark:bg-wine-500/15 dark:text-gold-400'
                          : 'text-charcoal-800 dark:text-cream-200 hover:bg-charcoal-800/5 dark:hover:bg-cream-100/5'
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
