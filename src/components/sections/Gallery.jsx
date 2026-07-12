import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gallery, ui } from "../../data/siteContent";
import SectionWrapper, {
  StaggerContainer,
  StaggerItem,
} from "../ui/SectionWrapper";
import ImageWithFallback from "../ui/ImageWithFallback";
import Lightbox from "../ui/Lightbox";
import { cn } from "../../utils/cn";

const spanClasses = {
  // Portrait: 1 column, 2 rows tall
  normal: "col-span-1 row-span-2",
  // Extra-tall portrait
  tall: "col-span-2 sm:col-span-1 row-span-3",
  // Landscape: two columns, 2 rows
  wide: "col-span-2 row-span-2",
  // Large feature: two columns, 3 rows
  large: "col-span-2 row-span-3",
};

function GalleryItem({ item, index, onClick }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StaggerItem className={cn(spanClasses[item.span] || spanClasses.normal)}>
      <motion.button
        onClick={() => onClick(index)}
        whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
        className={cn(
          "group relative w-full h-full min-h-[240px] overflow-hidden rounded-2xl focus-ring",
          (item.span === "wide" || item.span === "large") && "min-h-[220px]",
        )}
        aria-label={ui.viewPhoto(item.alt)}
      >
        <ImageWithFallback
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {item.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-sm text-cream-100 font-medium">{item.caption}</p>
          </div>
        )}
      </motion.button>
    </StaggerItem>
  );
}

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SectionWrapper
        id="gallery"
        label={gallery.label}
        title={gallery.title}
        subtitle={gallery.subtitle}
      >
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row-dense auto-rows-[130px] sm:auto-rows-[150px] gap-4 sm:gap-5">
          {gallery.items.map((item, index) => (
            <GalleryItem
              key={item.src + index}
              item={item}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={gallery.items}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
