import React from 'react';
import Marquee from 'react-fast-marquee';

const books = [
          {
            id:"1",
            title: " New Arrivals: Atomic Habits | The Alchemist . "
          },
          {
               id:"2",
            title: " New Arrivals: Rich Dad Poor Dad. "
          },

          {
               id:"3",
            title: " Special Discount on Memberships: Borrow Unlimited Books This Month!. "
          }
];

const BookDiscountNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-white py-4 px-2 container mx-auto'>
            <button className='btn bg-pink-600 text-white rounded-md'>Special Discount</button>
            <Marquee pauseOnHover={true} speed={100}>
              
                    {
                        books.map((n) => (<span key={n._id} className="text-blue-600 font-semibold mx-6">
                        <span className='text-red-500 text-2xl'>  !! </span> {n.title}
                        </span>))
                    }
            </Marquee>
        </div>
    );
};

export default BookDiscountNews;