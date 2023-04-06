import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <> 
            <Header/>
            <h1 className='text-9xl text-cener mt-[40%]'>404</h1>
            <Footer/>
        </>
    );
};

export default ErrorPage;