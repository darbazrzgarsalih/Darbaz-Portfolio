"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine, RiSupabaseFill, RiTailwindCssLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

function HeroSection() {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleScrollProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    if (loading) {
        return (
            <motion.section
                className="min-h-screen w-full flex p-4 flex-col lg:flex-row justify-between items-center gap-10 px-20 pt-32 border-b border-muted/80 animate-pulse"
            >
                <div className="flex flex-col gap-4 max-w-xl w-full">
                    <div className="w-40 h-4 bg-zinc-800 rounded-full" />

                    <div className="space-y-3">
                        <div className="w-72 h-8 bg-zinc-800 rounded-md" />
                        <div className="w-60 h-8 bg-zinc-800 rounded-md" />
                        <div className="w-48 h-6 bg-zinc-800 rounded-md" />
                    </div>

                    <div className="space-y-2 mt-2">
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="w-full h-3 bg-zinc-800 rounded" />
                        <div className="w-5/6 h-3 bg-zinc-800 rounded" />
                        <div className="w-4/6 h-3 bg-zinc-800 rounded" />
                    </div>

                    <div className="flex gap-2 mt-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="w-10 h-8 bg-zinc-800 rounded-md" />
                        ))}
                    </div>

                    <div className="w-80 h-3 bg-zinc-800 rounded mt-4" />

                    <div className="flex gap-4 mt-4">
                        <div className="w-36 h-10 bg-zinc-800 rounded-md" />
                        <div className="w-36 h-10 bg-zinc-800 rounded-md" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-60 h-60 md:w-80 md:h-80 bg-zinc-800 rounded-full border-2 border-zinc-700" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-6 bg-zinc-800 rounded-md mb-2" />
                    <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                </div>
            </motion.section>
        );
    }
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
                    <Badge variant={'outline'}><RiSupabaseFill /></Badge>
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
                        className="px-6 py-3 bg-primary text-white rounded-md"
                    >
                        View Projects
                    </Button>

                    <Button
                        onClick={handleScrollServices}
                        variant={'outline'}
                        className="px-6 py-3 border rounded-sm"
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

            <div>
                <Button onClick={handleScrollProjects} variant={'ghost'} className="animate-bounce font-mono flex gap-2 items-center">
                    Scroll <BiDownArrow />
                </Button>
            </div>
        </motion.section>
    );
}

export default HeroSection;