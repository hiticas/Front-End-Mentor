"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <div className="text-5xl cursor-pointer bold">manage</div>
      </Link>
      <div className="flex gap-10">
        <Link href="/pricing">
          <div className="text-3xl cursor-pointer">Pricing</div>
        </Link>
        <Link href="/product">
          <div className="text-3xl">Product</div>
        </Link>
        <Link href="/about">
          <div className="text-3xl">About</div>
        </Link>
      </div>
      <Link href="/product">
        <div className="text-5xl cursor-pointer bold">Get Started</div>
      </Link>
    </div>
  );
};

export default NavBar;
