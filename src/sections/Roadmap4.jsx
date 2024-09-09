// import React, { useEffect, useRef } from 'react';
// import { rmap1, rmap2, rmap3 } from '../assets/images'; // Replace with your actual image paths
// import { useInView } from 'react-intersection-observer';

// const Roadmap4 = () => {
//   // Animation hooks for sliding effect
//   const { ref: row1Ref, inView: row1InView } = useInView({ triggerOnce: true });
//   const { ref: row2Ref, inView: row2InView } = useInView({ triggerOnce: true });
//   const { ref: row3Ref, inView: row3InView } = useInView({ triggerOnce: true });

//   return (
//     <section className="w-full py-12">
//       <h1 className="text-center text-4xl font-bold mb-12">Roadmap</h1>

//       {/* Row 1 - Image Left, Text Right */}
//       <div
//         ref={row1Ref}
//         className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row1InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
//       >
//         <div className="lg:w-1/2 flex justify-center lg:justify-end px-6 mb-6 lg:mb-0">
//           <img
//             src={rmap1}
//             alt="Roadmap Step 1"
//             className="w-[25%] h-[45%] "
//           />
//         </div>
//         <div className="lg:w-1/2 text-center px-6">
//           <h2 className="text-2xl font-bold mb-4">Step 1: Initial Planning</h2>
//           <p className="text-gray-600">
//             We begin by outlining our project objectives and gathering initial feedback to ensure we’re on the right track.
//           </p>
//         </div>
//       </div>

//       {/* Row 2 - Text Left, Image Right */}
//       <div
//         ref={row2Ref}
//         className={`flex flex-col lg:flex-row items-center justify-between transition-transform duration-700 ${row2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
//       >
//         <div className="lg:w-1/2 text-center px-6 mb-6 lg:mb-0">
//           <h2 className="text-2xl font-bold mb-4">Step 2: Development Phase</h2>
//           <p className="text-gray-600">
//             During this phase, our developers work tirelessly to build the core functionality of our product.
//           </p>
//         </div>
//         <div className="lg:w-1/2 flex justify-center lg:justify-start px-6">
//           <img
//             src={rmap2}
//             alt="Roadmap Step 2"
//             className="w-[25%] h-[45%] object-cover"
//           />
//         </div>
//       </div>

//       {/* Row 3 - Image Left, Text Right */}
//       <div
//         ref={row3Ref}
//         className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row3InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
//       >
//         <div className="lg:w-1/2 flex justify-center lg:justify-end px-6 mb-6 lg:mb-0">
//           <img
//             src={rmap3}
//             alt="Roadmap Step 3"
//             className="w-[25%] h-[45%]  object-cover"
//           />
//         </div>
//         <div className="lg:w-1/2 text-center px-6">
//           <h2 className="text-2xl font-bold mb-4">Step 3: Finalization & Launch</h2>
//           <p className="text-gray-600">
//             After thorough testing and feedback collection, we finalize the product and prepare for a full-scale launch.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap4;


import React from 'react';
import { rmap1, rmap2, rmap3 } from '../assets/images'; // Replace with your actual image paths
import { useInView } from 'react-intersection-observer';

const Roadmap4 = () => {
  // Animation hooks for sliding effect
  const { ref: row1Ref, inView: row1InView } = useInView({ triggerOnce: true });
  const { ref: row2Ref, inView: row2InView } = useInView({ triggerOnce: true });
  const { ref: row3Ref, inView: row3InView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full py-12 px-56 ">
      <h1 className="text-center text-4xl font-bold mb-12">Roadmap</h1>

      {/* Row 1 - Image Left, Text Right */}
      <div
        ref={row1Ref}
        className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row1InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      >
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6 mb-6 lg:mb-0">
          <img
            src={rmap1}
            alt="Roadmap Step 1"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>
        
        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mr-32">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4">Step 1: Initial Planning</h2>
            <p className="text-gray-600">
              We begin by outlining our project objectives and gathering initial feedback to ensure we’re on the right track.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 - Text Left, Image Right */}
      <div
        ref={row2Ref}
        className={`flex flex-col lg:flex-row items-center justify-between transition-transform duration-700 ${row2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
      >
        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mb-6 ml-32 lg:mb-0">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4">Step 2: Development Phase</h2>
            <p className="text-gray-600">
              During this phase, our developers work tirelessly to build the core functionality of our product.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6">
          <img
            src={rmap2}
            alt="Roadmap Step 2"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>
      </div>

      {/* Row 3 - Image Left, Text Right */}
      <div
        ref={row3Ref}
        className={`flex flex-col-reverse lg:flex-row items-center justify-between transition-transform duration-700 ${row3InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
      >
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6 mb-6 lg:mb-0">
          <img
            src={rmap3}
            alt="Roadmap Step 3"
            className="w-[25%] h-[45%] object-cover"
          />
        </div>

        {/* Text with Rounded Border and Opacity */}
        <div className="lg:w-1/3 text-center px-6 mr-32">
          <div className="border border-black rounded-lg p-6 bg-white bg-opacity-50">
            <h2 className="text-2xl font-bold mb-4">Step 3: Finalization & Launch</h2>
            <p className="text-gray-600">
              After thorough testing and feedback collection, we finalize the product and prepare for a full-scale launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap4;
