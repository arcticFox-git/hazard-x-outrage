import React from "react";

const Header = () => {
  return (
    <div className="flex pt-4 flex-col h-24 mx-auto text-center md:text-left md:pl-10 bg-slate-100">
      <h1 className="lg:text-3xl text-xl font-bold text-slate-800">
        Hazard x Outrage
      </h1>

      <p className="lg:text-lg text-md font-semibold text-slate-700">
        A guide to the risk communication framework
      </p>
    </div>
  );
};

export default Header;
