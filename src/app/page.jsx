import NavbarComponent from "@/components/Navbar/NavbarComponent";

import CardsComponent from "@/components/Cards/CardsComponent";
import Image from "next/image";
import  FooterComponent  from '@/components/Footer/FooterComponent';
import HeroComponent  from '@/components/Hero/HeroComponent';
import HeroScroller from "@/components/HeroScroller/HeroScroller";


export default function Home() {
  return (
   <div >
    <NavbarComponent/>
    
      <HeroScroller />
    <CardsComponent />
     
    
    
    <FooterComponent />
    </div>
  );
}
