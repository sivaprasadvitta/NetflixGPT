import { useEffect, useState } from "react"
import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { onAuthStateChanged } from "firebase/auth"
import {auth} from '../utils/firebase'


const Body = ()=>{
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    // we can write it any where its like event listner when sigin/up or logout it will cals
    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //           const {uid,email,displayName,photoURL} = user;
    //           dispatch(
    //             addUser({
    //                 uid:uid,
    //                 email:email,
    //                 displayName:displayName,
    //                 photoURL:photoURL
    //             }))
    //         //   navigate('/browse');
    //         } else {
    //           // User is signed out
    //           dispatch(removeUser());
    //         //   navigate('/');
    //         }
    //       });
    // },[])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body