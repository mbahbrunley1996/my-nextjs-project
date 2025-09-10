
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { events } from '../../../utils/data';
import { FaStar, FaClock, FaUsers } from "react-icons/fa";

const EventPage = () => {
  const { slug } = useParams();

  // Find the event matching the slug
  const eventItem = events.find(event => event.slug === slug);

  // Handle 404 (if slug not found)
  if (!eventItem) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="w-[50%] min-h-screen px-2 flex flex-col py-16">
      {/* Title */}
      <h1 className="text-5xl md:text-4xl font-extrabold px-2 mb-8">
        {eventItem.title}
      </h1>

      {/* Image */}
      <img
        src={eventItem.image}
        alt={eventItem.title}
        className="rounded-2xl shadow-lg mb-8 w-[80%] md:w-[60%] object-cover"
      />

      {/* Meta info */}
      <div className="flex flex-wrap px-2 gap-6 text-gray-700 text-lg mb-6">
        <span className="flex items-center gap-2">
          <FaClock /> {eventItem.duration} days
        </span>
        <span className="flex items-center gap-2">
          <FaUsers /> {eventItem.groupSize}
        </span>
        <span className="flex items-center gap-2">
          ⭐ {eventItem.rate} ({eventItem.reviews} reviews)
        </span>
      </div>

      {/* Price Section */}
      <div className="px-2 mb-8">
        <p className="text-2xl font-bold text-green-600">
          From ${eventItem.discountPrice}{" "}
          <span className="line-through text-gray-400 text-lg">
            ${eventItem.price}
          </span>
        </p>
        <p className="text-sm text-gray-500">
          As from ${eventItem.monthly}/month
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 px-2 mb-8">
        {eventItem.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Country + Category */}
      <div className="px-2 text-gray-600">
        <p>
          <strong>Country:</strong> {eventItem.country}
        </p>
        <p>
          <strong>Category:</strong> {eventItem.category}
        </p>
      </div>
    </div>
  );
};

export default EventPage;



























// 'use client';
// // import page from '../../about/page';
// import React from 'react';
// import { useParams } from 'next/navigation';
// import { events } from '../../../utils/data';

// const page = () => {
//   const { slug } = useParams();
//   const eventItem = events.find(event => event.slug === slug);
//   return (
//     <div className='h-full flex flex-col p-5'>
//        <h1 className='text-8xl font-bold'> { eventItem.title } </h1>
//        <img src={eventItem.image} alt={eventItem.title} width="35%" />
//     </div>
//   );
// }


// export default page;