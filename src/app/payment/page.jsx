import { Suspense } from "react";
import PaymentContent from "./PaymentContent";


const PaymentPage = () => {
 <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <PaymentContent />
    </Suspense>
   
};

export default PaymentPage;