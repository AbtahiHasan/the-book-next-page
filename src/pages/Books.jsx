import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../components/BookCard';

const Books = () => {
    const {books} = useLoaderData()

    return (
        <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 ui-container'>
            {
                books.map((book) => <BookCard key={book.isbn13} book = {book}/>)
            }
        </section>
    );
};

export default Books;