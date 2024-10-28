import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <Image 
          src="/established-2012.png" 
          alt="established 2012" 
          width={200} 
          height={92} 
          className="transform rotate-[-15deg]"
        />

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Web dev to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"> help you grow.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Listen. Build. Test. Repeat. A simple process that's served me well with all our clients.
        </p>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <video
          className="rounded-2xl"
          src="/modelones-wide.mp4"
          autoPlay
          muted 
          loop
          playsInline
         />
      </div>
    </section>
  );
};

export default Hero;
