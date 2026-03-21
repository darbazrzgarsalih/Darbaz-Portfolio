import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10b981] opacity-10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-white opacity-10">404</h1>
                    <div className="mt-[-60px]">
                        <h2 className="text-4xl font-semibold text-white mb-2">
                            Page <span className="text-[#10b981]">Not Found</span>
                        </h2>
                        <p className="text-gray-400 max-w-md mx-auto">
                            The project or page you're lookrng for doesn't exist or has been moved.
                            Let's get you back to the main stack.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-[#10b981] text-black font-medium rounded-full hover:bg-[#0da371] transition-all duration-300"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <Link
                        href="/projects"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                    >
                        <ArrowLeft size={18} />
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}