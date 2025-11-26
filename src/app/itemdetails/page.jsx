"use client"; 

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState(null);

  useEffect(() =>{
    if (id) {
      fetch(`https://mart-bd-server.vercel.app/mart?id=${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data.result))
        .catch((err) => console.error(err))
    }
  }, [id])

  if (!product) return <span className="loading loading-spinner loading-xl"></span>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.Title}</h1>
          <p className="text-gray-600 mb-4">{product.ShortDescription}</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.FullDescription}
          </p>
          <div className="flex justify-between text-lg font-semibold mb-6">
            <p>
              Price: <span className="text-green-600">{product.Price}</span>
            </p>
            <p>
              Date: <span className="text-blue-600">{product.Date}</span>
            </p>
          </div>
          <Link href="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
