import { useState } from "react"

const Header = ()=>{
    return(
        <div className="absolute z-50 p-4 bg-gradient-to-br from-black">
            <img 
                className="w-48"
                src="https://about.netflix.com/images/logo.png" 
                alt="logo" 
            />
        </div>
    )
}

export default Header