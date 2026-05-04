
import { getAllBooksData } from "@/components/util/dataFetching";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcReadingEbook } from "react-icons/fc";
import { GrLanguage } from "react-icons/gr";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlinePublish,
} from "react-icons/md";

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const books = await getAllBooksData();
  const book = books.find((p) => p.id == id);



  if (!book) {
    return <h2 className="text-center text-2xl">Book not found</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-lg border border-zinc-300 rounded-2xl max-w-5xl mx-auto">
        <div className="lg:flex">
          {/* Image section */}
          <div className="relative lg:w-1/2">
            <Image
              src={book.image_url}
              alt={book.title}
              width={600}
              height={700}
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>

          {/* Content section */}
          <div className="card-body lg:w-1/2 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">{book.title}</h2>

            <p className="text-gray-600 leading-relaxed">{book.description}</p>

            {/* Dynamic category badge */}
            <div className="mt-2 text-md font-semibold">
              category:{" "}
              <span
                className={`badge rounded-lg font-semibold text-lg px-4 py-3 ${
                  book.category === "Story"
                    ? "badge-warning text-red-700"
                    : book.category === "Tech"
                      ? "badge-success text-green-700"
                      : book.category === "Science"
                        ? "badge-info text-blue-700"
                        : "bg-gray-300 text-gray-700"
                }`}
              >
                {book.category}
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <FcReadingEbook className="text-xl" />
                <p className="font-semibold text-lg text-blue-600">
                  <span className="text-black">Author:</span> {book.author}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineProductionQuantityLimits className="text-xl" />
                <p className="font-semibold text-lg text-orange-500">
                  <span className="text-black">Available:</span>{" "}
                  {book.available_quantity}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm md:text-base pt-2">
              <div className="flex items-center gap-2">
                <MdOutlinePublish className="text-xl" />
                <p className="font-semibold text-lg">
                  <span>Publisher:</span> {book.publisher}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CiCalendarDate className="text-xl" />
                <p className="font-semibold text-lg">
                  <span>Year:</span> {book.published_year}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <GrLanguage className="text-xl" />
                <p className="font-semibold text-lg">
                  <span>Language:</span> {book.language}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/all-books">
                <button className="btn btn-primary rounded-full">
                  <FaArrowLeftLong />
                  Back to Books
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
