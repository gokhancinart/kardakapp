import React from 'react';

const BackgroundVideo = ({ videoUrl , title, title2 , description }) => {
  return (
    <div className="bg-blue_gradient pt-[3px]">
      <div className="relative w-full h-[650px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50">
          {/* Noktalar için arka plan */}
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px) 0 0,
              radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px) 6px 6px
            `,
            backgroundSize: '10px 10px' // Noktaların boyutunu ve aralığını ayarlayın
          }} />
        </div>
        {/* İçerik Buraya Eklenebilir */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-7/12 h-full mx-auto text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            {title}&nbsp;
            <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[8%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[8%] motion-reduce:after:transition-none after:bg-[#3f78e0] after:!bg-[linear-gradient(45deg,#08aeea_0,#2af598_100%)]"
            >{title2}</span>
          </h1>
          <p className="text-2xl font-semibold mt-1 drop-shadow-lg">
            {description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;