"use client"
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FolderGit } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            id: 1,
            name: "HRMS & Payroll System",
            description: "A comprehensive human resource and payroll management platform with attendance tracking, salary processing, and employee management.",
            badge: "Client",
            type: "client",
            image: "/hightechpsystem.jpeg",
            stack: ["React", "Node.js", "MongoDB", "Express"],
            link: "#",
        },
        {
            id: 2,
            name: "Institute Management System",
            description: "Full-featured academic management system handling student records, courses, scheduling, and staff administration.",
            badge: "Client",
            type: "client",
            image: "/institutemanagement-Btlcry4S.png",
            stack: ["React", "Node", "MongoDB", "Express"],
            link: "#",
        },
        {
            id: 3,
            name: "Ecommerce Web Application",
            description: "Modern ecommerce platform with product listings, cart management, secure checkout, and order tracking.",
            badge: "Portfolio",
            type: "portfolio",
            image: "/puvo-DECK2ANs.png",
            stack: ["Next.js", "Tailwind", "Node.js"],
            link: "#",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id="projects" 
            className="min-h-screen w-full flex flex-col justify-center items-center gap-16 px-6 py-24 border-b border-muted/80">
            <div className="text-center space-y-3">
                <h2 className="text-4xl md:text-5xl font-thin">
                    Projects
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    A selection of real-world applications I've designed and built end-to-end.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {projects.map((proj) => (
                    <Card
                        key={proj.id}
                        className="group overflow-hidden border border-muted/50 bg-muted/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 p-0"
                    >
                        <div className="relative overflow-hidden h-48">
                            <img
                                src={proj.image}
                                alt={proj.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full border backdrop-blur-sm font-medium
                                ${proj.type === "client"
                                    ? "border-primary/40 bg-primary/10 text-primary"
                                    : "border-muted/60 bg-muted/20 text-muted-foreground"
                                }`}>
                                {proj.badge}
                            </span>
                        </div>

                        <div className="p-5 space-y-3">
                            <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors duration-200">
                                {proj.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {proj.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-0.5 rounded-full bg-muted/40 border border-muted/60 text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-muted/30">
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <FolderGit size={13} />
                                    <span>Full Stack</span>
                                </div>

                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;