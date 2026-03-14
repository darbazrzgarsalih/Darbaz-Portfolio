"use client";

import { SiGithub,  } from "react-icons/si";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function Footer() {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const links = [
        { label: "Home", to: "home" },
        { label: "Projects", to: "projects" },
        { label: "Skills", to: "skills" },
        { label: "Services", to: "services" },
        { label: "Contact", to: "contact" },
    ];

    const socials = [
        { icon: SiGithub, href: "https://github.com/darbazrzgarsalih", label: "GitHub" },
        { icon: Mail, href: "mailto:darborzgar7@gmail.com", label: "Email" },
    ];

    return (
        <footer className="w-full border-t border-muted/80 bg-muted/5 px-6 py-12">
            <div className="max-w-5xl mx-auto flex flex-col gap-10">

                <div className="flex flex-col md:flex-row justify-center items-start gap-8">

                    <div className="space-y-2">
                        <button
                            onClick={() => handleScroll("home")}
                            className="text-2xl font-bold bg-gradient-to-br from-primary/50 to-green-300/80 bg-clip-text text-transparent"
                        >
                            DevDarbo
                        </button>
                  
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                            Navigation
                        </span>
                        {links.map((link) => (
                            <button
                                key={link.to}
                                onClick={() => handleScroll(link.to)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                            Connect
                        </span>
                        {socials.map((s) => {
                            const Icon = s.icon;
                            return (
                                <a

                                    key = {s.label}
                                    href = {s.href}
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    className = "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Icon size={14} />
                                    {s.label}
                                </a>
                            );
                        })}
                    </div>

                </div>

                <Separator className="bg-muted/40" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
                    <span>© {new Date().getFullYear()} Darbaz. All rights reserved.</span>
                    <span>Made With 💚 By Darbaz</span>
                </div>

            </div>
        </footer >
    );
}

export default Footer;