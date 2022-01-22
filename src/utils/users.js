export const isLoggedIn = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}

export const clearUserData = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}

export const setUserData=(token,email)=>{
    localStorage.setItem('token',token);
    localStorage.setItem('email',email)
}