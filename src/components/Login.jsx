import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    }

    const handleSubmit = () => {
        const message = checkValidData(email.current.value, password.current.value)
        // console.log(message);
        setError(message);
        if (message) return;

        // signin signup Login
        if (isSignUp) {
            console.log("signup")
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // update profile wihle signup
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://i.pinimg.com/originals/9a/b1/b4/9ab1b479b757936cabbea81739ab0d8b.png"
                    }).then(() => {
                        // user is not updated yet so we used auth
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }
                        ))
                        navigate('/browse');
                    }).catch((error) => {
                        setError(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                });
        } else {
            // signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                });

        }

    }

    return (
        <div>
            <Header />
            <div>
                <img
                    className="absolute"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
                    alt="background"
                />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute w-3/12 flex flex-col gap-6 items-center mt-40 ml-[31rem] p-10 px-10  bg-black bg-opacity-80 text-white rounded-lg" >
                <h1 className="font-bold text-3xl " >
                    {
                        isSignUp ? "SignUp" : "SignIn"
                    }
                </h1>
                {
                    isSignUp ? <input ref={name} type="text" placeholder="User Name" className="p-2 m-2 w-72 bg-gray-700" /> : ""
                }
                <input ref={email} type="text" placeholder="Email" className="p-2 m-2 w-72 bg-gray-700" />
                <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-72  bg-gray-700" />
                <button
                    onClick={handleSubmit}
                    className="p-4 m-4 bg-red-600 w-72 rounded-lg">
                    {isSignUp ? "SignUp" : "SignIn"}
                </button>
                {
                    error ? <p className="text-red-600 font-bold">{error}</p> : ""
                }
                <p
                    className="cursor-pointer"
                    onClick={handleToggle}> {isSignUp ? "Already a user?? SignIn" : "New to Netflix ?? SignUp"}</p>
            </form>

        </div>
    )
}

export default Login