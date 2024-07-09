import React from "react";
import { VscAccount } from "react-icons/vsc";


const Back = () => {
  return (
    <>
      <div className="text-zinc-500 text-9xl fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        Docs.
      </div>
      
      <div className="w-full text-2xl relative py-5 flex justify-center  bg-zinc-500">
        <h1 className=" text-slate-200 ">Documents</h1>
        <div className="absolute right-5 text-slate-200">
        <VscAccount/>

        </div>
      </div>
    </>
  );
};

export default Back;
