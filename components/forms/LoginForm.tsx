"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";


const LoginForm = () => {

    const { login } = useAuthStore();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login(email, password);
            router.push("/dashboard");
        } catch {
            setError("Invalid email or password");
        }
    };



    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input 
                type="text" 
                placeholder="Email"
                className="p-2 border border-black/30 rounded w-full bg-gray-100 placeholder:text-gray-500 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            
            <input 
                type="text" 
                placeholder="password"
                className="p-2 border border-black/30 rounded w-full bg-gray-100 placeholder:text-gray-500 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer">
                Login
            </button>
        </form>
    )
}


export default LoginForm;