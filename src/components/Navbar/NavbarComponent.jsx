

'use client'
import { CiShoppingCart,} from "react-icons/ci"
import { FaUsers } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import { useStoreCart } from "../../store/cart.store";
import { useStoreFavorite } from "../../store/favorite.store";

const NavbarComponent =() => {
  const { cartItems } = useStoreCart();  
  const { selectedFavoriteIds } = useStoreFavorite();
  const pathname = usePathname();
  const showButton = pathname === "/contact";
  const [count, setCount] = useState(0);
  const [mouse0n, setMouse0n] = useState('')
  const [likeVisible, setLikeVisible] = useState(true);
  const toggleLike = () => {
    setLikeVisible(!likeVisible);
  }; 

 return (
   
<nav className="bg-gray-500 h-[70px] p-3 text-white font-semibold fixed top-0 left-0 right-0 z-50">
<div className="container flex justify-between  items-center mx-auto">
    <div className='flex items-center '>
         <Link href="/"><img className="w-15 rounded-full" src="/image copy 6.png" alt="logo" /></Link>
         
          <h1 className="text-4xl text-pink-700 font-bold font-serif flex relative right-5">NATURE</h1>
        </div>

          <ul className="flex space-x-4 font-semibold justify-center items-center">        
        <li><Link href="/" className="text-white/100 hover:text-gray-300 underline underline-offset-8">Home</Link></li>
        <li><Link href="/about" className="text-white/100 hover:text-gray-300">About </Link></li>
        <li><Link href="/contact" className="text-white/100 hover:text-gray-300">Contact </Link></li>
        
      

       <div className='relative'
       onMouseEnter={() => setMouse0n(true)}
       onMouseLeave={() => setMouse0n(false)}
       >
      <span><li><Link href="#" className="text-white/100 hover:text-gray-300">Registration </Link></li></span>
       {mouse0n && (
      <div className="flex flex-col absolute bg-gray-500 text-white p-4 rounded shadow-lg hover:text-gray-200 hover:underline underline-offset-4 z-10 w-48 shadow-md space-y-4 top-full mt-0">
        <a href="#">Display of Nature</a>
        <a href="#">Roots of Nature</a>
        <a href="#">Structure of Nature</a>
      </div>
        )}
        </div>
       
       </ul>
    
         <ul className="flex flex-row justify-center items-center gap-8 ">
        {/* <div className="flex relative">
        
       <li onClick= {() =>setLike(!like)}> <span><FaHeart size={30}/></span><span className="flex absolute left-4 bottom-4 rounded-full 
         justify-center items-center font-light text-sm p-[5px]"><button> 
          
        {likeVisible && (
        <FaThumbsUp
          size={20}
          color="red"
          style={{ cursor: "pointer" }}
          onClick={toggleLike}
        />
      )}
      {!likeVisible && (
        <div
          style={{
            width: 20,
            height: 20,
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={toggleLike}
        >
        </div>
      )}
      </button></span> </li>
          </div> */}


           <div className="flex flex-col relative">
        <li onClick= {() =>setCount(count+1)}> 
          <span> <FaHeart size={30}/></span> <span className="flex absolute left-4 bottom-4 rounded-full w-5 h-5 
          bg-red-700 justify-center items-center font-light text-sm p-[5px]"><button> {selectedFavoriteIds.length} </button> </span> </li>
          </div>



        <Link href="/cart"><div className="flex flex-col relative">
        <li onClick= {() =>setCount(count+1)}> 
          <span> <CiShoppingCart size={30}/></span> <span className="flex absolute left-4 bottom-4 rounded-full w-5 h-5
          bg-red-700 justify-center items-center font-light text-sm p-[5px]"><button> {cartItems.length} </button> </span> </li>
          </div> </Link>

          <li><img className="w-15 rounded-full" src="/1733775063817.jpg" alt="profile pic" /></li>
    </ul>

    {showButton &&  <button className="border bg-pink-300 shadow-xl text-xl font-bold hover:scale-95 rounded-2xl p-2"><Link href="/signup" className="text-white/100 hover:text-gray-300">Sign Up </Link></button>}
    </div>


</nav>
)
}

export default NavbarComponent;
