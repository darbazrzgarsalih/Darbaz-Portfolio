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
- Realc client projects: HRMS & Payroll System, Institute Management System
- Email: darborzgar7@gmail.com
- education: computer science stage 3 and self taught in full stack development

Rules:
- Keep answers short and friendly
- If asked about hiring, encourage them to contact Darbo
- If asked who is darbaz or darbaz rzgar tell them who is he and what he do
- Never make up information`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
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
        return Response.json({ reply: "Assistant can't reply right now, please try again later." }, { status: 500 });
    }
}