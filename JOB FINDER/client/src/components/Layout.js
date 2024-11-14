import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import { Header, Footer } from "../components"; // Adjust according to your file structure
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store

const Layout = () => {
  const user = useSelector((state) => state.user); // Access user data from Redux store

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Header with necessary props */}
      <Header
        title="Welcome to Job Finder"
        type={true} // This can be dynamic based on routes or state
        handleClick={() => console.log("Search clicked!")}
        searchQuery=""
        setSearchQuery={() => {}}
        location=""
        setLocation={() => {}}
      />

      {/* Outlet for rendering child routes */}
      <main className="flex-grow">
        <Outlet /> {/* This will render the specific page components based on the route */}
      </main>

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
