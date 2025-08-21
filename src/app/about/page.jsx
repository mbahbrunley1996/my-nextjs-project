'use client'
import { useState } from "react";
import React from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
// import BannarComponent from "@/components/Bannar/BannarComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
// import Image from "next/image";
// import Link from "next/link";
const page = ()=>{
  const [count, setCount] = useState(0);
  const [textEntered, setTextEntered] = useState('');
  
    return (

        <>
        <div>
            {/* <BannarComponent  image="bg-[url('/hero/contact-bg.png')/> */}
            < NavbarComponent/>
            <HeroComponent title="About Us" description="Learn more about our mission and values." image="/hero/about-bg.png" />
            <div className="container mx-auto p-4">
                {/* <h1 className="text-2xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700">
                    Welcome to the About page of our Next.js application! Here you can learn more about our mission, values, and the team behind this project.
                </p> */}
            </div>
             <div>
               <h1 className="flex text-9xl justify-center items-center text-gray-900 font-bold ">Counter : {count}</h1>
               <div className="flex flex-row justify-center gap-4">
                <button onClick={()=> setCount(count+1)} className="flex text-2xl justify-center items-center bg-green-600 text-white font-bold p-2">Increment</button>
                <button onClick={()=> count !==0 && setCount(count-1)} className="flex text-2xl justify-center items-center bg-red-600 text-white font-bold p-2">Decrement</button>
               </div>
               <div className="flex flex-col justify-center items-center p-4 ">
                <input onChange={(e)=> setTextEntered(e.target.value)} type="text" value={textEntered} placeholder="type something" className="flex  border p-4 text-4xl bg-black text-white" />
                <h1 className="flex text-2xl bg-gray-300 p-4">{textEntered}</h1>
               </div>
             </div>

          
          </div>
        <FooterComponent />
      </>  
    );
}

export default page;

