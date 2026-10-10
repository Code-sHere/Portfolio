import Navbar from '@/components/layout/Navbar';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
export default function Home() {
  return (
    <>
      <main className="pt-20">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}