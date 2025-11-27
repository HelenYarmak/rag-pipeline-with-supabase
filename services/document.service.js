import fs from 'fs';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { config } from '../config.js';
import { createEmbeddings } from './openai.service.js';

const splitter = new RecursiveCharacterTextSplitter(config.chunking);

export function loadDocument(filePath) {
    return fs.readFileSync(filePath, 'utf-8')
}

export async function splitDocument(text) {
    return splitter.splitText(text)
}

export async function createEmbeddingsFromChunks(chunks) {
  const embeddings = await createEmbeddings(chunks);
  return chunks.map((chunk, i) => ({
    text: chunk,
    embedding: embeddings[i]
  }));
}

export async function processDocument(filePath) {
  const text = loadDocument(filePath);
  const chunks = await splitDocument(text);
  return createEmbeddingsFromChunks(chunks);
}