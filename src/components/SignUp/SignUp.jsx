import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    return (
        <div className="flex flex-col w-11/12 mx-auto min-h-screen justify-center items-center lg:mt-4 md:mt-3 mt-2">
            <h2 className="text-2xl font-semibold text-center">Sign Up Your Account</h2>
            <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>

                    {/* name-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    {/* photo-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    {/* email-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* password-input */}
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
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p className="mt-2">Already have an account? <Link to="/login" className="link-hover text-blue-600">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;