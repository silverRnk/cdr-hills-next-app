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
    const [token, _setToken] = useState("");
    const [isAuth, _setIsAuth] = useState(false)

    const setToken = (token:string) => {
        _setToken(token);
        if(token == ""){
            _setIsAuth(!isAuth)
        }
    } 

    return <AdminContext.Provider value={{token, isAuth, setToken}}>
                {children}
            </AdminContext.Provider>
}

export const useAdminContext = () => useContext(AdminContext);

export {AdminContextProvider}