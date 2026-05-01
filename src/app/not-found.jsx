import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col space-y-5'>
            <h2 className='font-bold text-5xl text-purple-600'>This page is not Found</h2>

            <Link href={"/"}>
            <button className='btn btn-primary rounded-xl'> Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;