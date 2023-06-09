import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Root = () => {
    return (
        <>
            <Header/>
            <main className='min-h-[calc(100vh-136px)] mt-3'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Root;