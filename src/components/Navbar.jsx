"use client";
import Link from "next/link"
import React from "react"
import { useAuth } from "@/hooks/useAuth"

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/itemlist">Item List</Link>
            </li>
            <li>
              <Link href="/addproduct">Add Product</Link>
            </li>
            <li>
              <Link href="/manageproduct">Manage Product</Link>
            </li>
          </ul>
        </div>
        <img src="/mart-bd-removebg-preview.png" alt="Logo" className="h-12" />

        <a className="btn btn-ghost text-xl">MART-BD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/itemlist">Item List</Link>
          </li>
          <li>
            <Link href="/addproduct">Add Product</Link>
          </li>
          <li>
            <Link href="/manageproduct">Manage Product</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className=" font-bold px-4 py-1 rounded btn bg-black text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-white  btn bg-black font-bold  px-4 py-1 rounded "
          >
            Login
          </Link>
        )}{" "}
      </div>
    </div>
  );
};

export default Navbar;














