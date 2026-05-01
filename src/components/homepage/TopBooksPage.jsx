import React from "react";

import BookCards from "../shared/BookCards";
import { getAllBooksData } from "../util/dataFetching";

const TopBooksPage = async () => {
  const books = await getAllBooksData();

  const topBooks = books.slice(0, 4);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl sm:text-2xl font-bold my-5 text-center sm:text-left">
        Top Listed Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {topBooks.map((book) => (
          <BookCards key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TopBooksPage;