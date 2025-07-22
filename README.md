# LLM Chat Assistant

A modern chat interface powered by IO Intelligence API, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🤖 Real-time chat with AI assistant
- 🔒 Secure API key handling (server-side only)
- 💬 Message history with user/assistant distinction
- ⏳ Loading indicators and error handling
- 🎨 Clean, responsive design with Tailwind CSS
- 🧹 Clear chat functionality
- 📱 Mobile-friendly interface

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your IO Intelligence API key:
```
IO_INTELLIGENCE_API_KEY=your_actual_api_key_here
IO_INTELLIGENCE_API_URL=https://api.io-intelligence.com/v1/chat/completions
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the chat interface.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chat
│   ├── globals.css               # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
└── components/
    └── Chat.tsx                 # Chat component
```

## API Security

- ✅ API keys are stored server-side only
- ✅ Frontend never has access to API credentials
- ✅ All AI requests go through Next.js API routes
- ✅ Error handling prevents credential exposure

## Customization

### Modifying the AI Model

Edit `src/app/api/chat/route.ts` to change model parameters:

```typescript
body: JSON.stringify({
  model: 'gpt-4',  // Change model here
  messages: messages,
  max_tokens: 1000,
  temperature: 0.7,
}),
```

### Styling

The chat interface uses Tailwind CSS. Modify the classes in `src/components/Chat.tsx` to customize the appearance.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `IO_INTELLIGENCE_API_KEY` | Your IO Intelligence API key | Yes |
| `IO_INTELLIGENCE_API_URL` | API endpoint URL | Yes |

## Deployment

This app can be deployed to Vercel, Netlify, or any platform that supports Next.js.

Make sure to add your environment variables to your deployment platform's environment configuration.

## Troubleshooting

1. **API Key Issues**: Ensure your API key is correctly set in `.env.local`
2. **CORS Errors**: The API route handles CORS automatically
3. **Build Errors**: Check that all dependencies are installed with `npm install`
