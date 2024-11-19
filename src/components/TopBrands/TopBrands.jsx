import 'animate.css';
import { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { BrandsDataContext } from '../Roots/Roots';

const TopBrands = () => {

    const { brands } = useContext(BrandsDataContext);
    
    return (
        <div className="lg:pt-14 md:pt-10 pt-6">
            <h2 className="animate__animated animate__bounce animate__slower animate__repeat-3 lg:text-5xl md:text-3xl text-xl text-center font-bold">Discover the Best Brands at a Glance</h2>
            <Marquee pauseOnHover="true" className='lg:pt-8 md:pt-6 pt-4'>
                <div className='flex justify-around'>
                    {
                        brands.map(brand => (
                            <a href="#" key={brand._id}><img src={brand.brand_logo} alt="brand logo" className='lg:w-40 md:w-32 w-28 aspect-[7/4] rounded-lg mx-5' /></a>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default TopBrands;