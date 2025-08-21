import NavbarComponent from "@/components/Navbar/NavbarComponent";

import CardsComponent from "@/components/Cards/CardsComponent";
import Image from "next/image";
import  FooterComponent  from '@/components/Footer/FooterComponent';
import HeroComponent  from '@/components/Hero/HeroComponent';


export default function Home() {
  return (
   <div className="bg-slate-300">
    <NavbarComponent/>
      <HeroComponent />
    <CardsComponent />
     
    this is my home page
    
    
    
    
    <FooterComponent />
    </div>
  );
}
