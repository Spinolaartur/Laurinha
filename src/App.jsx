import { useMemo } from "react";
import { navigation } from "./data/siteContent";
import { useDarkMode } from "./hooks/useDarkMode";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Gallery from "./components/sections/Gallery";
import SpecialEvents from "./components/sections/SpecialEvents";
import Letters from "./components/sections/Letters";
import Closing from "./components/sections/Closing";

export default function App() {
  const { isDark, toggle } = useDarkMode();
  const sectionIds = useMemo(() => navigation.map((n) => n.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen">
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleDark={toggle}
      />

      <main>
        <Hero />
        <Gallery />
        <Timeline />
        <SpecialEvents />
        <Letters />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
