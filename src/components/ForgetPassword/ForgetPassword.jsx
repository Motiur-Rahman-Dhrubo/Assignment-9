import { useContext, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";

const ForgetPassword = () => {

    const auth = getAuth();

    const emailRef = useRef();

    const { email } = useContext(AuthContext);

    const loginEmail = email;

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Input a valid Email", {
                position: "top-center",
                autoClose: 3000,
            });
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success("Password reset email sent to your Email", {
                        position: "top-center",
                        autoClose: 3000,
                    });
                })
        }
    }

    return (
        <div className="flex flex-col w-11/12 mx-auto min-h-screen justify-center items-center lg:mt-4 md:mt-3 mt-2">
            <ToastContainer />
            <h2 className="text-2xl font-semibold text-center">Get reset code</h2>
            <div className="card bg-base-100 w-full mt-3 max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={loginEmail} ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">

                        <label className="label">
                            <a href="#" className="btn btn-primary w-full" onClick={(e) => { e.preventDefault(); handleForgetPassword(); window.open("https://mail.google.com/", "_blank"); }}  >
                                Forgot password?
                            </a>
                        </label>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;