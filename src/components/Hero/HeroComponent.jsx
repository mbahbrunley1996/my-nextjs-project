'use client';
import { useState } from "react";
import Image from 'next/image';
import link from "next/link";
import React from 'react';
import { usePathname } from "next/navigation";

const  HeroComponent =() => {
  // const [showButton, setShowButton] = useState(true);
  const pathname = usePathname();
// const showButton = pathname === "/contact"
 const showButton = pathname === "/contact" || pathname === "/"
               

    return (

        <div className="relative h-[20vh] md:h-[50vh] lg:h-[80vh] text-white text-center flex items-centerjustify-center px-5">
        <div className="absolute w-full h-[100%] border inset-0 bg-cover bg-center bg-no-repeat" style={{
            background: 'url(" https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg ")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px', 
                   
        }}>
    
            <div className="absolute inset-0 bg-blak opacity-50 "></div>  
           <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
             <h1 className="md:text-3xl lg:text-5xl text-2xl font-extrabold mono hover:scale-105 hover:text-gray-300"> THE BEAUTY OF NATURE</h1>
              <p className="md:text-xl lg:text-2xl text-sm font-bold "> Nature depicks the essence of creation and every creation in it</p>
              
               <div>
                 {showButton && (
                  <button className="bg-pink-300 text-white px-4 py-3 rounded-2xl hover:bg-pink-600 hover:scale-105 transition in-out-ease duration-300 shadow-lg">
                   Get Started
                  </button>
                   )}
              </div>
           </div>
          
        </div>
        </div>



    );
}


              
            //  function HeroComponent ({ ImageUrl }) {
            //     return (
            //         <div className="hero-section">
            //             <Image src={imageUrl} alt="hero image" layout="fill" objectfit="cover" />
            //         </div>
            //     );
            //  }


export default HeroComponent;
