import { Outlet } from "react-router-dom";
import SideBar from "../partials/SideBar";
// import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-[#131313] h-screen text-white">
        <SideBar />
        <div className="m-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
