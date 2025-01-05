import { useState,useEffect } from "react"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import store from '../utils/store'
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { LOGO_URL, LOGOUT_URL } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=> store.user);

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate('/')
        }).catch((error) => {
            navigate('/error')
            // An error happened.
        });
    }

    // we can write it any where its like event listner when sigin/up or logout it will cals
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                }))
              navigate('/browse');
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/');
            }
        });
        // unsubscribe when component is unmounts
        return ()=> unsubscribe();
    },[])

    return (
        <div className="flex justify-between items-center  absolute w-screen z-50 p-4 bg-gradient-to-br from-black">
            <img
                className="w-48"
                src={LOGO_URL}
                alt="logo"
            />
            {   
                user && 
                <div className="flex items-center gap-3">
                    <img 
                        className="w-10 cursor-pointer"
                        src={user?.photoURL} 
                        alt="profile" 
                    />
                    <img
                        className="w-10 mr-3 cursor-pointer"
                        src={LOGOUT_URL}
                        alt="logout"
                        onClick={handleSignOut}
                    />
                </div>
            }
        </div>
    )
}

export default Header