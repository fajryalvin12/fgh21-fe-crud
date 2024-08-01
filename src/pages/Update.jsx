import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-8 ">
      <div className="w-full max-w-[400px]">
        <Link to={"/"}>
          <button className="bg-gray-200 text-white h-16 w-full text-left pl-8 font-semibold">
            Back to main menu
          </button>
        </Link>
      </div>
      <form className="flex flex-col gap-8 min-w-[400px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="password"
              name="pass"
              id="pass"
            />
          </div>
          <button className="border outline-none h-12 bg-gray-300 text-white font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
