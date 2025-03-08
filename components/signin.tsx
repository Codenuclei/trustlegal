"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[] | string>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, Password: password }),
      });
      
      const data = await response.json();
      
      if (response.status !== 200) {
        setErrors(typeof data.message === "string" ? data.message : "Sign in failed");
      } else {
        setErrors([]);
        setSuccessMessage("Sign in successful!");
        router.push("/");
      }
    } catch (err) {
      setErrors("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Sign In
        </h2>
        {successMessage && (
          <div className="text-green-600 font-medium mb-4 p-2 bg-green-50 rounded-md text-center">
            {successMessage}
          </div>
        )}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-50 rounded-md border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {Array.isArray(errors) && errors.includes("Invalid email") && (
              <span className="text-red-600 text-sm mt-1 block">
                Invalid Email
              </span>
            )}
            {typeof errors === "string" && errors === "Email not Found" && (
              <span className="text-red-600 text-sm mt-1 block">
                {errors}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                min={8}
                className="w-full p-3 bg-gray-50 rounded-md border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
                )}
              </div>
            </div>
          </div>

          {(errors.length > 0 || typeof errors === "string") && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
              {Array.isArray(errors) &&
                errors.map((error, index) => {
                  if (error !== "Invalid email") {
                    return (
                      <span key={index} className="block">
                        {error}
                      </span>
                    );
                  }
                  return null;
                })}
              {typeof errors === "string" && (
                <span className="block">{errors}</span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transform transition-all duration-200 hover:shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="relative my-4">
            <hr className="border-gray-200" />
          </div>
          <div className="mt-5 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
