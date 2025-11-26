"use client";

import ProtectedPage from "@/components/ProtectedPage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";


const page = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() =>{
      fetch("http://localhost:5000/mart")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("API Error:", err))
    }, [])

const handleDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/mart/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });

          setProducts((prev) => prev.filter((p) => p._id !== _id));
        })
        .catch((err) => console.log(err));
    }
  })
};


  return (
    <ProtectedPage>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Manage Your Product
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl border border-gray-300"
            >
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{item.Title}</h2>
                <p className="text-gray-700 text-sm">{item.ShortDescription}</p>
                <p className="text-gray-500 text-sm mt-2 break-words">
                  {item.FullDescription}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold">
                    Price: ৳{item.Price}
                  </span>
                  <span className="text-sm text-gray-400">{item.Date}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/itemdetails?id=${item._id}`}
                    className="btn  btn-primary text-white font-bold"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn  bg-red-500 text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
                ;
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedPage>
  );
};

export default page;
















