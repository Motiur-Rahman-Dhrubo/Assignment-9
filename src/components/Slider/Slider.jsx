import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './slider.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div className='w-11/12 mx-auto slider-container lg:pt-4 md:pt-3 pt-2'>
            <AutoplaySlider play={true} interval={3000} className='w-full aspect-[3/1]'>
                <div className='w-full'><img src="/assets/discount-1.jpg" alt="discount img" className='w-full aspect-[3/1] rounded-3xl'/></div>
                <div className='w-full'><img src="/assets/discount-2.jpg" alt="discount img" className='w-full aspect-[3/1] rounded-3xl'/></div>
                <div className='w-full'><img src="/assets/discount-3.jpg" alt="discount img" className='w-full aspect-[3/1] rounded-3xl'/></div>
                <div className='w-full'><img src="/assets/discount-4.jpg" alt="discount img" className='w-full aspect-[3/1] rounded-3xl'/></div>
                <div className='w-full'><img src="/assets/discount-5.jpg" alt="discount img" className='w-full aspect-[3/1] rounded-3xl'/></div>
            </AutoplaySlider>
        </div>
    );
};

export default Slider;