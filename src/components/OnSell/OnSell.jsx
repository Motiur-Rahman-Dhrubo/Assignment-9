import 'animate.css';
import { useContext } from 'react';
import { BrandsDataContext } from '../Roots/Roots';

const OnSell = () => {

    const { brands } = useContext(BrandsDataContext);

    return (
        <div className="lg:pt-14 md:pt-10 pt-6 w-11/12 mx-auto">
            <h2 className="animate__animated animate__bounce animate__slower animate__repeat-3 lg:text-5xl md:text-3xl text-xl text-center font-bold">Brands on Sell</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:pt-8 md:pt-6 pt-4">
                {brands
                    .filter(brand => brand.isSaleOn).map(brand => (
                        <div key={brand._id} className="rounded-lg p-4 bg-[url(/assets/bg-card.jpeg)] bg-no-repeat bg-center bg-cover text-white shadow-md">
                            <img src={brand.brand_logo} alt="Brand logo" className="w-full aspect-[7/4] rounded-lg" />
                            <h3 className="text-xl font-bold mt-4">Brand Name: {brand.brand_name}</h3>
                            <p className='text-lg font-medium mt-3'>Total Coupons: {brand.coupons.length}</p>
                            <p className='text-lg font-medium mt-3'>Category: {brand.category}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default OnSell;