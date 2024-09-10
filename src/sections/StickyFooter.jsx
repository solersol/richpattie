// components/StickyFooter.jsx

import React from 'react';
import {img1, img4, img3} from '../assets/images'; // Update with your image path

const StickyFooter = () => {
  return (
    <footer className="w-full h-full bottom-0 left-0 right-0  py-4 flex flex-col px-11  justify-start z-50 bg-transparent">
      <div className=" flex justify-center  space-x-4 mb-4">
        <a href="https://x.com/PattieOnSol">
          <img src={img1} alt="Image 1" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://dexscreener.com/solana/cdorsluabooynt4rydt358qqv5cr5siamwahgejxqb9h">
          <img src={img4} alt="Image 2" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://t.me/RichPattie">
          <img src={img3} alt="Image 3" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
      </div>

    </footer>
  );
};

export default StickyFooter;
