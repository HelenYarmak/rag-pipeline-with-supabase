import { query } from './services/rag.service.js';

async function main() {
  try {
    const userPrompt = 'Tell me more about split fee. How much percent is it?';
    const answer = await query(userPrompt);
    console.log(answer);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();