import React from 'react';

const BookCard = ({book}) => {
    const {title, subtitle, image, price} = book
    return (
        <article className='book-card relative overflow-hidden transition hover:-translate-y-2 text-white'>
            <div className='w-[90%] mx-auto'>

            <img src={image} className='object-cover' alt={title} />
            </div>
            <div className='flex flex-col absolute inset-0 px-6 py-4 bg-black transition-opacity opacity-0 bg-opacity-75 hover:opacity-100 duration-200'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <h4 className='text-md mt-5'>{subtitle}</h4>
                <p className='mt-auto'>{price}</p>
            </div>
        </article>
    );
};

export default BookCard;