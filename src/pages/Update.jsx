import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const [data, setData] = useState({});
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:8888/users/" + id.id);
      setData(data.data.results);
      setEditName(data.data.results.name);
      setEditEmail(data.data.results.email);
      setEditPassword(data.data.results.password);
    })();
  }, []);

  async function custom(e) {
    e.preventDefault();
    await axios.patch("http://localhost:8888/users/" + id.id, {
      name: editName,
      email: editEmail,
      password: editPassword,
    });
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-8 ">
      <div className="w-full max-w-[400px]">
        <Link to={"/"}>
          <button className="bg-gray-200 text-white h-16 w-full text-left pl-8 font-semibold">
            Back to main menu
          </button>
        </Link>
      </div>
      <form onSubmit={custom} className="flex flex-col gap-8 min-w-[400px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="text"
              name="name"
              id="name"
              defaultValue={data.name}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="email"
              name="email"
              id="email"
              defaultValue={data.email}
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="password"
              name="pass"
              id="pass"
              defaultValue={data.password}
              onChange={(e) => setEditPassword(e.target.value)}
            />
          </div>
          <button className="border outline-none h-12 bg-gray-300 text-white font-bold">
            Change Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
