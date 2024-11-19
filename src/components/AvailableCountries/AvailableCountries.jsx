import 'animate.css';
import { useState, useEffect } from 'react';

const AvailableCountries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('/countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="lg:pt-14 md:pt-10 pt-6 w-11/12 mx-auto">
            <h2 className="animate__animated animate__bounce animate__slower animate__repeat-3 lg:text-5xl md:text-3xl text-xl text-center font-bold">Enter World of Cashback and Discount Codes with Discount PRO</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 lg:pt-8 md:pt-6 pt-4">
                {countries.map(country => (
                    <div key={country.id} className="flex md:flex-row flex-col items-center md:gap-3 gap-1 bg-white shadow-md border rounded-md p-2">
                        <img src={country.flag_url} alt="flag" className='md:w-5/12 w-full aspect-[10/6] border rounded-md'/>
                        <h4 className='md:w-7/12 w-full text-lg font-semibold text-center md:text-start'>{country.country_name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableCountries;