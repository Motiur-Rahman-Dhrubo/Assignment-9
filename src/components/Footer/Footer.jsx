const Footer = () => {
    return (
        <footer className="w-full">
            <div className="w-11/12 mx-auto py-20">
                <div>
                    <h3 className="text-[#09080F] text-3xl font-bold text-center">Gadget Heaven</h3>
                    <p className="text-base font-medium text-[#6B6B6F] text-center mt-3">Leading the way in cutting-edge technology and innovation.</p>
                    <hr className="my-8"/>
                    <div className="w-8/12 mx-auto flex justify-between">
                        <div className="text-center">
                            <h3 className="text-[#09080F] text-lg font-bold">Services</h3>
                            <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-[#6B6B6F]">
                                <li><a href="#">Product Support</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h3 className="text-[#09080F] text-lg font-bold">Company</h3>
                            <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-[#6B6B6F]">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h3 className="text-[#09080F] text-lg font-bold">Legal</h3>
                            <ul className="mt-4 flex flex-col gap-2 text-base font-normal text-[#6B6B6F]">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;