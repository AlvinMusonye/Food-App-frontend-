import React from "react";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { MdNotes } from "react-icons/md";
import { CiLogout } from "react-icons/ci";


const Nav = () => {
  return (
    <nav className="bg-orange-500 text-white w-1/5 dark:text-dark-default  min-h-screen p-5">
      <div className="flex flex-col gap-6">
   
        <div className="p-3 hover:bg-orange-600 rounded-lg">
          <Link to="/orders" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="public/MARKET.jpeg" className="w-6 h-6" alt="orders" /> */}
            <MdNotes />
            <h3 className="text-lg">Orders</h3>
          </Link>
        </div>

      
        <div className="p-3 hover:bg-orange-600 rounded-lg">
          <Link to="/deliveries" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="public/3D delivery boy on scooter PNG, SVG.jpeg" className="w-6 h-6" alt="deliveries" /> */}
            <MdDeliveryDining />

            <h3 className="text-lg">Deliveries</h3>
          </Link>
        </div>


        <div className="p-3 hover:bg-orange-600 rounded-lg">
          <Link to="/reports" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="/icons/reports.png" className="w-6 h-6" alt="reports" /> */}
            <TbReportSearch />
            <h3 className="text-lg">Reports</h3>
          </Link>
        </div>

    
        <div className="p-3 hover:bg-orange-600 rounded-lg">
          <Link to="/profile" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="/icons/profile.png" className="w-6 h-6" alt="profile" /> */}
            <CgProfile />
            <h3 className="text-lg">Profile</h3>
          </Link>
        </div>

 
        <div className="p-3 hover:bg-orange-600 rounded-lg">
          <Link to="/settings" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="public/Settings icons for free download _ Freepik.jpeg" className="w-6 h-6" alt="settings" /> */}
            <IoMdSettings />
            <h3 className="text-lg">Settings</h3>
          </Link>
        </div>

       
        <div className="p-3 hover:bg-orange-700 rounded-lg mt-10">
          <Link to="/logout" className="flex items-center gap-3 cursor-pointer">
            {/* <img src="public/Icon Box Clipart Vector, Box Logout Icon Vectors, Box Icons, Logout Icons, Login PNG Image For Free Download.jpeg" className="w-6 h-6" alt="logout" /> */}
            <CiLogout />
            <h3 className="text-lg">Logout</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
