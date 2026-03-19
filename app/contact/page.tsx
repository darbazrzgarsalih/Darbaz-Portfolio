"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const EMAILJS_SERVICE_ID = "service_6gt51qg";  
const EMAILJS_TEMPLATE_ID = "template_r3of9h6"; 
const EMAILJS_PUBLIC_KEY = "u4QIWtJeFl9QUm4y0";   

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,      
                    email: form.email, 
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            alert(JSON.stringify(err));
            console.error(err);
            setStatus("error");
        }
    };

    const info = [
        { icon: Mail, label: "Email", value: "darborzgar7@gmail.com", href: "mailto:darborzgar7@gmail.com" },
        { icon: MapPin, label: "Location", value: "Erbil, Iraq", href: null },
    ];

    return (
        <motion.section 
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        id="contact" className="min-h-screen w-full flex flex-col justify-center items-center gap-16 px-6 py-24 border-b border-muted/80">

            <div className="text-center space-y-3">
                <Badge variant="outline" className="text-xs tracking-widest uppercase">Get in touch</Badge>
                <h2 className="text-4xl md:text-5xl font-thin">
                    Contact
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    Have a project in mind or want to work together? Send me a message and I'll get back to you.
                </p>
            </div>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="flex flex-col gap-6">
                   

                    <div className="flex flex-col gap-4">
                        {info.map((item) => {
                            const Icon = item.icon;
                            const content = (
                                <div className="flex items-center gap-3 group">
                                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">{item.label}</p>
                                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            );
                            return item.href ? (
                                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                                    {content}
                                </a>
                            ) : (
                                <div key={item.label}>{content}</div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-2xl border border-muted/50 bg-muted/5">
                    {status === "sent" ? (
                        <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-10">
                            <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                <Send size={20} />
                            </div>
                            <h3 className="font-semibold text-lg">Message sent!</h3>
                            <p className="text-sm text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                            <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>I understand</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-muted-foreground uppercase tracking-widest">Name</label>
                                <Input
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-muted/10 border-muted/50 focus:border-primary/40"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-muted-foreground uppercase tracking-widest">Email</label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-muted/10 border-muted/50 focus:border-primary/40"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-muted-foreground uppercase tracking-widest">Message</label>
                                <Textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="bg-muted/10 border-muted/50 focus:border-primary/40 resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-xs text-red-500 text-center">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}

                            <Button type="submit" disabled={status === "loading"} className="w-full gap-2">
                                {status === "loading" ? (
                                    <>
                                        <Loader size={15} className="animate-spin" />
                                        Be patient
                                    </>
                                ) : (
                                    <>
                                        <Send size={15} />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </motion.section>
    );
}

export default Contact;