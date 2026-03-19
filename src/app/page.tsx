'use client'

import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Services from "../components/layout/Services";
import Footer from "../components/layout/Footer";
import Buttons from "../components/ui/Butons";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
          {/* <a
            
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Deploy Now
          </a> */}
    </div>
  );
}
