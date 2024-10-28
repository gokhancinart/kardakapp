import React from 'react';

const BackgroundVideo = ({ videoUrl , title, title2 , description }) => {
  return (
    <div className="bg-blue_gradient pt-[3px]">
      <div className="relative w-full sm:h-[650px] pt-36 pb-28 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video.
        </video>
        <div className="absolute inset-0 bg-black opacity-50">
          {/* Noktalar için arka plan */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px) 0 0,
              radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px) 6px 6px
            `,
            backgroundSize: '10px 10px' // Noktaların boyutunu ve aralığını
          }} />
        </div>
        {/* İçerik */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center sm:w-7/12 w-10/12 h-full mx-auto text-white">
          <h1 className="sm:text-5xl text-4xl font-bold drop-shadow-xl">
            {title}&nbsp;
            <span className="relative z-[2] sm:whitespace-nowrap sm:after:content-[''] sm:after:block sm:after:absolute sm:after:inset-x-0 sm:after:h-[8%] sm:after:z-[-1] sm:after:transition-all sm:after:duration-[0.2s] sm:after:ease-in-out sm:after:mt-0 sm:after:rounded-[5rem] sm:after:bottom-[8%] sm:motion-reduce:after:transition-none sm:after:bg-[#3f78e0] sm:after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]">
              {title2}
            </span>
          </h1>
          <p className="sm:text-2xl text-1xl font-semibold mt-1 drop-shadow-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;