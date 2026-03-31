"use client";

import { useState, useRef, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";

const TOOLTIPS = [
    "Ask me about Darbo's projects! 👀",
    "Curious about his skills? 💻",
    "Need a full stack developer? 🔥",
    "Darbo is open for work! 📩",
    "Check out darboo.xyz! 🌐",
    "Ask me anything about Darbo! 😄",
];

function TypingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="bg-gray-800 rounded-xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                <span className="w-1 h-1  bg-gradient-to-br from-primary/50 to-green-300/80  rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1 h-1  bg-gradient-to-br from-primary/50 to-green-300/80 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1 h-1  bg-gradient-to-br from-primary/50 to-green-300/80 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
        </div>
    );
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! 👋 I'm Darbo's assistant. Ask me anything about his skills, projects, or services!",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState(0);
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen) return;
        const interval = setInterval(() => {
            setTooltipVisible(false);
            setTimeout(() => {
                setTooltipIndex((prev) => (prev + 1) % TOOLTIPS.length);
                setTooltipVisible(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;
        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });
            const data = await res.json();
            setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
        } catch {
            setMessages([...updatedMessages, { role: "assistant", content: "Sorry, something went wrong!" }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <style>{`
                @keyframes bounceIn {
                    0%   { opacity: 0; transform: scale(0.5) translateY(10px); }
                    60%  { opacity: 1; transform: scale(1.1) translateY(-4px); }
                    80%  { transform: scale(0.95) translateY(2px); }
                    100% { transform: scale(1) translateY(0); }
                }
                @keyframes bounceOut {
                    0%   { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.7) translateY(8px); }
                }
                .tooltip-bounce-in { animation: bounceIn 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards; }
                .tooltip-bounce-out { animation: bounceOut 0.35s ease-in forwards; }
            `}</style>

            {!isOpen && (
                <div
                    className={`fixed z-50 pointer-events-none select-none ${tooltipVisible ? "tooltip-bounce-in" : "tooltip-bounce-out"}`}
                    style={{ bottom: "102px", right: "80px" }}
                >
                    <div className="bg-[#0f0f0f] border border-green-900 text-white text-[13px] px-4 py-2 rounded-[20px_20px_0px_20px] whitespace-nowrap shadow-[0_0_16px_rgba(22,163,74,0.25)] relative">
                        {TOOLTIPS[tooltipIndex]}
                        <div className="absolute -bottom-[6px] right-[10px] w-[10px] h-[10px] bg-[#0f0f0f] border-r border-b border-green-700 rotate-45" />
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed z-50 w-[52px] h-[52px] rounded-full  bg-gradient-to-br from-primary/50 to-green-300/80 flex items-center justify-center shadow shadow-zinc-800 transition-transform duration-200 hover:scale-110 border-none cursor-pointer"
                style={{ bottom: "90px", right: "20px" }}
            >
                {isOpen ? (
                    <CgClose />
                ) : (
                    <LuMessageCircleMore />
                )}
            </button>

            {isOpen && (
                <div
                    className="fixed z-40 w-[320px] h-[420px] bg-[#0a0a0a] border border-zinc-800 rounded-2xl flex flex-col overflow-hidden shadow shadow-zinc-800"
                    style={{ bottom: "155px", right: "20px" }}
                >
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#0f0f0f] border-b border-zinc-800">
                        <div className="w-8 h-8 rounded-full  bg-gradient-to-br from-primary/50 to-green-300/80 flex items-center justify-center text-white text-sm font-bold shrink-0">
                            DR
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold m-0">Darbo's Assistant</p>
                            <p className="text-green-400 bg-clip-text text-[11px] m-0">● Online</p>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[80%] px-3 py-2 text-[13px] leading-relaxed text-white
                                    ${msg.role === "user"
                                        ? "bg-gradient-to-r from-primary/90 to-green-300/80 rounded-xl rounded-br-none"
                                        : "bg-zinc-900 rounded-xl rounded-bl-none"
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {loading && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="flex items-center gap-2 px-3 py-3 bg-[#0f0f0f] border-t border-zinc-800">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-[#1a1a1a] text-white text-[13px] px-4 py-2 rounded-full border border-zinc-800 outline-none placeholder-zinc-500"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 border-none
                                ${input.trim() ? " bg-gradient-to-br from-primary/50 to-green-300/80 cursor-pointer" : "bg-zinc-800 cursor-default"}`}
                        >
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}