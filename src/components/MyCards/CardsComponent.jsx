
'use client'
import React, { useState } from "react";
// import { FaRegHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { events } from "@/utils/data";

// const CardsComponent = () => {
//   //  let isClicked = false;
//    const [isClicked, setIsClicked] = useState(false);

//   return (
//     <div className="w-full flex justify-center items-center lg:shadow-2xl bg-white px-8 py-60 lg:py-8 md:py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-12 py-4 gap-6 bg-slate-100 rounded-2xl gap-5        flex-wrap">
//         {events.map(events=><h1>{event.title}</h1>)} /*cut the portion for the card only and replace it here were you have h1/event.title
//           <div
//             key={index}
//             className="hover:scale-95 transition ease-in-out duration-300 rounded-2xl shadow-md w-[400px] container mx-auto p-2 bg-[url('/hero/contact-bg.png')] bg-cover bg-center flex flex-col items-center text-gray-400 bg-white h-[100%]"
//           >
//             <div
//               style={{
//                 background: `url("${trip.image}")`, // src img="{event.image}" alt="#"
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//               className="w-full h-[250px] rounded-2xl shadow-lg"
//             >
//               <div className="flex flex-row items-center justify-between text-white w-full p-4 relative top-0">
//                 <button className="rounded-2xl bg-pink-500 p-3 font-semibold text-white text-sm">
//                   Most Popular
//                 </button>
//                 <button className="rounded-full p-3 bg-slate-500 font-semibold text-white text-sm">
//                   <CiHeart onClicked={() =>setIsClicked(!isClicked)} size={20} fill={ isClicked ? "red": "#fff"} color="#000" />
//                 </button>
//               </div>
//               <div className="flex flex-col relative text-white w-full px-2 bottom-[-100px] text-2xl font-semibold">
//                 <h4>{trip.country}</h4>
//                 <p>{trip.title}</p>
//               </div>
//             </div>

//             <div className="flex flex-row w-full items-center gap-6 p-4">
//               <ul className="flex">
//                 {Array(5)
//                   .fill(0)
//                   .map((_, i) => (
//                     <li key={i}>
//                       <FaStar color={i < Math.round(trip.rating) ? "gold" : "gray"} size={20} />
//                     </li>
//                   ))}
//               </ul>
//               <ul className="flex text-sm gap-2 ">
//                 <li className="font-semibold text-black">{trip.rating}</li>
//                 <li className="text-gray-400">({trip.reviews} reviews)</li>
//               </ul>
//             </div>

//             <div className="w-full p-2">
//               <div className="flex flex-row px-2 gap-4 font-semibold">
//                 <ul className="flex flex-row gap-2">
//                   <li>icon</li>
//                   <li>{trip.duration}</li>
//                 </ul>
//                 <ul className="flex flex-row gap-2">
//                   <li>icon</li>
//                   <li>{trip.groupSize}</li>
//                 </ul>
//               </div>
//             </div>

//             <div>
//               <p className="text-[11px] px-2">Trip highlights.</p>
//               <div className="flex flex-wrap gap-2 w-full text-black p-2 font-semibold">
//                 {trip.highlights.map((highlight, i) => (
//                   <ul key={i}>
//                     <li className="bg-gray-100 text-[11px] p-1 rounded-full text-gray-400">
//                       {highlight}
//                     </li>
//                   </ul>
//                 ))}
//               </div>
//             </div>

//             <div className="w-full py-2 m-2 leading-10">
//               <div className="flex flex-row w-full justify-between items-center px-2">
//                 <ul>
//                   <li className="text-2xl text-green-600 font-bold">
//                     From ${trip.price.from}{" "}
//                     <b className="text-sm text-gray-400 font-semibold line-through">
//                       ${trip.price.original}
//                     </b>
//                   </li>
//                 </ul>
//                 <ul>
//                   <button className="w-[95px] p-3 rounded-2xl bg-green-500 text-sm shadow-lg font-bold hover:bg-green-600 text-white">
//                     Let's Go
//                   </button>
//                 </ul>
//               </div>
//               <p className="text-sm px-2 text-gray-400 font-semibold">
//                 as from ${trip.price.monthly}/month
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardsComponent;
