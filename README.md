# StudyAtlas-Project
## AI-Powered Knowledge Graph and Document Intelligence Platform
Currect State: Planning/Early Development

## Proposal
StudyAtlas is an AI-powered document intelligence system designed to organize and explore complex collections of educational materials. It applies natural language processing, semantic embeddings, and knowledge graph generation to transform unstructured documents into a structured network of concepts, relationships, and resources.

The platform combines document ingestion pipelines, vector search, and automated knowledge extraction to create an intelligent interface for discovering relevant information across lectures, assignments, readings, and practice materials. Rather than simply storing documents, StudyAtlas builds a semantic representation of course content that enables deeper exploration and retrieval of connected knowledge.

## The Problem
- Course/Study materials are fragmented across PDFs, lecture slides, homework, textbooks, and websites making it difficult to find all resources related to a concept.
- Keeping track of things solely depends on the structure of the course which is decided by the instructor
- I end up with a ton of random documents in my downlaods folder or google docs that end up lost or disorganized
- I want to compile all of those documents which contain valuable study information, and create a mapping where I can navigate everything easily. 

## Proposed Architecture
User -> React Frontend -> FastAPI -> PDF Upload -> Text Extraction -> Chunking -> Embeddings -> Vector DB -> Concept Extraction -> Knowledge Graph

- Text Extraction: From pdf documents, extract text. We do not want to extract text from the whole document, we would get something like This giant document is somewhat related to this specific topic. Instead we want to split the document into smaller peices i.e. Chunking. Chunks focus on 1 idea. Maybe split the documents into subsections via headers.
- ML Approach: Use embeddings. Instead of storing text in its raw form, the embedding model converts it into a vector. Similar ideas produce nearby vectors. 
- We then can store those embeddings. When the user searches something, that query also becomes na embedding which we compare to every stored chunk.
- The embeddings will not create structure, instead we can visual explicit relationships as a knowledge graph. 

- Data ingestion (PDFs → text)
- Preprocessing (chunking)
- Representation learning (embeddings)
- Information retrieval (vector search)
- Knowledge representation (graph)
- Application layer (interactive UI)

## Sources: 
- https://en.wikipedia.org/wiki/Knowledge_graph_embedding
- https://www.youtube.com/watch?v=CEaDSOh_AoM&t=228s
- 