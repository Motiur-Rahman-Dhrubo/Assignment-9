import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="backdrop-blur-sm border-white bg-[rgba(255,255,255,0.1)] mt-14 rounded-t-3xl border">
            <div className="w-11/12 mx-auto">
                <div className="flex md:py-14 py-10 gap-4 flex-col md:flex-row">
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-4xl font-bold italic">Discount PRO</h2>
                        <p className="text-lg font-normal pt-2">
                            South Asia's largest discounts, offers, and cashback website.
                        </p>
                        <p className="text-lg font-normal">
                            Founded in 2010.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h6 className="text-2xl font-semibold">Social links:</h6>
                        <div className="flex gap-5 pt-4 text-3xl">
                            <a href="https://www.facebook.com/md.motiur.rahman.383" target="_blank"><FaFacebook /></a>
                            <a href="https://www.linkedin.com/in/md-motiur-rahman-105598318/" target="_blank"><FaLinkedin /></a>
                            <a href="https://www.youtube.com/@ruitom.coder383" target="_blank"><FaYoutube /></a>
                            <a href="https://github.com/Motiur-Rahman-Dhrubo" target="_blank"><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center py-5">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;