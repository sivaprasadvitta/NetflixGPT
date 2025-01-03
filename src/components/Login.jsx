import { useState} from "react"
import Header from "./Header"


const Login = ()=>{
    const [isSignUp,setIsSignUp] = useState(true);

    const handleToggle = ()=>{
        setIsSignUp(!isSignUp);
    }
    return (
        <div>
            <Header/>
            <div>
                <img 
                    className="absolute"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg" 
                    alt="background" 
                />
            </div>
            
            <form className="absolute w-3/12 flex flex-col gap-6 items-center mt-40 ml-[31rem] p-10 px-10  bg-black bg-opacity-80 text-white rounded-lg" >
                <h1 className="font-bold text-3xl " >
                    {
                        isSignUp ? "SignUp" : "SignIn"
                    }
                </h1>
                {
                    isSignUp ? <input type="text" placeHolder="User Name" className="p-2 m-2 w-72 bg-gray-700" /> :""
                }
                <input type="text" placeHolder="Email" className="p-2 m-2 w-72 bg-gray-700" />
                <input type="password" placeHolder="Password" className="p-2 m-2 w-72  bg-gray-700" />
                <button className="p-4 m-4 bg-red-600 w-72 rounded-lg">{isSignUp ? "SignUp" : "SignIn"}</button>
                <p
                    className="cursor-pointer"
                    onClick={handleToggle}> {isSignUp ? "Already a user?? SignIn" : "New to Netflix ?? SignUp" }</p>
            </form>
            
        </div>
    )
}

export default Login