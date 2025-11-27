import { createEmbedding, chat } from './openai.service.js';
import { searchSimilar } from './supabase.service.js';

const SYSTEM_PROMPT = `You are a helpful assistant for Airbnb. Use the following content to answer the user question. You get the answer from user and the content from the Airbnb database. You should only answer the question based on the content. If you cannot find the answer, say "I am sorry, I do not have that information right now."`;

export async function query(userPrompt, matchCount = 1, threshold = 0) {
  const queryEmbedding = await createEmbedding(userPrompt);

  const results = await searchSimilar(queryEmbedding, matchCount, threshold);

  if (!results || results.length === 0) {
    return "I am sorry, I do not have that information right now.";
  }

  const context = results[0].content;

  const userMessage = `User question is: ${userPrompt}. Content: ${context}.`;
  return chat(SYSTEM_PROMPT, userMessage);
}