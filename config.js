import dotenv from 'dotenv';
dotenv.config({ path: './.env'})

export const config = {
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
        embeddingModel: 'text-embedding-3-small',
        chatModel: 'gpt-4.1-mini-2025-04-14'
    },
    supabase: {
        url: process.env.SUPABASE_API_URL,
        apiKey: process.env.SUPABASE_API_KEY
    },
    chunking: {
        separators: ['\n'],
        chunkSize: 500,
        chunkOverlap: 50
    }
}