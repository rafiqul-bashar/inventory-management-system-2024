import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 ">{children}</main>
      <footer className="w-full bg-blue-200">Footer</footer>
    </div>
  );
}
