import React from "react";
import HeaderAdmin from "./HeaderAdmin"
import OrderAdmin from "./OrderAdmin"




const Main = () => {
  return (
    <div className="p-6">
      <HeaderAdmin />
      <div className="flex-1">
       <OrderAdmin />
      </div>
     
     
    </div>
  );
};

export default Main;
