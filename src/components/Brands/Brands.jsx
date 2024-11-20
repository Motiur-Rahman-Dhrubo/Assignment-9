import { useContext, useState } from "react";
import { BrandsDataContext } from "../Roots/Roots";
import ReactStars from "react-rating-stars-component";

const Brands = () => {

    const { brands } = useContext(BrandsDataContext);
    const [searchText, setSearchText] = useState("");

    const filteredBrands = brands.filter((brand) =>
        brand.brand_name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="w-11/12 mx-auto lg:pt-4 md:pt-3 pt-2">
            <h2 className="lg:text-5xl md:text-3xl text-xl text-center font-bold">Explore Top Brands</h2>

            <div className="w-full flex justify-end lg:pt-4 md:pt-3 pt-2">
                <input type="text" placeholder="⌕ Search" className="border-2 rounded-xl w-32 md:w-auto lg:py-3 md:py-2 py-1 px-3" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>

            <div className="w-full flex flex-col gap-4 lg:pt-6 md:pt-4 pt-2">
                {filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (
                        <div key={brand._id} className="flex flex-col md:flex-row rounded-lg p-4 bg-[url(/assets/bg-card.jpeg)] bg-no-repeat bg-center bg-cover text-white shadow-md gap-4">
                            <div className="md:w-4/12 w-full">
                                <img src={brand.brand_logo} alt="Brand logo" className="w-full aspect-[7/4] rounded-lg"/>
                                <h3 className="lg:text-xl text-lg font-bold mt-4">
                                    Brand Name: {brand.brand_name}
                                </h3>
                                <div className="lg:text-lg md:text-base text-sm font-medium mt-2 flex gap-2 md:items-center items-start">
                                    <p>Ratings: </p>
                                    <ReactStars
                                        count={5}
                                        value={brand.rating}
                                        size={20}
                                        activeColor="#ffd700"
                                        isHalf={true}
                                        edit={false}
                                    />
                                    <p className="bg-white text-black px-2 rounded-3xl">
                                        {brand.rating}
                                    </p>
                                </div>
                            </div>
                            <div className="border-l md:w-4/12 w-full pl-4">
                                <h3 className="lg:text-2xl text-xl font-bold">
                                    {brand.brand_name}
                                </h3>
                                <p className="text-lg font-medium mt-3">
                                    Description:
                                </p>
                                <p className="lg:text-lg text-base font-light mt-2">
                                    {brand.description}
                                </p>
                            </div>
                            <div className="border-l md:w-4/12 w-full pl-4">
                                {brand.isSaleOn ? (
                                    <div className="flex flex-col h-full justify-center gap-2 items-start">
                                        <button className="btn">
                                            View Coupons
                                        </button>
                                        <h2 className="text-xl font-bold text-green-400">
                                            Sale is On
                                        </h2>
                                    </div>
                                ) : (
                                    <div className="flex h-full items-center">
                                        <h2 className="text-xl font-bold text-red-400">
                                            Not Available Now
                                        </h2>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-2xl font-semibold">
                        No brands found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Brands;