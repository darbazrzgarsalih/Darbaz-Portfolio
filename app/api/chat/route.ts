import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "AIzaSyD3Qe5iUdhF19u3RushubViQNpn_KKPKaA");

const SYSTEM_PROMPT = `You are darbo's portfolio assisttant. Be friendly, short, and helpful.

About Darbo:
- Full name: Darbaz Rzgar Salih
- Age: 18 years old
- Location: Erbil, Iraq
- Portfolio: darboo.xyz
- Skills: HTML, CSS, Javascript, React, Tailwind, Node, Express, MongoDB, NextJs, Supabase, PostgreSQL
- Reacl client projects: HRMS & Payroll SYstem, Institute Management System
- Email: darborzgar7@gmail.com

Rules:
- Keep answers short and friendly
- If asked about hiring, encourage them to contact Darbo
- Never make up information`;

export async function POST(req: any) {
    try {
        const { messages } = await req.json()

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: SYSTEM_PROMPT,
        })

        const history = messages
            .slice(0, -1)
            .filter((_, i) => i !== 0)
            .map((msg) => ({
                role: msg.role === "assistant" ? "model" : "user",
                parts: [{ text: msg.content }]
            }))

        const chat = model.startChat({ history })
        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const text = result.response.text()

        return Response.json({ reply: text })
    } catch (error) {
        console.log('gemini error: ',error)
        return Response.json({ reply: "Somethin went wrong" })
    }
}