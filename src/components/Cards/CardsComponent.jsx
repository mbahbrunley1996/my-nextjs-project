'use client'
import React, { useState } from "react";
import { FaHeart, FaStar, FaClock, FaUsers } from "react-icons/fa6";
import { useStoreCart } from "../../store/cart.store";
import { useStoreFavorite } from "../../store/favorite.store";
import { events } from "../../utils/data";
import Link from "next/link";
import { Search } from 'lucide-react';

const CardsComponent = () => {
  const [isClicked, setIsClicked] = useState(false);  
  const { cartItems, toggleItem } = useStoreCart();
  const { selectedFavoriteIds, toggleItemFavoriteId } = useStoreFavorite();
      const [searchTerm, setSearchTerm] = useState('');        
   const filteredEvents = searchTerm.length > 0 ? events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.category.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
    event.country.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  ) : events;

  return (
    <>
    <div className="flex justify-center items-center py-20 relative">
           <input type="text"
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search either for title, catergory, country..." 
            className="px-4 py-4 rounded-lg border w-[500px] h-full"  />   
          
           <button onClick={() => setIsClicked(!isClicked)} className="flex gap-2 bg-primary text-white px-4 py-3 rounded-2xl hover:bg-primary hover:scale-105 transition 
           in-out-ease duration-300 shadow-lg absolute ml-[380px]"><Search color="#000000" /> {isClicked ? "Search" : "Search"}</button>    
       </div>
       {/* <h1 onChange={(e) => setSearchTerm(e.target.value)}>{searchTerm}</h1> */}
    <div className="w-full flex justify-center items-center lg:shadow-2xl px-8 py-60 lg:py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-10 py-4 gap-12 rounded-2xl">
        {filteredEvents.map((event, index) => (
          <Link
            href={`/events/${event.slug}`}  
            key={event.id}
            className="hover:scale-95 transition ease-in-out duration-300 rounded-2xl shadow-lg border-gray-10 border w-[400px] container mx-auto p-2 bg-[url('/hero/contact-bg.png')] bg-cover bg-center flex flex-col items-center text-gray-400 h-[100%]"
          >
            <div
              style={{
                background: `url("${event.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-[250px] rounded-2xl shadow-lg"
            >
              <div className="flex flex-row items-center justify-between text-white w-full p-4 relative top-0">
                <button className="rounded-2xl bg-pink-300 p-3 font-semibold text-white text-sm">
                  {event.category}
                </button>
                <button className="rounded-full p-3 bg-gray-700 font-semibold text-white text-sm">
                  <FaHeart 
                    onClick={(e) => {
                      e.preventDefault(); // prevent navigation on click
                      toggleItemFavoriteId(event.id);
                    }}
                    fill={selectedFavoriteIds.includes(event.id) ? "red" : "white"} 
                    size={20} 
                    color="#fff"
                    style={{ cursor: "pointer" }}
                  />
                </button>
              </div>
              <div className="flex flex-col relative text-white w-full px-2 bottom-[-100px] text-2xl font-semibold">
                <h4>{event.country}</h4>
                <p>{event.title}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-row w-full items-center text-red-500 gap-6 p-4">
              <ul className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <li key={i}>
                    <FaStar color={i < Math.round(event.rate) ? "gold" : "gray"} size={20} />
                  </li>
                ))}
              </ul>
              <ul className="flex text-sm gap-2 ">
                <li className="font-semibold text-black">{event.rate}</li>
                <li className="text-gray-400">({event.reviews} reviews)</li>
              </ul>
            </div>

            {/* Duration & Group Size */}
            <div className="w-full p-2">
              <div className="flex flex-row px-2 gap-4 font-semibold">
                <ul className="flex flex-row gap-2">
                  <li><FaClock size={20} color="gray" /></li>
                  <li>{event.duration} days</li>
                </ul>
                <ul className="flex flex-row gap-2">
                  <li><FaUsers size={20}/></li>
                  <li>{event.groupSize}</li>
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col w-full px-2">
              <p className="text-[15px] px-2">Trip highlights.</p>
              <div className="flex flex-wrap gap-2 w-full text-black p-2 font-semibold">
                {event.tags.map((tag, i) => (
                  <span key={i} className="rounded-2xl mr-3 bg-gray-100 p-1 text-[11px] text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing & Cart */}
            <div className="w-full py-2 m-2 leading-10">
              <div className="flex flex-row w-full justify-between items-center px-2">
                <ul>
                  <li className="text-2xl text-primary font-bold">
                    From ${event.discountPrice}{" "}
                    <b className="text-sm text-gray-400 font-semibold line-through">
                      ${event.price}
                    </b>
                  </li>
                </ul>
                <ul>
                  <button 
                    onClick={(e) => {
                      e.preventDefault(); // ✅ stop navigation when clicking cart
                      toggleItem(event);
                    }} 
                    className="w-[150px] p-3 rounded-2xl bg-primary text-sm shadow-lg font-bold hover:bg-primary-dark text-white"
                  >
                    {cartItems.some(item => item.id === event.id) ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </ul>
              </div>
              <p className="text-sm px-2 text-gray-400 font-semibold">
                as from ${event.monthly}/month
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    </>
  );
};

export default CardsComponent;