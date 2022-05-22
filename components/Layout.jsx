import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <main className="main-container font-poppins">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
