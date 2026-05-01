
import BooksFilterPage from "@/components/shared/BooksFilterPage";
import { getAllBooksData } from "@/components/util/dataFetching";

import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooksData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl sm:text-2xl font-bold my-4 text-center sm:text-left">
        All Books Lists
      </h1>

      <BooksFilterPage books={books}/>
    </div>
  );
};

export default AllBooksPage;