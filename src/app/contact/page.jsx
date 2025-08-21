'use client'
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import React from "react";
import { useState } from "react";
import HeroComponent from "@/components/Hero/HeroComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
// import BannarComponent from "@/components/Bannar/BannarComponent";

const page = ()=> {
    // let count = 0;
    // const great = () =>{
    //     alert("hello good morning")
    // }

    const [count, setCount] = useState(0);
    const [textEntered, setTextEntered] = useState('')
    return (
         <>
         <NavbarComponent />
         <HeroComponent  image  ="bg-[url('/hero/about-bg.webp')]" title="Apropos de nous" />
          {/* <BannarComponent image  ="bg-[url('/hero/about-bg.webp')]" title="Apropos de nous" /> */}
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-9xl text-gray-900 font-bold">Counter : {count}</h1>
         <div className="flex gap-5 mt-5">
           <button onClick= {() =>setCount(count+1)} className="bg-blue-800 px-5 py-2 text-white text-2xl cursor-pointer"> increment</button>
           
           <button onClick= {() => count !== 0 && setCount(count-1)} className="bg-red-700 px-5 py-2 text-white text-2xl cursor-pointer"> decrement</button>
         </div>
              <input type="text" placeholder="Type something" value={textEntered} onChange={(e)=>setTextEntered(e.target.value)} className="text-black text-3xl font-bold outline-0 border p-4 mt-5" />
              <h1 className="text-9xl text-gray-900 font-bold">{textEntered}</h1>
        </div>

         <div>
             <h1>Contact Us</h1>
             <p>If you have any questions, feel free to reach out!</p>
         </div>

         <FooterComponent />
         </>
    );
}

export default page;

         
         
         
     