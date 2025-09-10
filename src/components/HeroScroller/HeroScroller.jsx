"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const HeroScroller = () => {

    
     const pathname = usePathname();
    const showButton = pathname === "/contact" || pathname === "/"



  return (
    <>
    
    <div className="flex flex-col overflow-hidden text-primary pb-[10px] pt-[10px] min-h-screen relative" 
    style={{ backgroundImage: 'url(" https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg ")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
       <div className="absolute inset-0 bg-black/80"></div>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold dark:text-white">
            Unleash the power of <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Nature
            </span>
          </h1>
        }
      >
        <Image
        //   src= "/image copy 7.png"
        //   alt="hero"
        //   fill
        //   className=" rounded-2xl object-cover object-center"
        //   draggable={false}

            src="/image copy 7.png"
            alt="hero"
            fill
            className="object-cover object-center px-4 py-4 rounded-2xl"
            draggable={false}
        />
        <div className="flex flex-col text-white absolute inset-0 z-10 flex items-center justify-center">
            <h1 className="md:text-3xl lg:text-5xl text-2xl font-extrabold mono hover:scale-105 hover:text-gray-300"> THE BEAUTY OF NATURE</h1>
              <p className="md:text-xl lg:text-2xl text-sm font-bold "> Nature depicks the essence of creation and every creation in it</p>
              
               <div>
                 {showButton && (
                  <button className="bg-primary text-white px-4 py-3 rounded-2xl hover:bg-primary-dark hover:scale-105 transition in-out-ease duration-300 shadow-lg">
                   Get Started
                  </button>
                   )}
              </div>
        </div>
      </ContainerScroll>
    </div>
   
    </>
  );
};

export default HeroScroller;
