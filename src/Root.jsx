import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Root = () => {
    return (
        <>
            <Header/>
            <main className='min-w-[calc(100vh - 136px)]'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Root;