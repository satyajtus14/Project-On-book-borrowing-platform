


export async function  getAllBooksData () {
     const res = await fetch('https://project-on-book-borrowing-platform.vercel.app/books.json')
    const books = await res.json()
    return books;
    
}
