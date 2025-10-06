"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const { register } = useAuthStore();
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });
    
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await register(formData.email, formData.username, formData.password);
            router.push("/login");
        } catch (err: any) {
            setError(err.response?.data?.message || "Registration failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center text-blue-600">
                    Create Account
                </h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div>
                    <label className="block text-sm text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}
