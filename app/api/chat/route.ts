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
            model: "gemini-2.0-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        const history = messages
            .filter((msg: any, index: number) => {
                if (index === 0 && msg.role === "assistant") return false;
                return true;
            })
            .slice(0, -1)
            .map((msg: any) => ({
                role: msg.role === "assistant" ? "model" : "user",
                parts: [{ text: msg.content }]
            }));

        const chat = model.startChat({ history });
        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const text = result.response.text();

        return Response.json({ reply: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        return Response.json({ reply: "Somethin went wrong" }, { status: 500 });
    }
}