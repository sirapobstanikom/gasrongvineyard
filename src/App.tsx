import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GrapeVarieties from './components/GrapeVarieties';
import WineProducts from './components/WineProducts';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  useEffect(() => {
    document.title = "สวนองุ่นแก๊สกับรอง บ้านสวนปากบาง พรหมบุรี | สวนองุ่นสิงห์บุรี";
  }, []);

  return (
    <div className="min-h-screen selection:bg-grape-purple selection:text-white">
      {/* SEO Keywords for Search Engines (Hidden) */}
      <div className="sr-only">
        <h1>สวนองุ่นสิงห์บุรี</h1>
        <h2>สวนองุ่นพรหมบุรี</h2>
        <h3>สวนองุ่นพร้อมไวน์</h3>
        <p>บ้านสวนปากบาง พรหมบุรี สิงห์บุรี องุ่นสด ไวน์คุณภาพ</p>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <GrapeVarieties />
        <WineProducts />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
