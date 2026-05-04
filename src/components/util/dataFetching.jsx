


export async function  getAllBooksData () {
     const res = await fetch('https://project-on-book-borrowing-platform.vercel.app/books.json')
    const books = await res.json()
    return books;
    
}



export async function  getAllCategoriesData () {
     const res = await fetch('https://project-on-book-borrowing-platform.vercel.app/category.json')
    const categories = await res.json()
    return categories;
    
}
