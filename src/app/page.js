import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import GitHubSection from '@/components/sections/GitHubSection';
import Hero from '@/components/sections/Hero';
import PlayGround from '@/components/sections/PlayGround';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
export default function Home() {
  return (
    <>
      <main className="pt-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PlayGround />
        <GitHubSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}