import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {

    const { createNewUser, setUser, updateUserProfile, handleGoogleSignUp } = useContext(AuthContext);

    const [error, setError] = useState({});

    const navigate = useNavigate();


    const handleGoogleSignUpClick = () => {
        handleGoogleSignUp()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const nameCriteria = /^[A-Za-z\s]+$/;
        if (!nameCriteria.test(name)) {
            setError((prev) => ({ ...prev, name: "Name must not contain numbers or special characters." }));
            return;
        } else {
            setError((prev) => ({ ...prev, name: null }));
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordCriteria.test(password)) {
            setError((prev) => ({ ...prev, password: "Password must contain at least 6 characters, including uppercase and lowercase letters.", }));
            return;
        } else {
            setError((prev) => ({ ...prev, password: null }));
        }

        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name ,photoURL: photo})
            .then(() => {
                navigate("/");
            }).catch((err) => {
                toast.error(err.message, {
                    position: "top-center",
                    autoClose: 3000,
                });
            });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorCode}: ${errorMessage}`, {
                position: "top-center",
                autoClose: 3000,
            });
        });
    }
    return (
        <div className="flex flex-col w-11/12 mx-auto min-h-screen justify-center items-center lg:mt-4 md:mt-3 mt-2">
            <ToastContainer />
            <h2 className="text-2xl font-semibold text-center">Sign Up Your Account</h2>
            <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>

                    {/* name-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    {
                        error.name && (
                            <label className="label">
                                <p className="text-red-600">{error.name}</p>
                            </label>
                        )
                    }

                    {/* photo-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" />
                    </div>

                    {/* email-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* password-input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        {error.password && (
                            <label className="label">
                                <p className="text-red-600">{error.password}</p>
                            </label>
                        )}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p className="mt-2">Already have an account? <Link to="/login" className="link-hover text-blue-600">Login</Link></p>
                </form>
                <button onClick={handleGoogleSignUpClick} className="mx-8 btn btn-outline mb-8">Sign In with Google</button>
            </div>
        </div>
    );
};

export default SignUp;