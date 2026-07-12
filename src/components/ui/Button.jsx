import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-wine-600 text-cream-50 hover:bg-wine-700 shadow-lg shadow-wine-600/20 hover:shadow-wine-600/30 hover:-translate-y-0.5 dark:bg-wine-500 dark:hover:bg-wine-400 dark:shadow-wine-900/40",
  secondary:
    "border border-charcoal-800/15 text-charcoal-800 hover:bg-charcoal-800/5 hover:-translate-y-0.5 dark:border-cream-200/20 dark:text-cream-100 dark:hover:bg-cream-100/5",
  ghost:
    "text-wine-600 hover:text-wine-700 dark:text-gold-400 dark:hover:text-gold-300",
};

const Button = forwardRef(function Button(
  { variant = "primary", className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-ring",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
