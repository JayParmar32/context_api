import React, { useEffect, useState } from "react";
import { Link } from "react-router"; 

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {}
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {}
  };

  const updateProduct = (id) => {
    alert(`Update button clicked for product ID: ${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 bg-white"
          >
            <Link to={`/details/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4 transition-transform duration-300 hover:scale-110"
              />
            </Link>

            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>

            <p className="font-bold text-xl mb-4">$ {item.price}</p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => updateProduct(item.id)}
                className="flex-1 bg-blue-300 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:scale-105"
              >
                Update
              </button>

              <button
                onClick={() => deleteProduct(item.id)}
                className="flex-1 bg-purple-300 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-800 hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
