import React, { useState } from 'react';
import axios from 'axios';

const TranslatePPT = () => {
 // State for source language, target language, and file
 const [sourceLanguage, setSourceLanguage] = useState('en');
 const [targetLanguage, setTargetLanguage] = useState('ar');
 const [file, setFile] = useState(null);

 // Handler for file input change
 const handleFileChange = (e) => {
    setFile(e.target.files[0]);
 };

 // Function to translate the presentation
 const translatePresentation = async () => {
    const formData = new FormData();
    formData.append('sourceLanguage', sourceLanguage);
    formData.append('targetLanguage', targetLanguage);
    formData.append('file', file);

    try {
      const response = await axios.post(' http://localhost:3000/translate-ppt', formData);
      // Handle the response, e.g., download the translated file
      console.log(response.data);
    } catch (error) {
      console.error('Error translating presentation:', error);
    }
 };

 // JSX for rendering the component
 return (
    <div>
      <input type="text" value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} placeholder="Source Language" />
      <input type="text" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} placeholder="Target Language" />
      <input type="file" onChange={handleFileChange} />
      <button onClick={translatePresentation}>Translate</button>
    </div>
 );
};

export default TranslatePPT;
