import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="p-10 text-xl">Loading...</h2>;

  return (
    <div className="p-10">
       <h1>Product Details: {id}</h1>

      <h1 className="text-4xl font-bold mt-6">{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        className="w-64 mt-6"
      />

      <p className="mt-6 text-lg">{product.description}</p>

      <h2 className="text-2xl font-bold mt-4 mb-4">${product.price}</h2>

      <button
        onClick={() => navigate(-1)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Back
      </button>
    </div>
  );
}
