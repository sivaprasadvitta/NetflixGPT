import { useState } from "react"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import store from '../utils/store'

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
    return (
        <div className="flex justify-between items-center  absolute w-screen z-50 p-4 bg-gradient-to-br from-black">
            <img
                className="w-48"
                src="https://about.netflix.com/images/logo.png"
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
                        src="https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png"
                        alt="logout"
                        onClick={handleSignOut}
                    />
                </div>
            }
        </div>
    )
}

export default Header