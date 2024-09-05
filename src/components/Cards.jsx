import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 h-[600px] dark:border">
          <figure className="relative w-full h-[100%] overflow-hidden">
            <div className="w-[90%] h-full mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="mt-4 w-full h-90% object-cover"
              />
            </div>
          </figure>
          <div className="card-body flex flex-col justify-between h-[25%] p-3">
            <h2 className="card-title text-xl font-bold">
              {item.title}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-sm">{item.name}</p>
            <div className="card-actions justify-between mt-4">
              {/* <div className="badge badge-outline">{item.price}</div> */}
              {/* <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-black cursor-pointer">
                Buy Now
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
