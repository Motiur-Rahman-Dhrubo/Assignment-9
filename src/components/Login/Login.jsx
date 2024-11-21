import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogin(email, password).then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode || errorMessage);
        });
    }

    return (
        <div className="flex flex-col w-11/12 mx-auto min-h-screen justify-center items-center lg:mt-4 md:mt-3 mt-2">
            <h2 className="text-2xl font-semibold text-center">Please Login Your Account</h2>
            <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="mt-2">Don't have an account? <Link to="/sign-up" className="link-hover text-blue-600">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;