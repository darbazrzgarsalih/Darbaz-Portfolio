"use client";

import { useEffect, useState } from "react";
import { Home, FolderGit, BrainCircuit, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

function BottomNavbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { to: "home", label: "Home", icon: Home },
        { to: "projects", label: "Projects", icon: FolderGit },
        { to: "skills", label: "Skills", icon: BrainCircuit },
        { to: "services", label: "Services", icon: Briefcase },
        { to: "contact", label: "Contact", icon: Mail },
    ];

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        navItems.forEach(({ to }) => {
            const el = document.getElementById(to);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(to);
                    }
                },
                { threshold: 0.5 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto overflow-scroll bg-muted/40 dark:bg-muted/40 backdrop-blur-md w-2.5/3 md:w-0.5/4 border border-muted/30 rounded-full px-1 py-2 flex items-center  shadow-lg">
                <div className="flex gap-2 items-center">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.to;
                        return (
                            <button
                                key={item.to}
                                onClick={() => handleScroll(item.to)}
                                className={cn(
                                    "flex cursor-pointer flex-col text-xs items-center rounded-full py-1 px-3 transition-all duration-300 hover:bg-muted/50 hover:scale-105",
                                    isActive && "bg-muted/50 backdrop-blur-xl"
                                )}
                            >
                                <Icon size={20} />
                                <span className="font-medium text-xs">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default BottomNavbar;