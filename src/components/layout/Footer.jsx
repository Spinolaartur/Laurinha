import { footer, siteMeta, ui } from '../../data/siteContent';

export default function Footer() {
  return (
    <footer className="border-t border-cream-300/50 dark:border-charcoal-800/50 py-10 px-5 sm:px-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>{footer.text}</p>
        <p className="text-xs tracking-wide">
          &copy; {footer.year} &middot; {ui.footerFor} {siteMeta.herName}
        </p>
      </div>
    </footer>
  );
}
