"use client"
import React, { useState } from 'react';
import BooksFilterPage from '../shared/BooksFilterPage';
import Category from '../shared/Category';


const CategoriesSideBarPage = ({categories,books}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredBooks = selectedCategory ? books.filter(book => book.category === selectedCategory) : books; 

    return (
        <div className='flex gap-6'>

            <aside className='w-1/4'>
             <Category 
               categories={categories}
               active={selectedCategory}
               onSelect={setSelectedCategory}

             />

            </aside>
            
           <div className='w-3/4'>
            <BooksFilterPage books={filteredBooks}/>
           </div>

            
        </div>
    );
};

export default CategoriesSideBarPage;