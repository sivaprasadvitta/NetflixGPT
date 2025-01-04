export const checkValidData = (email, password) => {
    const nameRegex = /^[a-zA-Z][a-zA-Z ]{2,}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // if (!nameRegex.test(name)) {
    //     return "Name is not valid";
    // }
    if (!emailRegex.test(email)) {
        return "Email is not valid";
    }
    if (!passwordRegex.test(password)) {
        return "Password is not valid";
    }
    return null; 
};
