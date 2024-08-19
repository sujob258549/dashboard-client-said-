import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";





export const CreatAuthContext = createContext(null);

const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setuser] = useState();
    const [loder, setloder] = useState(true);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    // creart user 
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const logineWithGoogle = () => {
        return signInWithPopup(auth, googleprovider)
    }

    // github
    const signInWithGithub = () => {

        return signInWithPopup(auth, githubprovider)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setuser(currentUser);
                // const userEmail = user.email;
                // const currentUser = { email: userEmail }

                // if (user) {
                //     axios.post(`${import.meta.env.VITE_BACEND_URL}/jwt`, currentUser, {withCredentials : true})
                //         .then(res => {
                //             console.log("response", res.data)
                //         })
                // }
                // else {
                //     axios.post(`${import.meta.env.VITE_BACEND_URL}/logout`, currentUser, {withCredentials: true})
                //         .then(res => {
                //             console.log("response", res.data)
                //         })
                // }


            }
            else {
                setuser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // loge out
    const signout = () => {
        return signOut(auth)
            .then(() => {
                setuser('')
            }).catch((error) => {
                console.error(error)
            });
    };
    const upadateprofile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const userInfo = {
        creatUser,
        signInUser,
        logineWithGoogle,
        signInWithGithub,
        signout,
        user,
        upadateprofile,
        setuser,
        loder,
        setloder
    }
    return (
        <CreatAuthContext.Provider value={userInfo}>
            {children}
        </CreatAuthContext.Provider>
    );
};

export default Authprovider;