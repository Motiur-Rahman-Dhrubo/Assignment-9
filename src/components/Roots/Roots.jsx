import React, { createContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const BrandsDataContext = createContext();

const Roots = () => {
    const brands = useLoaderData();

    const contextValue = {
        brands,
    };
    return (
        <div className='bg-[url(/assets/bg.png)] bg-no-repeat bg-center bg-cover bg-fixed'>
            <BrandsDataContext.Provider value={contextValue}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </BrandsDataContext.Provider>
        </div>
    );
};

export default Roots;