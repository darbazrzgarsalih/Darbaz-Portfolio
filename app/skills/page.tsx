"use client"
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss, SiTailwindcss, SiJavascript,
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,
    SiExpress, SiGit, SiGithub, SiVercel,
    SiPostman, SiRender
} from "react-icons/si";

function Skills() {
    const skills = [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-foreground" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-foreground" },
        { name: "Vercel", icon: SiVercel, color: "text-foreground" },
        { name: "Render", icon: SiRender, color: "text-indigo-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="skills" className="min-h-screen w-full flex flex-col justify-center items-center gap-16 px-6 py-24 border-b border-muted/80">
            <div className="text-center space-y-3">
                <h2 className="text-4xl md:text-5xl font-thin">
                    Skills
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    Technologies I use to build fast, scalable, and modern web applications.
                </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 w-full max-w-3xl">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-muted/50 bg-muted/5 hover:bg-muted/15 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 cursor-default aspect-square"
                        >
                            <Icon size={32} className={`${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}

export default Skills;