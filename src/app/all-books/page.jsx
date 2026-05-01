import BookCards from "@/components/shared/BookCards";
import { getAllBooksData } from "@/components/util/dataFetching";

import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooksData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl sm:text-2xl font-bold my-4 text-center sm:text-left">
        All Books Lists
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books?.map((book) => (
          <BookCards key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;