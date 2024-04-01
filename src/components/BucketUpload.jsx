import React, { useState } from 'react';
import AWS from 'aws-sdk';

const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = process.env.REACT_APP_AWS_REGION;
const bucket = process.env.REACT_APP_S3_UPLOAD_BUCKET_NAME;


AWS.config.update({
  region: region,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

const s3 = new AWS.S3();

const BucketUpload = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSuccess(null);
    setError(null);
  };

  const handleUpload = () => {
    const filePrefix = 'drop/'; // Define your prefix here
    const params = {
      Bucket: bucket,
      Key: `${filePrefix}${file.name}`, // Prepend the prefix to the file name
      Body: file
    };


    s3.upload(params, function (err, data) {
      if (err) {
        setError(err.message);
      } else {
        setSuccess(true);
        console.log(`File uploaded successfully at ${data.Location}`);
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center  bg-pink-900">
      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl py-10'>Upload Files:</h1>
      {success && <div className="bg-green-500 text-white p-4 rounded mb-4">Upload Successful</div>}
      {error && <div className="bg-red-500 text-white p-4 rounded mb-4">Upload Failed: {error}</div>}
      <input type="file" onChange={handleFileChange} className="w-full  text-sm text-gray-700  border-green-300 bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-green-100 file:hover:bg-green-200 file:text-black rounded" />
      <p class="text-xs pt-2 pb-6 text-gray-400 mt-2">PDF, TXT, DOCX, and DOC are Allowed.</p>
      <button onClick={handleUpload} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">Upload</button>
    </div>
  )
}

export default BucketUpload






