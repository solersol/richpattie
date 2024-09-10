

// import React from 'react';
// import { pt1 } from '../assets/images'; // Ensure the path is correct

// const Hero = () => {
//   return (
//     <section id="home" className="w-full h-screen flex flex-col justify-center items-center min-h-screen  bg-cover bg-center">
//       {/* <h1 className="flex justify-center font-comic  text-[70px] mb-0 text-[#fff]">$F1</h1> */}
//       {/* <h2 className="flex justify-center font-comic  text-[22px] mb-10 mt-0 text-[#dfe2ff]">F1 MEMES</h2> */}
//       <h1 className="flex justify-center font-elite text-[35px] mt-6 text-center px-4 break-words font-black text-[#fff] animate-slide-in-left">CA:</h1>

//       <a href="https://pump.fun/">
//         <button className="animate-pulse mt-6 mb-10 bg-[#6b81d6] text-[#000] px-28 py-6 hover:bg-[#425973] border-4 border-black font-black font-elite text-[24px]">
//           BUY $PATTIE
//         </button>
//       </a>
      
//       <div className="w-full flex justify-center mt-40">
//         <img
//           src={pt1}
//           alt="burger"
//           className="w-auto h-full max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { pt1 } from '../assets/images'; // Ensure the path is correct

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center">
      {/* Centered Text and Button */}
      <div className="flex-grow flex flex-col mt-44 justify-center items-center">
        <h1 className="font-Matemasie text-[35px] text-center px-4 break-words font-black text-[#fff] animate-slide-in-left">
          CA: EnYDAJYZ5aWQGWE8XxiZfnjZjuLrCnFvG9VRkAaVvHPK
        </h1>

        <a href="https://dexscreener.com/solana/cdorsluabooynt4rydt358qqv5cr5siamwahgejxqb9h">
          <button className="animate-pulse mt-6 mb-10 bg-[#6b81d6] text-[#000] px-28 py-6 hover:bg-[#425973] border-4 border-black font-black font-Matemasie text-[24px]">
            BUY $PATTIE
          </button>
        </a>
      </div>

      {/* Image at the Bottom */}
      <div className="w-full flex justify-center mb-0">
        <img
          src={pt1}
          alt="burger"
          className="w-auto h-auto max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

