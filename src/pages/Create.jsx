import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaAngleLeft } from "react-icons/fa6";

function Create() {
  const navigate = useNavigate();

  async function createData() {
    const name = formik.values.name;
    const email = formik.values.email;
    const password = formik.values.password;
    const compare = new URLSearchParams();
    compare.append("name", name);
    compare.append("email", email);
    compare.append("password", password);
    const endpoint = "http://localhost:8888/users";
    const response = await fetch(endpoint, {
      method: "POST",
      body: compare,
    });
    const data = await response.json();

    if (data.success) {
      window.alert(data.message);
      navigate("/");
    } else {
      window.alert(data.message);
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: createData,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3, "Input name at least 3 character!")
        .max(12),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
    }),
  });
  const createForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-8">
      <div className="w-full max-w-[400px]">
        <Link to={"/"}>
          <button className="text-black h-16 w-full text-left pl-8 font-semibold flex items-center gap-8">
            <FaAngleLeft />
            Back to main menu
          </button>
        </Link>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8 min-w-[400px]"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="text"
              name="name"
              id="name"
              onChange={createForm}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="email"
              name="email"
              id="email"
              onChange={createForm}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              className="border border-gray-800 outline-none h-12 rounded-xl pl-4"
              type="password"
              name="password"
              id="pass"
              onChange={createForm}
            />
          </div>
          <button
            type="submit"
            className="border outline-none h-12 bg-gray-300 text-white font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
