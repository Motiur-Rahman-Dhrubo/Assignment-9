import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpectedBrand = () => {

    const clickedBrand = useLoaderData();
    const { brand_logo, brand_name, rating, coupons, shop_Link, isSaleOn } = clickedBrand;

    const [copiedCoupon, setCopiedCoupon] = useState("");

    const handleCopy = (couponCode) => {
        setCopiedCoupon(couponCode);
        toast.success(`Copied to Clipboard.`, {
            position: "top-center",
            autoClose: 3000,
        });
    };

    return (
        <div className="w-11/12 mx-auto lg:mt-4 md:mt-3 mt-2">
            <ToastContainer />
            <div className="md:w-10/12 w-full border rounded-lg mx-auto lg:p-6 p-4 backdrop-blur-sm border-white bg-[rgba(255,255,255,0.1)]">
                <img src={brand_logo} alt="brand logo" className="w-full aspect-[7/3] rounded-lg"/>
                <h2 className="lg:text-xl text-lg font-bold mt-4">Brand Name: {brand_name}</h2>
                <div className="lg:text-lg md:text-base text-sm font-medium mt-2 flex gap-2 md:items-center items-start">
                    <p>Ratings: </p>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={20}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                    />
                    <p className="bg-white text-black px-2 rounded-3xl">
                        {rating}
                    </p>
                </div>
                <hr className="mt-4"/>
                {isSaleOn ?
                    (<div className="mt-4 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            coupons.map(coupon => (
                                <div key={coupon.coupon_code} className="p-3 border rounded-lg bg-white flex flex-col gap-2">
                                    <p><span className="font-medium">Coupon Type: </span>{coupon.coupon_type}</p>
                                    <p className="font-medium">Description:</p>
                                    <p>{coupon.description}</p>
                                    <p><span className="font-medium">Expiry Date: </span>{coupon.expiry_date}</p>
                                    <p><span className="font-medium">condition: </span>{coupon.condition}</p>
                                    <p className="font-medium flex-grow">Coupon Code: <span className="text-green-500">{coupon.coupon_code}</span></p>
                                    <div className="flex gap-3">
                                        <CopyToClipboard text={coupon.coupon_code} onCopy={() => handleCopy(coupon.coupon_code)}>
                                            <button className={`btn ${copiedCoupon === coupon.coupon_code
                                                    ? "bg-sky-500 text-white"
                                                    : ""
                                                }`}>{copiedCoupon === coupon.coupon_code ? "Copied!" : "Copy Code"}</button>
                                        </CopyToClipboard>
                                        <a href={shop_Link} target="_blank" className="btn">Use Now</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>)
                    : <h3 className="text-red-600 pt-5 font-bold text-xl">Coupons are Not Available Now!</h3>}
            </div>
        </div>
    );
};

export default ExpectedBrand;