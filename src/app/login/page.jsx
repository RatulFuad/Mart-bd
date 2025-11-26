"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { toast } from "react-toastify";


export default function LoginPage(){
  const { signIn, googleLogin, user, logOut } = useAuth()
  const [error, setError] = useState("")
  const router = useRouter(); 

  const handleLogin = async (e)=>{
    e.preventDefault()
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    try {
      await signIn(email, password);
          toast.success("Logged In successfully!")

      form.reset();
      router.push("/")
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogle = async () => {
    try {
      await googleLogin()
           toast.success("Logged In successfully!");

      router.push("/")
    } catch (err) {
      setError(err.message);
    }
  }

  const handleLogout = async () =>{
    try {
      await logOut();
     toast.success("Logged Out successfully!")

    } catch (err) {
      console.log(err);
    }
  }

  if (user) {
    return (
      <div className="flex justify-center mt-20">
        <div className="card bg-base-100 w-full max-w-sm shadow-xl p-6 text-center">
          <button onClick={handleLogout} className="btn btn-error mt-4">
            Logout
          </button>
        </div>
      </div>
    )
  }

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
