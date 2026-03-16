"use client";

import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";

function TopNavbar() {
    const handleScrollHome = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed w-full top-0 z-50 right-0 left-0 flex justify-between bg-muted/5 backdrop-blur-lg items-center py-4 px-5 border-b border-muted/80">
            <div className="flex items-center gap-1">
                <Avatar>
                    <AvatarImage sizes="20 40" src={'https://darbodev.vercel.app/assets/me-Dv2SGOg_.jpg'} />
                    <AvatarFallback>DR</AvatarFallback>
                    <AvatarBadge className="bg-gradient-to-br from-primary/50 to-green-300/80">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-primary/50 to-green-300 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-primary/50 to-green-300"></span>
                        </div>
                    </AvatarBadge>
                </Avatar>
                <button
                    onClick={handleScrollHome}
                    className="font-bold text-2xl cursor-pointer bg-gradient-to-br from-primary/50 to-green-300/80 bg-clip-text text-transparent py-1 px-2"
                >
                    DevDarbo
                </button>
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
    );
}

export default TopNavbar;