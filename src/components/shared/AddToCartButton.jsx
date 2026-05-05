"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";

const AddToCartButton = ({book}) => {
  const router = useRouter();

const [isBuyNow, setIsBuyNow]= useState(false)

  const handleAddToCart = () => {
     setIsBuyNow(true);
  
    const query = new URLSearchParams({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image_url,
      author: book.author,
    }).toString();

  console.log(book.id)

    router.push(`/payment?${query}`);

    toast.success(`Wow Your ${book.title} item added!`);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`btn w-full text-white rounded-lg mt-5 ${
            isBuyNow ? "bg-green-500" : "bg-[#4f39f6]" }`}>
            
        <FiShoppingCart />
        {isBuyNow ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default AddToCartButton;
