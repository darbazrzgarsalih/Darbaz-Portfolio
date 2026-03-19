"use client";

import { useEffect, useState } from "react";
import { Home, FolderGit, BrainCircuit, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: FolderGit },
    { id: "skills", label: "Skills", icon: BrainCircuit },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
];

function BottomNavbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observers = new Map();

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav className="pointer-events-auto flex items-center gap-1 p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-2xl transition-all duration-500 hover:border-white/40">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={cn(
                                "relative flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 group",
                                isActive
                                    ? "text-primary scale-110"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}
                        >
                            {isActive && (
                                <span className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-full blur-sm -z-10" />
                            )}

                            <Icon size={18} className={cn("transition-transform", isActive && "mb-0.5")} />

                            <span className={cn(
                                "text-[10px] font-medium overflow-hidden transition-all duration-300",
                                isActive ? "max-h-4 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

export default BottomNavbar;