

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
import { href } from "react-router-dom";
import { Button } from "@/components/ui/button";
    import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';
import { ModeToggle } from "../ModeToggle/ModeToggle";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'



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
   
<nav className="bg-primary h-[70px] p-3 text-white font-semibold fixed top-0 left-0 right-0 z-50">
<div className="container flex justify-between  items-center mx-auto">
    <div className='flex items-center '>
         <Link href="/"><img className="w-15 rounded-full" src="/image copy 6.png" alt="logo" /></Link>
         
          <h1 className="text-4xl  font-bold font-serif flex relative right-5">NATURE</h1>
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

          {/* <li><img className="w-15 rounded-full" src="/1733775063817.jpg" alt="profile pic" /></li> */}

          <li>
              <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Menu color="#000000" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
           {/* signIn Button */}
          <SignedOut> <SignInButton /> </SignedOut>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </li>
          <li className="text-black">
            <ModeToggle color={"#000000"} />
          </li>
          <UserButton />
      </ul>

    {showButton &&  <button className=" bg-green-600 shadow-xl text-sm font-bold hover:scale-95 rounded-2xl px-3 py-2"><Link href="/signup" className="text-white/100 hover:text-gray-300">Sign Up </Link></button>}
    </div>




</nav>
)
}

export default NavbarComponent;
