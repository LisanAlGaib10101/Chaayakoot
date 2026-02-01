import Hero from "./components/Hero";
import FeaturedTeas from "./components/FeaturedTeas";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[var(--canvas-bg)] font-sans mt-[72px] min-h-[calc(100vh-72px)] gap-8 px-4 lg:px-8 py-8">
      <Hero />
      <AboutSection />
      <FeaturedTeas />
    </main>
  );
}
