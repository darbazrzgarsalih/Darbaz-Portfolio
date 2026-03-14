import HeroSection from "@/components/landing/hero-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div id="home" className="min-h-screen w-screen">
      <section id="home"><HeroSection /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}
