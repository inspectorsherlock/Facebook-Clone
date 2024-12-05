import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="mt-16">
          {" "}
          {/* Added margin to push Sidebar below Navbar */}
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-gray-800 p-4 mt-16 overflow-y-auto">
          <Feed />
        </main>
      </div>
    </>
  );
};

export default HomePage;
