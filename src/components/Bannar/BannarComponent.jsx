
import React from "react";


const BannarComponent = ({title,description,images}) => {
  return (
    <div className={`${Image} bg-cover bg-center h-[300px] flex flex-col items-center justify-center text-white`}>
      <h1 className="text-2xl font-bold">Welcome to Our Website {title}</h1>
      <p className="mt-2">Your satisfaction is our priority. {description}</p>
    </div>
  );
}


export default BannarComponent;