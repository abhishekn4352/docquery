# DocQuery

A document querying chatbot built with FastAPI, LangChain, Chroma vector database, and Groq LLM. Upload PDF or TXT documents and ask questions about their content.

## Features

- Upload and index PDF/TXT documents
- Semantic search using vector embeddings
- AI-powered question answering with Groq models
- RESTful API with FastAPI
- In-memory chat history
- CORS enabled for frontend integration
- Static frontend with HTML/CSS/JavaScript

## Project Structure

```
DocQuery/
├── main.py              # FastAPI backend
├── app.py               # Flask alternative (contact form)
├── requirements.txt     # Python dependencies
├── frontend/            # Static web frontend
│   ├── index.html       # Main chat interface
│   ├── upload.html      # File upload page
│   ├── chat.html        # Chat interface
│   ├── style.css        # Compiled Tailwind CSS
│   └── src/
│       ├── input.css    # Tailwind source
│       └── components.js # Frontend JavaScript
├── document_store/      # Uploaded documents
├── chroma_db/          # Vector database storage
└── venv/               # Python virtual environment
```

## Setup

### Prerequisites

- Python 3.8+
- Groq API key (get from [Groq Console](https://console.groq.com/))
- HuggingFace token (optional, for embeddings)

### Installation

1. Clone or download the project:
   ```bash
   cd DocQuery
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\Activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create `.env` file in the root directory:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   HF_TOKEN=your_huggingface_token_here
   ```

5. Build frontend CSS (optional):
   ```bash
   cd frontend
   npm install
   npm run build
   ```

## Usage

### Running the Backend

Start the FastAPI server:
```bash
python main.py
```

The API will be available at `http://127.0.0.1:8080`

### API Endpoints

- `GET /` - Welcome message
- `POST /upload/` - Upload PDF/TXT file for indexing
- `GET /files` - List uploaded files
- `GET /download/{filename}` - Download uploaded file
- `GET /search/?query={question}` - Ask questions about documents
- `GET /history/` - Get chat history
- `GET /settings/models/` - Get available models

### Using the Frontend

1. Start the backend server
2. Open `frontend/index.html` in your web browser
3. Upload documents using the upload page
4. Ask questions in the chat interface

### Example API Usage

Upload a file:
```bash
curl -X POST "http://127.0.0.1:8080/upload/" \
     -H "accept: application/json" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@document.pdf"
```

Ask a question:
```bash
curl "http://127.0.0.1:8080/search/?query=What%20is%20the%20main%20topic%20of%20this%20document%3F"
```

## Configuration

- **Model**: Currently set to `llama-3.1-8b-instant` (fast and cost-effective)
- **Embeddings**: Uses `sentence-transformers/all-MiniLM-L6-v2`
- **Chunk Size**: 500 characters with 100 character overlap
- **Vector DB**: Chroma with persistent storage

## Development

### Running with Reload

The server runs with `reload=True` for development, automatically restarting on code changes.

### Logs

Application logs are output to the console with INFO level logging.

### Clearing Data

To reset the vector database and uploaded files:
- Delete `chroma_db/` and `document_store/` directories
- Restart the application

## Troubleshooting

### Common Issues

1. **Import Errors**: Ensure all dependencies are installed: `pip install -r requirements.txt`

2. **API Key Missing**: Create `.env` file with `GROQ_API_KEY=your_key`

3. **Model Decommissioned**: Update model name in `main.py` if current model is deprecated

4. **Port Already in Use**: Change port in `main.py` if 8080 is occupied

5. **CORS Issues**: Ensure frontend is served from the same domain or configure CORS properly

### Model Updates

Groq occasionally decommissions models. Check [Groq Models](https://console.groq.com/docs/models) for current options and update `main.py` accordingly.

## License

This project is open source. Feel free to modify and distribute.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues or questions:
- Check the troubleshooting section
- Review FastAPI/LangChain documentation
- Check Groq API status