import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const client = new OpenAI({
  apiKey: process.env.IO_INTELLIGENCE_API_KEY,
  baseURL: "https://api.intelligence.io.solutions/api/v1/",
});

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const API_KEY = process.env.IO_INTELLIGENCE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const response = await client.chat.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...messages
      ],
      temperature: 0.7,
      stream: false,
      max_tokens: 150
    });

    const assistantMessage = response.choices[0].message.content || 'No response received';

    return NextResponse.json({ content: assistantMessage });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
