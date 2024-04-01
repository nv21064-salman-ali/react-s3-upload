import React from 'react';
import BucketUpload from './components/BucketUpload';
import BucketDownload from './components/BucketDownload';
import MainLayout from './components/MainLayout';

function App() {
 return (
    <div className="pt-8 flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      {/* Applying a negative margin-top to move the card up */}
      <div className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl shadow-blue-600 sm:rounded-3xl sm:px-16 -mt-12">
        <h2 className="mx-auto min-w-1xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Mr BOB will translate your document to Arabic!
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
          Welcome to our Project &#128516;
        </p>
      </div>
      <MainLayout>
        <BucketUpload/>
        <BucketDownload/>
      </MainLayout>
    </div>
 );
}

export default App;
