import React from 'react';
import { useInView } from 'react-intersection-observer';
import { galleryImage1, galleryImage2, galleryImage3 } from '../assets/images'; // Replace with your actual image paths

const Gallery = () => {
  // Animation hooks for each section
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: para1Ref, inView: para1InView } = useInView({ triggerOnce: true });
  const { ref: para2Ref, inView: para2InView } = useInView({ triggerOnce: true });
  const { ref: img1Ref, inView: img1InView } = useInView({ triggerOnce: true });
  const { ref: img2Ref, inView: img2InView } = useInView({ triggerOnce: true });
  const { ref: img3Ref, inView: img3InView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full py-16 ">
      {/* Row 1 - Title and Paragraphs */}
      <div className="flex flex-col items-center text-center mb-12 px-6">
        <h1
          ref={titleRef}
          className={`text-4xl font-bold mb-6 transition-transform duration-700 ${titleInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
        >
          Our Fun Gallery
        </h1>
        <p
          ref={para1Ref}
          className={`text-gray-600 text-lg mb-4 max-w-2xl transition-transform duration-700 ${para1InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
        >
          Explore our carefully curated selection of images that highlight some of the most amazing moments.
        </p>
        <p
          ref={para2Ref}
          className={`text-gray-600 text-lg max-w-2xl transition-transform duration-700 ${para2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          Every image tells a story, capturing both the big picture and the little details that make every experience unique.
        </p>
      </div>

      {/* Row 2 - Images */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-6">
        {/* First Image */}
        <div
          ref={img1Ref}
          className={`transition-transform duration-700 ${img1InView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
        >
          <img
            src={galleryImage1}
            alt="Gallery Image 1"
            className="w-[300px] lg:w-[500px] h-auto rounded-lg border-4 border-black object-cover"
          />
        </div>

        {/* Second Image */}
        <div
          ref={img2Ref}
          className={`transition-transform duration-700 ${img2InView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          <img
            src={galleryImage2}
            alt="Gallery Image 2"
            className="w-[300px] lg:w-[500px] h-auto rounded-lg border-4 border-black object-cover"
          />
        </div>
      </div>

      {/* Centered Bottom Image */}
      <div className="flex justify-center mt-10">
        <div
          ref={img3Ref}
          className={`transition-transform duration-700 ${img3InView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          <img
            src={galleryImage3}
            alt="Gallery Image 3"
            className="w-[150px] lg:w-[300px] h-auto rounded-lg border-4 border-black object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
