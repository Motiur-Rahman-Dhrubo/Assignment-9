import AvailableCountries from "../AvailableCountries/AvailableCountries";
import Faq from "../Faq/Faq";
import OnSell from "../OnSell/OnSell";
import Slider from "../Slider/Slider";
import TopBrands from "../TopBrands/TopBrands";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopBrands></TopBrands>
            <OnSell></OnSell>
            <AvailableCountries></AvailableCountries>
            <Faq></Faq>
        </div>
    );
};

export default Home;