import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useAuth() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const login = (email: string, password: string) => {
        setUser({ name: 'User Name', avatar: '/path/to/avatar.png' });
    };

    const logout = () => {
        setUser(null);
        router.push('/');
    };

    useEffect(() => {
        if (typeof window !== 'undefined') { // Check chỉ chạy trên client
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    return {
        login,
        logout,
        user,
    };
}

export default useAuth;
