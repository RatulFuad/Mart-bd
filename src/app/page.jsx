
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">

      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow">
          MART BD
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 opacity-90">
          Bangladeshs most trusted online shopping experience — fast delivery,
          secure payment & top-rated products.
        </p>
        <button className="px-8 py-3 bg-white text-emerald-700 rounded-xl text-lg font-semibold shadow hover:shadow-xl transition">
          Shop Now
        </button>

        <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
      
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose MART BD?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast Delivery",
              desc: "Lightning-fast delivery anywhere in Bangladesh.",
              icon: "🚚",
            },
            {
              title: "Secure Payment",
              desc: "Advanced security ensuring safe transactions.",
              icon: "💳",
            },
            {
              title: "Top Rated Products",
              desc: "Curated quality items trusted by thousands.",
              icon: "⭐",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition border border-gray-100"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              img: "https://images.unsplash.com/photo-1606813907291-946905b39aca",
              name: "Wireless Headphone",
            },
            {
              img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
              name: "Smart Watch",
            },
            {
              img: "https://images.unsplash.com/photo-1585386959984-a4155223f829",
              name: "Laptop Backpack",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-zinc-100 shadow hover:shadow-lg transition overflow-hidden"
            >
             
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">
                  High-quality product with the best price in Bangladesh.
                </p>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border border-gray-100"
            >
              <p className="text-gray-600 mb-4">
                “Amazing service! MART BD delivers super fast and the products
                are always genuine.”
              </p>
              <h4 className="font-semibold">Customer {i}</h4>
              <span className="text-sm text-gray-400">Verified Buyer</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Shopping with MART BD</h2>
        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
          Get access to the best products, biggest discounts, and fastest
          delivery across Bangladesh.
        </p>
        <button className="px-8 py-3 bg-white text-teal-700 rounded-xl font-semibold shadow hover:shadow-xl transition">
          Shop Now
        </button>
      </section>
    </div>
  );
}
