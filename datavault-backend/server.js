const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Storage for CSV data
let csvData = [];

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'DataVault Backend API is running!',
    endpoints: {
      upload: 'POST /upload',
      getData: 'GET /data',
      search: 'GET /search?query=keyword'
    }
  });
});

// Upload CSV
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        csvData = results;
        console.log(`✓ CSV uploaded: ${results.length} records`);
        
        // Delete file after processing
        fs.unlinkSync(filePath);
        
        res.json({
          success: true,
          message: 'File uploaded successfully',
          records: results.length,
          data: results
        });
      })
      .on('error', (error) => {
        console.error('Error parsing CSV:', error);
        res.status(500).json({ error: 'Error parsing CSV file' });
      });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Get all data
app.get('/data', (req, res) => {
  res.json(csvData);
});

// Search data
app.get('/search', (req, res) => {
  const query = req.query.query?.toLowerCase();
  
  if (!query) {
    return res.json(csvData);
  }

  const filtered = csvData.filter(row => {
    return Object.values(row).some(value => 
      String(value).toLowerCase().includes(query)
    );
  });

  res.json(filtered);
});

// Delete data (optional - clear all data)
app.delete('/data', (req, res) => {
  csvData = [];
  res.json({ success: true, message: 'All data cleared' });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   DataVault Backend Server Running    ║
║                                        ║
║   🚀 Port: ${PORT}                         ║
║   🌐 URL: http://localhost:${PORT}       ║
║                                        ║
║   Endpoints:                           ║
║   → POST /upload                       ║
║   → GET  /data                         ║
║   → GET  /search?query=keyword         ║
╚════════════════════════════════════════╝
  `);
});

// Error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});
