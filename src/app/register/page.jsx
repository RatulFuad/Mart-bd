"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const { createUser, googleLogin, user, setUser } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  // Email/Password register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    try {
      const result = await createUser(email, password);
      // update displayName in Firebase user
      await result.user.updateProfile({ displayName: name });
      setUser(result.user);
      form.reset();
      router.push("/"); // redirect home
    } catch (err) {
      setError(err.message);
    }
  };

  // Google register/login
  const handleGoogle = async () => {
    setError("");
    try {
      const result = await googleLogin();
      setUser(result.user);
      router.push("/"); // redirect home
    } catch (err) {
      setError(err.message);
    }
  };

  // If already logged in → redirect home
  if (user) {
    router.push("/");
    return null;
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl">
        <h2 className="text-3xl font-bold text-center mt-4">Register</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleRegister} className="card-body">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn bg-white text-black border mt-2 flex justify-center items-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-2">
            Already have an account?
            <Link href="/login" className="text-primary">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
