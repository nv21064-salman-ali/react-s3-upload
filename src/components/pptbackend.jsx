const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({
 storage: multer.memoryStorage(),
 limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

app.post('/translate-ppt', upload.single('file'), async (req, res) => {
 const { sourceLanguage, targetLanguage } = req.body;
 const file = req.file;

 if (!file) {
    return res.status(400).send('No file uploaded.');
 }

 // Here, you would call your AWS Lambda function or another service to process the file
 // For demonstration, we'll just return a success message
 res.send('Translation started. Check your email for the translated file.');
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
