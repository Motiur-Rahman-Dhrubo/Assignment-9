import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='bg-[url(/assets/bg.png)] bg-no-repeat bg-center bg-cover bg-fixed'>
            <div className="flex flex-col justify-center items-center min-h-screen py-10 gap-6 font-sora">
                <h3 className="md:text-5xl text-4xl text-center">Page not found!</h3>
                <img className="w-5/12 md:w-[300px] md:h-[300px] rounded-full border-red-400 border-2" src="/assets/error.jpg" alt="error img" />
                <p className='text-center text-red-600 text-xl'>{error?.statusText || error?.message || "An unknown error occurred!!"}</p>
                <Link to="/"><button className='bg-[#3E4746] text-white rounded-xl p-[10px_20px]'>Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;