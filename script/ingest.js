import { processDocument } from '../services/document.service.js';
import { insertEmbeddings } from '../services/supabase.service.js';

export async function ingestDocument(filePath) {
  try {
    console.log('📄 Processing document:', filePath);

    const chunksWithEmbeddings = await processDocument(filePath); 

    console.log(`✨ Generated ${chunksWithEmbeddings.length} embeddings`);
    
    const result = await insertEmbeddings(chunksWithEmbeddings); 

    console.log('➡ Successfully stored in Supabase');
    return result;

  } catch (error) {
    console.error('❌ Error ingesting document:\n', error);
    throw error;
  }
}

// Run directly
/* ingestDocument('./text.txt'); */