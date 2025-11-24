"use client";

import ProtectedPage from "@/components/ProtectedPage";

export default function AddProductPage() {
  return (
    <ProtectedPage>
      <div className="max-w-xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

        <form className="space-y-4">
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Enter a short description"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="label">
              <span className="label-text">Full Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter full description"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input input-bordered w-full" />
          </div>

          {/* Priority
          <div>
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select className="select select-bordered w-full">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div> */}

          
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </ProtectedPage>
  );
}
