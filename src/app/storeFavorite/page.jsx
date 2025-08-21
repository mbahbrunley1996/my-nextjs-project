
'use client'

import React from 'react'; 
import { useStoreCart } from '../../store/cart.store';
import { events } from '../../utils/data';







const Page = () => {
    const { selectedIds, clearCart } = useStoreCart();
    const cartItems = events.filter(event => selectedIds.includes(event.id));

  return (
    <>
      <div className="h-full flex flex-col p-5">
  <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

  {/* cart items */}
  <div className="flex flex-col gap-5">
    {cartItems.length === 0 ? (
      <p className="text-gray-500">Your cart is empty 🛒</p>
    ) : (
      cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>

          {/* quantity controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* subtotal + remove */}
          <div className="flex items-center gap-5">
            <span className="font-bold text-green-600">
              ${item.price * item.quantity}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 font-semibold"
            >
              Remove
            </button>
          </div>
        </div>
      ))
    )}
  </div>

  {/* summary */}
  {cartItems.length > 0 && (
    <div className="mt-10 p-5 bg-gray-100 rounded-xl flex flex-col gap-3">
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>
          $
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </span>
      </div>
      <button className="bg-green-500 text-white py-3 rounded-xl mt-3 font-bold">
        Proceed to Checkout
      </button>
    </div>
  )}
</div>
    </>

  );

}


export default Page;