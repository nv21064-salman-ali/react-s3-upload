import React from 'react';
import BucketUpload from './components/BucketUpload';
import BucketDownload from './components/BucketDownload';
import CardList from './components/CardList';


function App() {
   return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <BucketUpload/>
        <BucketDownload/>
    </div>
  );
}

export default App;