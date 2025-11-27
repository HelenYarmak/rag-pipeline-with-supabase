import OpenAI from 'openai';
import { config } from '../config.js';
const client = new OpenAI();

export async function createEmbedding(text) {
    const response = await client.embeddings.create({
        model: config.openai.embeddingModel,
        input: text,
        encoding_format: 'float'
    });
    
    return response.data[0].embedding;
}

export async function createEmbeddings(texts) {
    return Promise.all(texts.map(text => createEmbedding(text)));
}

export async function chat(systemPrompt, userMessage) {
  const response = await client.chat.completions.create({
    model: config.openai.chatModel,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ]
  });
  return response.choices[0].message.content;
}