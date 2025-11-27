import { createClient } from '@supabase/supabase-js';
import { config } from '../config.js';

export const supabase = createClient(config.supabase.url, config.supabase.apiKey);

export async function searchSimilar(embedding, matchCount = 1, threshold = 0) {
  const { data, error } = await supabase.rpc('match_text', {
    query_embedding: embedding,
    match_count: matchCount,
    match_threshold: threshold
  });

  if (error) throw error;
  return data;
}

export async function insertEmbeddings(data) {
  const formatted = data.map(item => ({
    text: item.text,
    embedding: item.embedding
  }));

  const { error } = await supabase
    .from('airbnb_table')
    .insert(formatted);

  if (error) throw error;
  return true;
}