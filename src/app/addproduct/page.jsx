"use client";

import ProtectedPage from "@/components/ProtectedPage";
import { toast } from "react-toastify";


export default function AddProductPage() {

  const handleSubmit = (e)=>{
    
    e.preventDefault()

    const formData = {
      Title: e.target.Title.value,
      ShortDescription: e.target.ShortDescription.value,
      FullDescription: e.target.FullDescription.value,
      Price: e.target.Price.value,
      Date: e.target.Date.value
    }

    fetch('http://localhost:5000/mart',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast.success("Product added successfully!");
      e.target.reset();
    })
    .catch(err => {
      confirm.log(err)
    })
  }



  return (
    <ProtectedPage>
      <div className="max-w-xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="Title"
              placeholder="Enter product title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="ShortDescription"
              placeholder="Enter a short description"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Full Description</span>
            </label>
            <textarea
              name="FullDescription"
              className="textarea textarea-bordered w-full"
              placeholder="Enter full description"
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="Price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input name="Date" type="date" className="input input-bordered w-full" />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </ProtectedPage>
  );
}
