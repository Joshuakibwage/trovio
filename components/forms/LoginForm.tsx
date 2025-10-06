"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";


const LoginForm = () => {

    const { login } = useAuthStore();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await login(email, password);
            window.location.href="/dashboard";

        } catch {
            setError("Invalid email or password");
        }
    }



    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input 
                type="text" 
                placeholder="Email"
                className="p-2 border rounded w-full"
                value={email}
                onchange={(e) => setEmail(e.target.value)}
            />
            
            <input 
                type="text" 
                placeholder="password"
                className="p-2 border rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        </form>
    )
}


export default LoginForm;