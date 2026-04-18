"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    SiHtml5, SiCss, SiTailwindcss, SiJavascript,
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,
    SiExpress, SiGit, SiGithub, SiVercel,
    SiPostman, SiRender,
    SiPostgresql,
    SiSupabase
} from "react-icons/si";

const SKILLS_DATA = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500", category: "Frontend" },
    { name: "CSS3", icon: SiCss, color: "text-blue-500", category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", category: "Frontend" },
    { name: "React", icon: SiReact, color: "text-cyan-400", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", category: "Full Stack" },

    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "text-foreground", category: "Backend" },

    { name: "MongoDB", icon: SiMongodb, color: "text-green-400", category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#0064a5]", category: "Database" },
    { name: "Supabase", icon: SiSupabase, color: "text-[#34B27B]", category: "Backend as a Service" },

    { name: "Git", icon: SiGit, color: "text-orange-600", category: "Version Control" },
    { name: "GitHub", icon: SiGithub, color: "text-foreground", category: "Version Control" },
    { name: "Vercel", icon: SiVercel, color: "text-foreground", category: "Deployment" },
    { name: "Render", icon: SiRender, color: "text-indigo-400", category: "Deployment" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", category: "Tools" },
];

const CATEGORIES = ["Frontend", "Backend", "Full Stack", "Database", "Backend as a Service", "Version Control", "Deployment"];

function Skills() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return (
            <section className="min-h-screen w-full flex flex-col items-center gap-16 px-6 py-24 border-b border-muted/80 animate-pulse">

                <div className="text-center space-y-3">
                    <div className="w-52 h-10 bg-zinc-800 rounded-md mx-auto" />
                    <div className="w-80 h-4 bg-zinc-800 rounded-md mx-auto" />
                </div>

                <div className="w-full max-w-4xl space-y-12">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-6">

                            <div className="w-40 h-4 bg-zinc-800 rounded" />

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {Array.from({ length: 8 }).map((_, j) => (
                                    <div
                                        key={j}
                                        className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-muted/50 bg-muted/5 aspect-square"
                                    >
                                        <div className="w-8 h-8 bg-zinc-800 rounded" />

                                        <div className="w-16 h-3 bg-zinc-800 rounded" />

                                        <div className="w-12 h-2 bg-zinc-800 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="skills"
            className="min-h-screen w-full flex flex-col items-center gap-16 px-6 py-24 border-b border-muted/80"
        >
            <div className="text-center space-y-3">
                <h2 className="text-4xl md:text-5xl font-thin">Skills & Stack</h2>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    A categorized look at the technologies I use to build modern web applications.
                </p>
            </div>

            <div className="w-full max-w-4xl space-y-12">
                {CATEGORIES.map((category) => {
                    const filteredSkills = SKILLS_DATA.filter(skill => skill.category === category);
                    if (filteredSkills.length === 0) return null;

                    return (
                        <div key={category} className="space-y-6">
                            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 border-l-2 border-primary/30 pl-3">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {filteredSkills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ y: -5 }}
                                            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-muted/50 bg-muted/5 hover:bg-muted/15 hover:border-primary/30 transition-all duration-200 cursor-default aspect-square"
                                        >
                                            <Icon size={28} className={`${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                                            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                                {skill.name}
                                            </span>
                                            {skill.name === "Supabase" && (
                                                <span className="text-[10px] text-primary/70 font-light text-center leading-tight">
                                                    BaaS / Firebase Alt
                                                </span>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}

export default Skills;