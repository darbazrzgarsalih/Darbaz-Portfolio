"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
function HeroSection() {

    const handleScrollProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };
    const handleScrollServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <motion.section 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
        id="home" className="min-h-screen w-full flex p-4 flex-col lg:flex-row justify-between items-center gap-10 px-20 pt-32 border-b border-muted/80">
            <div className="flex flex-col gap-1 max-w-xl">
                <div>
                    <Badge variant={'outline'} className="flex items-center gap-1 w-fit mb-3">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-primary/50 to-green-300 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-primary/50 to-green-300"></span>
                        </div>
                        Currently active
                    </Badge>

                    <h1 className="text-3xl md:text-5xl font-thin mb-4 text-foreground/90">
                        Hi, I'm <span className="font-bold">Darbaz</span> —
                        Full Stack <span className="bg-gradient-to-br from-primary/50 to-green-300/80 bg-clip-text text-transparent font-black tracking-tighter">MERN</span> Developer
                    </h1>
                </div>

                <p className="text-muted-foreground mb-5 tracking-wide">
                    I'm Darbaz, a full-stack MERN developer who loves building fast, scalable web applications. I work mainly with Next.js, React, and Tailwind CSS, turning ideas into clean, efficient digital products. Minimal UI, solid architecture, and code that actuallly solves problems.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 items-center">
                    <Badge variant={'outline'}><RiNextjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiReactjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiNodejsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><DiMongodb /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiTailwindCssLine /></Badge>
                </div>

                <div className="flex gap-4 items-center">
                    <Button onClick={handleScrollProjects} className="px-6 py-3 bg-primary text-white rounded-lg">
                        View Projects
                    </Button>
                    <span className="text-muted">|</span>
                    <Button onClick={handleScrollServices} variant={'outline'} className="px-6 py-3 border rounded-lg">
                        See services
                    </Button>
                </div>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-2 border-primary"
                    src="https://darbodev.vercel.app/assets/me-Dv2SGOg_.jpg"
                    alt="Darbaz"
                />
            </div>
        </motion.section>
    );
}

export default HeroSection;