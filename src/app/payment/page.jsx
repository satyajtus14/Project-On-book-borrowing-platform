"use client";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const PaymentPage = () => {

    const searchParams = useSearchParams();

    const book= {
        id: searchParams.get("id"),
      title: searchParams.get("title"),
      price: searchParams.get("price"),
      image: searchParams.get("image"),
      author: searchParams.get("author"),
    }

   if (!book.id) {
    return <h2 className="text-center text-2xl mt-10">No book selected.</h2>;
  }

    return (
        <div>
           <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="card bg-base-100 shadow-lg border border-zinc-300 rounded-2xl p-6 flex gap-4">
        <Image
          src={book.image}
          alt={book.title}
          width={100}
          height={130}
          className="rounded-lg object-cover"
        />

        <div className="space-y-1">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-500">by {book.author}</p>
          <p className="text-lg font-semibold text-primary">${book.price}</p>
        </div>
      </div>

      <button className="btn btn-success w-full mt-6 rounded-full text-lg">
        Proceed to Checkout
      </button>
    </div> 
        </div>
    );
};

export default PaymentPage;