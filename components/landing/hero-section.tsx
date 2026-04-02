"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine, RiSupabaseFill, RiTailwindCssLine } from "react-icons/ri";
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
            id="home"
            className="min-h-screen w-full flex p-4 flex-col lg:flex-row justify-between items-center gap-10 px-20 pt-32 border-b border-muted/80"
        >
            <div className="flex flex-col gap-2 max-w-xl">
                <Badge variant={'outline'} className="flex items-center gap-2 w-fit mb-3">
                    <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                    </div>
                    Available for work
                </Badge>

                <h1 className="text-3xl md:text-5xl font-thin text-foreground/90 leading-tight">
                    Hi, I'm <span className="font-bold">Darbaz</span> —
                    <br />
                    <span className="font-semibold">
                        Full Stack Developer
                    </span>{" "}
                    <span className="bg-gradient-to-tr from-primary/60 to-green-400 bg-clip-text text-transparent font-thin tracking-tight">
                        `MERN + Supabase`
                    </span>
                </h1>

                <p className="text-muted-foreground mt-3 mb-5 tracking-wide leading-relaxed">
                    I build fast, scalable web applications with a focus on real-time features,
                    secure authentication, and clean backend architecture.
                    <br /><br />
                    Specialized in building production-ready apps using Next.js, React, and modern backend tools —
                    with strong attention to performance and user experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 items-center text-lg">
                    <Badge variant={'outline'}><RiNextjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiSupabaseFill  /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiReactjsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiNodejsLine /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><DiMongodb /></Badge>
                    <span className="text-muted">|</span>
                    <Badge variant={'outline'}><RiTailwindCssLine /></Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                    Real-time apps • Secure auth (RLS) • Scalable database design
                </p>

                <div className="flex gap-4 items-center">
                    <Button
                        onClick={handleScrollProjects}
                        className="px-6 py-3 bg-primary text-white rounded-lg"
                    >
                        View Projects
                    </Button>

                    <Button
                        onClick={handleScrollServices}
                        variant={'outline'}
                        className="px-6 py-3 border rounded-lg"
                    >
                        See Services
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