import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainMenu() {
  const [reveal, setReveal] = useState([]);
  const nav = useNavigate();
  async function getData() {
    const endpoint = "http://localhost:8888/users";
    const response = await fetch(endpoint);
    const data = await response.json();
    const dataUser = data.results;
    setReveal(dataUser);
  }
  useEffect(() => {
    getData();
  }, []);

  async function btnDelete(id) {
    const response = await fetch(`http://localhost:8888/users/${id}`, {
      method: "DELETE",
    });
    getData();
  }

  function toEdit(id) {
    nav("/update/" + id);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-8 min-w-[500px]">
      <div className="w-[490px]">
        <Link to={"/Create"}>
          <button className="bg-gray-300 text-white w-full h-16 font-bold">
            Create New Data
          </button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="border-gray-500 border py-1 px-4">ID</th>
              <th className="border-gray-500 border py-1 px-4">Name</th>
              <th className="border-gray-500 border py-1 px-4">Email</th>
              <th className="border-gray-500 border py-1 px-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {reveal.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border-gray-500 border py-1 px-4">
                    {item.id}
                  </td>
                  <td className="border-gray-500 border py-1 px-4 text-left">
                    {item.name}
                  </td>
                  <td className="border-gray-500 border py-1 px-4 text-left">
                    {item.email}
                  </td>
                  <td className="border-gray-500 border py-1 px-4 flex gap-2">
                    <button
                      onClick={() => toEdit(item.id)}
                      className="bg-gray-300 text-white p-1 min-w-16 rounded-[8px]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => btnDelete(item.id)}
                      className="bg-gray-300 text-white p-1 min-w-16 rounded-[8px]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainMenu;
