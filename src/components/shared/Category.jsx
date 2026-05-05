"use client";
import React from 'react';

const Category = ({categories,onSelect,active}) => {


    return (
        <div>
            <div className="bg-white shadow rounded-lg p-4">
             <h2 className="text-lg font-semibold mb-3">Categories</h2>
             <ul className='space-y-3'>

              <li
              onClick={() => onSelect(null)}
              className={`px-3 py-2 font-semibold text-lg rounded cursor-pointer ${
               active === null ? "bg-blue-500 text-white font-semibold" 
               : "hover:bg-gray-200 "
              }`}
              >
                All
              </li>
               {
                categories.map(category => 
            <li key={category.id}
              onClick={() => onSelect(category.name)}
              className={`px-3 py-2 font-semibold text-lg rounded cursor-pointer ${
                active === category.name ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-200 "
              }`}
              >
              {category.name}
              </li>
              ) }
   

             </ul>

            </div>
        </div>
    );
};

export default Category;