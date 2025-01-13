import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const [email, setEmail] = useState("");

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (updatedData) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, updatedData).then(() => {
                setUser({ ...auth.currentUser, ...updatedData });
            });
        } else {
            return;
        }
    };


    const handleGoogleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        handleGoogleSignUp,
        email,
        setEmail,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return  <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>;
};

export default AuthProvider;