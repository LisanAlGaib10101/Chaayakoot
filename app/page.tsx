import Hero from "./components/Hero";
import FeaturedTeas from "./components/FeaturedTeas";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background font-sans">
      <Hero />
      <AboutSection />
      <FeaturedTeas />
    </main>
  );
}
