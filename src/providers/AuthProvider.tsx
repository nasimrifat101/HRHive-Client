import { createContext } from "react";

interface Props{
    children:any
}


export const AuthContext = createContext(null)

const AuthProvider: React.FC<Props> = ({children}) => {

    const info: any ={
        name: 'Rifat'
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;