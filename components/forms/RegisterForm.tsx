"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";


const RegisterForm = () => {

    const {register} = useAuthStore();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(form.username, form.email, form.password);
            setMessage("Account created successfully!");
        } catch {
            setMessage("Registration failed. Please try again.");
        }
    };
        

    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
            <input 
                type="text" 
                placeholder="Username..."
                className="p-2 border rounded w-full"
                value={form.username}
                onChange={(e) = setForm({...form, username: e.target.value})}
                required
            />

            <input 
                type="text" 
                placeholder="email"
                className="p-2 border rounded w-full"
                value={form.email}
                onchange={(e) => setForm({...form, email: e.target.value})}
                required
            />

            <input 
                type="text"
                placeholder="password"
                className="p-2 border rounded w-full"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                required
            />

            <button className="w-full bg-green-600 text-white p-2 rounded">
                Register
            </button>
            {message && <p className="text-center text-gray-700">{message}</p>}
        </form>
    )
}

export default RegisterForm;