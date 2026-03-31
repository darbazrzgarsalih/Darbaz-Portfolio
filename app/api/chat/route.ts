export const runtime = "nodejs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const SYSTEM_PROMPT = `You are darbo's portfolio assistant. Be friendly, short, and helpful.

About Darbo:
- Full name: Darbaz Rzgar Salih
- Age: 18 years old
- Location: Erbil, Iraq
- Portfolio: darboo.xyz
- Skills: HTML, CSS, Javascript, React, Tailwind, Node, Express, MongoDB, NextJs, Supabase, PostgreSQL
- Reacl client projects: HRMS & Payroll System, Institute Management System
- Email: darborzgar7@gmail.com

Rules:
- Keep answers short and friendly
- If asked about hiring, encourage them to contact Darbo
- Never make up information`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        const chatMessages = messages.map((msg: any) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }]
        }));

        const lastMessage = chatMessages.pop();

        let history = chatMessages;
        if (history.length > 0 && history[0].role === "model") {
            history.shift();
        }

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(lastMessage.parts[0].text);
        const text = result.response.text();

        return Response.json({ reply: text });
    } catch (error: any) {
        console.error('Gemini API Error:', error.message || error);
        return Response.json({ reply: "Something went wroncg" }, { status: 500 });
    }
}