import { redirect } from 'next/navigation';
import React from 'react';

const OrderBooksPage = () => {
    redirect('/all-books');
      return null;
};

export default OrderBooksPage;