# 📚 RAG Pipeline — Retrieval-Augmented Generation System

A complete RAG (Retrieval-Augmented Generation) pipeline for processing documents, chunking content, generating embeddings, storing vectors in a database, retrieving relevant information, and producing enhanced answers with OpenAI LLMs.

This repository demonstrates every stage of a production-oriented RAG workflow — from ingestion to final conversational responses.

---
## 🚀 Features

- ✔ Text ingestion + chunking
- ✔ Embedding generation via OpenAI
- ✔ Vector storage using Supabase
- ✔ Fast semantic retrieval (k-NN)
- ✔ Answer generation with context-aware augmentation
- ✔ Modular architecture — easy to extend
---

## 🧰 Tech Stack

| Component         | Technology             |
| :---------:       | :--------------------: |
| Runtime           | Node.js                |
| LLM               | OpenAI API             |
| Embeddings        | text-embedding-3-small |
| Pipeline Tools    | LangChain              |

---

## 🔧 Installation

1. **Clone + install**

```
git clone https://github.com/HelenYarmak/rag-pipeline-with-supabase
cd rag-pipeline-with-supabase
npm install
```

2. **Environment variables**
Create ```.env``` file in the project root:
```
OPENAI_API_KEY=your_key_here
SUPABASE_API_URL=https://your-project.supabase.co
SUPABASE_API_KEY=your_service_role_key
```

---

