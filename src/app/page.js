import TopBooksPage from "@/components/homepage/TopBooksPage";
import Banner from "@/components/shared/Banner";
import BookDiscountNews from "@/components/shared/BookDiscountNews";


export default function Home() {
  return (
          <div>
          <Banner />
          <BookDiscountNews />
           <TopBooksPage />
         </div>
  );
}
