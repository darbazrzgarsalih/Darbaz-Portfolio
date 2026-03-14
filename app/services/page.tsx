import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Layers } from "lucide-react";

function Services() {
    const services = [
        {
            id: 1,
            icon: Layout,
            badge: "Frontend",
            title: "Frontend Development",
            description: "Responsive, user-friendly interfaces using modern web technologies to deliver engaging and accessible user experiences.",
            stack: ["React", "Next.js", "Tailwind CSS"],
        },
        {
            id: 2,
            icon: Server,
            badge: "Backend",
            title: "Backend Development",
            description: "Secure, scalable server-side applications, APIs, and databases that ensure reliable performance and efficient data management.",
            stack: ["Node.js", "Express", "MongoDB"],
        },
        {
            id: 3,
            icon: Layers,
            badge: "Full Stack",
            title: "Full Stack Development",
            description: "Complete web solutions by integrating intuitive frontends with robust backends, from concept to deployment.",
            stack: ["MERN", "REST APIs", "Auth"],
        },
    ];

    return (
        <section id="services" className="min-h-screen w-full flex flex-col justify-center items-center gap-16 px-6 py-24 border-b border-muted/80">
            <div className="text-center space-y-3">
                <Badge variant="outline" className="text-xs tracking-widest lowercase">What I offer</Badge>
                <h2 className="text-4xl md:text-5xl font-thin">
                    Services
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    End-to-end development services tailored to bring your ideas to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {services.map((sv) => {
                    const Icon = sv.icon;
                    return (
                        <Card
                            key={sv.id}
                            className="group relative overflow-hidden border border-muted/50 bg-muted/5 hover:bg-muted/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <CardHeader className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                        <Icon size={20} />
                                    </div>
                                    <Badge variant="outline" className="text-xs text-muted-foreground">
                                        {sv.badge}
                                    </Badge>
                                </div>

                                <div className="space-y-2">
                                    <CardTitle className="text-lg font-semibold leading-snug">
                                        {sv.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {sv.description}
                                    </CardDescription>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {sv.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2.5 py-1 rounded-full bg-muted/40 border border-muted/60 text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;