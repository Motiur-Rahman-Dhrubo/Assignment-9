import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({ name: null });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name").trim();
        const photo = form.get("photo").trim();
        const updatedData = {};

        if (name) {
            const nameCriteria = /^[A-Za-z\s]+$/;
            if (!nameCriteria.test(name)) {
                setError((prev) => ({
                    ...prev,
                    name: "Name must not contain numbers or special characters.",
                }));
                return;
            } else {
                updatedData.displayName = name;
                setError((prev) => ({ ...prev, name: null }));
            }
        }

        if (photo) {
            updatedData.photoURL = photo;
        }

        if (Object.keys(updatedData).length === 0) {
            toast.error("Please provide at least one field to update.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        updateUserProfile(updatedData)
            .then(() => {
                toast.success("Profile updated successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                });
                e.target.reset();
            })
            .catch((err) => {
                toast.error(err.message, {
                    position: "top-center",
                    autoClose: 3000,
                });
            });
    };


    return (
        <div className="w-11/12 mx-auto lg:mt-4 md:mt-3 mt-2">
            <ToastContainer />
            <div className="md:w-10/12 w-full border rounded-lg mx-auto lg:p-6 p-4 backdrop-blur-sm border-white bg-[rgba(255,255,255,0.1)]">
                <div className="w-full flex flex-col justify-center items-center aspect-[6/2] rounded-lg bg-[url(/assets/welcome-bg.jpeg)] bg-no-repeat bg-center bg-cover">
                    <h2 className="lg:text-5xl md:text-3xl text-xl text-center font-bold">
                        Hay {user?.displayName}
                    </h2>
                    <h2 className="lg:text-5xl md:text-3xl lg:mt-4 md:mt-2 mt-1 text-xl text-center font-bold">
                        Welcome to Discount PRO !!
                    </h2>
                </div>
                <div className="lg:mt-6 md:mt-4 mt-2 flex items-center gap-4">
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="user photo"
                            className="w-3/12 aspect-[1/1] rounded-full border border-black object-cover"
                        />
                    ) : (
                        <img
                            src="/assets/user.png"
                            alt="user photo"
                            className="w-3/12 rounded-full"
                        />
                    )}
                    <div>
                        <h2 className="lg:text-3xl md:text-xl text-lg text-start font-bold">
                            User Name: {user?.displayName}
                        </h2>
                        <h2 className="lg:text-3xl md:text-xl lg:mt-5 md:mt-3 mt-1 text-lg text-start font-bold">
                            Email: {user?.email}
                        </h2>
                    </div>
                </div>

                <div>
                    <form className="card-body" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered"
                            />
                            {error.name && (
                                <label className="label">
                                    <p className="text-red-600">{error.name}</p>
                                </label>
                            )}
                        </div>

                        {/* Photo URL Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
