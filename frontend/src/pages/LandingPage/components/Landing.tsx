// src/pages/LandingPage/components/Landing.tsx
import React from 'react';
import Check from './assets/Check.svg';
import Dots from './assets/Dots.svg';
<<<<<<< HEAD
// import Squiggle from './assets/Squiggle.svg';
// import Chat from './assets/Chat.svg';
// import Members from './assets/Members.svg';
=======
import Squiggle from './assets/Squiggle.svg';
import Chat from './assets/Chat.svg';
import Members from './assets/Members.svg';
>>>>>>> 2964cebb26a1e5c47792eb53d93a72edb62b1857

const Landing: React.FC = () => {
  return (
    <section id="product" className="bg-white min-h-screen w-full flex flex-col justify-between font-ubuntu relative overflow-x-hidden">
      <div className="w-full flex items-center" style={{ minHeight: 'calc(100vh - 150px)' }}>
        <div className="w-full pl-44 relative z-10">
          <h1 className="text-7xl font-bold text-gray-900 tracking-wide">
            Where Learning Meets <br />
            <span className="bg-gradient-to-r from-[#F1A400] to-[#FF835E] text-transparent bg-clip-text">
              Innovation
            </span>
            .
          </h1>
          <p className="mt-4 text-xl text-gray-700 flex flex-col space-y-2 text-left">
            <span className='flex flex-row space-x-4'><img src={Check} alt="Check Mark"/> <p>Tailored Learning Journeys.</p></span>
            <span className='flex flex-row space-x-4'><img src={Check} alt="Check Mark"/> <p>Engaging, High-Quality Content.</p></span>
            <span className='flex flex-row space-x-4'><img src={Check} alt="Check Mark"/> <p>Interactive Learning Tools.</p></span>
            <span className='flex flex-row space-x-4'><img src={Check} alt="Check Mark"/> <p>Streamlined Goal Management.</p></span>
            <span className='flex flex-row space-x-4'><img src={Check} alt="Check Mark"/> <p>Trusted by Learners and Educators.</p></span>
          </p>
        </div>

        {/* Dots SVG Positioned to the Right */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end overflow-hidden">
          <img src={Dots} alt="Decorative Dots" className="h-full max-w-none" style={{ width: '70%', maxHeight: '100%' }} />
        </div>
<<<<<<< HEAD
=======

        {/* Squiggle SVG Positioned to Overlap Dots */}
        <div className="absolute right-40 top-1/2 transform -translate-y-1/2 flex items-center justify-end overflow-hidden">
          <img src={Squiggle} alt="Decorative Squiggle" className="h-20 max-w-none" style={{ width: '50%', marginTop: '10%' }} />
        </div>

        {/* Two Randomly Positioned White Boxes with Icons and Text */}
        <div className="absolute right-96 top-1/3 mt-12 transform -translate-y-1/2 w-48 h-16 bg-white shadow-md rounded-lg border border-1 border-[#F1A400] flex items-center justify-center">
          <img src={Members} alt="Members Icon" className="h-6 mr-2" />
          <span className="text-gray-700 font-medium">3 members</span>
        </div>
        <div className="absolute right-[34rem] top-1/4 transform -translate-y-1/2 w-48 h-16 bg-white shadow-md rounded-lg border border-1 border-[#F1A400] flex items-center justify-center">
          <img src={Chat} alt="Chat Icon" className="h-6 mr-2" />
          <span className="text-gray-700 font-medium">∞ posts</span>
        </div>
>>>>>>> 2964cebb26a1e5c47792eb53d93a72edb62b1857
      </div>
    </section>
  );
};

export default Landing;
