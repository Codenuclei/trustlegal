import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `You are an AI assistant for Trust Legal, a strategic business consulting firm.
    Provide helpful, accurate information about legal matters, business strategy, and related topics.
    When discussing legal advice, remind users that you provide general information and they should consult
    with a qualified attorney for specific legal advice.

    User message: ${message}`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return NextResponse.json({
            error: 'Failed to get response from Gemini',
            details: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
