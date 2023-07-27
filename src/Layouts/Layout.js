import React from "react";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import "./sidebar.css"; // Import the CSS file

const Layout = ({ children }) => {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-1 p-4 bg-gray-100" style={{ marginLeft: "2%" }}>
      {children}
    </main>
  </div>
  );
};

export default Layout;
