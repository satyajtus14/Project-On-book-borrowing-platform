
import Image from "next/image";
import Link from "next/link";
import { FcReadingEbook } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const BookCards = ({ book }) => {
  return (
    <div className="w-full">
      <div className="card bg-base-100 border border-zinc-300 shadow-md rounded-xl h-full">
        {/* Image */}
        <figure className="relative w-full aspect-4/5">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="rounded-t-xl object-cover"
          />

          {/* Category badge */}
          <div className={`badge absolute top-2 right-2 font-semibold text-xs sm:text-sm
               ${
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
          </div>
        </figure>

        {/* Content */}
        <div className="card-body p-4">
          <h2 className="card-title text-sm sm:text-base md:text-lg font-semibold line-clamp-2">
            {book.title}
          </h2>
           
          

          {/* Responsive info section */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:items-center">
            <div className="flex items-center gap-2">
              <FcReadingEbook className="text-md" />
              <p className="text-blue-600 font-semibold text-sm sm:text-base">
                <small>Author: </small>{book.author}
              </p>
            </div>

            <div className="hidden sm:block divider divider-horizontal m-0"></div>

            <div className="flex items-center gap-2">
              <MdOutlineProductionQuantityLimits className="text-md" />
              <p className="text-orange-500 font-semibold text-sm sm:text-base">
                <small>Quantity: </small>{book.available_quantity}
              </p>
            </div>
          
          </div>
           <div className="flex justify-between items-center gap-3">
               <p className="font-normal"><span><small>Publisher: </small>{book.publisher}</span></p>
              <p><small>Year: </small>{book.published_year}</p>
              <p><small>Language: </small>{book.language}</p>
           </div>

          <Link href={`/all-books/${book.id}`}>
            <button className="btn btn-outline btn-sm sm:btn-md w-full rounded-full mt-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCards;