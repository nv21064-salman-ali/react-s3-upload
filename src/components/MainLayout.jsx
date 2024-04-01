import React from 'react';
import '../App.css';


const MainLayout = ({ children }) => {
  return (
    <div className="bg-black-600">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-12 lg:mt-12">
        <div className="spline-wrapper">
          <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
        </div>

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Translate your Documents Fast!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
            Start by Uploading a file, wait for it to finish processing, and Download the translated version
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
