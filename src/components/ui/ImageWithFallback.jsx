import { useState } from 'react';
import { cn } from '../../utils/cn';
import { ui } from '../../data/siteContent';

export default function ImageWithFallback({
  src,
  alt,
  className,
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-cream-200 to-cream-300 dark:from-charcoal-800 dark:to-charcoal-700',
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-6">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-wine-300/40 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-wine-400/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs text-muted max-w-[140px]">{ui.addPhoto}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
