"use client"
import React, { useState } from 'react';
import BookCards from '@/components/shared/BookCards';


const BooksFilterPage = ({books}) => {
    const [searchItem, setSearchItem] = useState("");

    const filteredBooks = books?.filter((book)=>
    book.title.toLowerCase().includes(searchItem.toLowerCase()))


    return (
        <div className='container mx-auto'>
        <div className="mb-6">
          <input
          type='text'
          placeholder='Search your book by title'
          value={searchItem}
          onChange={(e)=> setSearchItem(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredBooks.length > 0 ? ((filteredBooks)?.map((book) => (
          <BookCards key={book.id} book={book} />
        ))
        ): (
        <p className="col-span-full text-center text-black text-2xl">
            No Books Found

        </p>)}
      </div>
        </div>
    );
};

export default BooksFilterPage;
