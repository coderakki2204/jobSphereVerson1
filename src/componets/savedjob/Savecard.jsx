import React from "react";

const Savecard = () => {
  return (
    <div className="save-card">
      <div className="m-[20px] flex gap-5">
        <div>
          <img src="" alt="Clogo" />
        </div>
        <div className="save-content">
          <p className="text-[20px] font-semibold">job heading</p>
          <p className="text-1xl font-medium">company name</p>
          <div className="gap-6 flex ">
            <p className="bg-amber-50 text-[12px]">job type</p>
            <p className="bg-amber-50 text-[12px]">stipment</p>
          </div>
        </div>
        <img className=" justify-end-safe" src="" alt="x" />
      </div>
    </div>
  );
};

export default Savecard;
