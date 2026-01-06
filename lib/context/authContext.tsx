"use client";
import { createContext, useContext, useState, ReactNode, Children } from 'react';
import Cookies from 'js-cookie';


interface User {
    id: number;
    type: string;
    name: string;
    email: string;
    mobile_country_code: string;
    mobile: string;
    image: string;
    email_verified_at: boolean;
    token: string;
}

interface AuthActions{
    userData: User | null;
    login: (userData: User) => void;
    logout: (params: {url: string}) => void;
}

interface ContextProps {
    children: ReactNode;
}


const Context = createContext<AuthActions>({
    userData: null,
    login: () => {},
    logout: () => {}
});


const ContextProdvider = ({ children }: ContextProps) => {
    const getUserFromCookie = (): User|null => {
        const user =  Cookies.get('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    const [userData, setUserData] = useState<User | null>(getUserFromCookie());


    const login = (user: User) => {
        setUserData(user);
        Cookies.set('user', JSON.stringify(user), 
        { expires: 7 , secure: true });
    }

    const logout = ({url}: {url: string}) => {
        setUserData(null);
        Cookies.remove('user');
        window.location.href = url;
    }

    return (
        <Context.Provider value={{ userData, login, logout }}>
            {children}
        </Context.Provider>
    )
};export default Context;


export const ContextProviderWrapper = ({children}: {children: ReactNode}) => {
    return (
        <ContextProdvider>
            {children}
        </ContextProdvider>
    )
}

export const useAuth = () => {
    return useContext(Context);
};