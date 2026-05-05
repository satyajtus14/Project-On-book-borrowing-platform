

import CategoriesSideBarPage from "@/components/sidebar/CategoriesSideBarPage";

import { getAllBooksData, getAllCategoriesData } from "@/components/util/dataFetching";

import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooksData();

  const categories = await getAllCategoriesData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl sm:text-2xl font-bold my-4 text-center sm:text-left">
        All Books Lists
      </h1>

     <div>

     <CategoriesSideBarPage books={books} categories={categories} />
     </div>
     
      {/* <BooksFilterPage books={books}/> */}
    </div>
  );
};

export default AllBooksPage;