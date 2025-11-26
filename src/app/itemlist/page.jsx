"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () =>{
  const [products, setProducts] = useState([]);

  useEffect(() =>{
   fetch("https://mart-bd-server.vercel.app/mart")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err) => console.error("API Error:", err));
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-gray-300"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{item.Title}</h2>

              <p className="text-gray-700 text-sm">{item.ShortDescription}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">
                  Price: {item.Price}
                </span>
                <span className="text-sm text-gray-400">{item.Date}</span>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/itemdetails?id=${item._id}`}
                  className="btn  btn-primary text-white font-bold"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
