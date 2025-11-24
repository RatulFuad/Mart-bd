"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation"; // next/navigation ব্যবহার

export default function LoginPage() {
  const { signIn, googleLogin, user, logOut } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter(); // 🔑 router

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      form.reset();
      router.push("/"); // 🔑 login successful → redirect to home
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      router.push("/"); // 🔑 Google login → redirect to home
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  // যদি user login থাকে → Logout button দেখাবে
  if (user) {
    return (
      <div className="flex justify-center mt-20">
        <div className="card bg-base-100 w-full max-w-sm shadow-xl p-6 text-center">
          {/* <h2 className="text-3xl font-bold">Welcome, {user.email}</h2> */}
          <button onClick={handleLogout} className="btn btn-error mt-4">
            Logout
          </button>
        </div>
      </div>
    );
  }

  // যদি user login না থাকে → login form দেখাবে
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl">
        <h2 className="text-3xl font-bold text-center mt-4">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="card-body">
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          <button type="button" onClick={handleGoogle} className="btn mt-2">
            Login with Google
          </button>

          <p className="text-center mt-2">
            Dont have an account?
            <Link href="/register" className="text-primary">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
