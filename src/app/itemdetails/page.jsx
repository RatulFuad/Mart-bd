"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://mart-bd-server.vercel.app/mart?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.result); 
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 text-lg mb-4">Product not found!</p>
        <Link href="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Banner Image */}
        {product.Image && (
          <img
            src={product.Image}
            alt={product.Title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        )}

        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{product.Title}</h1>

          {/* Short Description */}
          <p className="text-gray-600 mb-4">{product.ShortDescription}</p>

          {/* Full Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.FullDescription}
          </p>

          {/* Price & Date */}
          <div className="flex justify-between text-lg font-semibold mb-6">
            <p>
              Price: <span className="text-green-600">{product.Price}</span>
            </p>
            <p>
              Date: <span className="text-blue-600">{product.Date}</span>
            </p>
          </div>

          {/* Back Button */}
          <Link href="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
