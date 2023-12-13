'use client'
import { createContext, useContext, useState } from "react"


const adminInitContext = {
    token: "",
    isAuth: false,
    setToken: (token:string) => {}
}

const AdminContext = createContext(adminInitContext);

function AdminContextProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const accessToken = localStorage.getItem("ACCESS_TOKEN") ?? ""
    const [token, _setToken] = useState(accessToken);
    const [isAuth, _setIsAuth] = useState(accessToken != "")

    const setToken = (token:string) => {
        _setToken(token);
        if (token) {
          localStorage.setItem("ACCESS_TOKEN", token);
        } else {
          localStorage.removeItem("ACCESS_TOKEN");
        }
        console.log(token)
        console.log(isAuth)
    } 

    return <AdminContext.Provider value={{token, isAuth, setToken}}>
                {children}
            </AdminContext.Provider>
}

export const useAdminContext = () => useContext(AdminContext);

export {AdminContextProvider}