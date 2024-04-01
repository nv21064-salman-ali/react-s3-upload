import React from 'react';
import BucketUpload from './components/BucketUpload';
import BucketDownload from './components/BucketDownload';
import MainLayout from './components/MainLayout';

function App() {
  return (
   <div className="pt-8 flex flex-col items-center justify-center bg-pink-200">
     {/* Applying a negative margin-top to move the card up */}
     <div className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl shadow-pink-600 sm:rounded-3xl sm:px-16 -mt-12">
       <h2 className="mx-auto min-w-1xl text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
           Hello!
       </h2>
       <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-700">
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

