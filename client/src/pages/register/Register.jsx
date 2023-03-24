import React, { useState } from "react";
import { useFormik } from "formik";
import CustomizeInput from "../../utils/Input/CustomizeInput";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../../config";
import requests from "../../libs/request";
import { toast } from "react-toastify";
import loader from "../../assets/icons/loader.svg";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  };
  const onSubmit = async (payload, actions) => {
    console.log(payload);
    // setLoading(true);
    // try {
    //   const res = await Axios.post(requests.login, payload);
    //   setAuthUser(res.data);
    //   toast.success("Login Successfully", {
    //     position: "bottom-right",
    //     toastId: 1,
    //     autoClose: 1500,
    //   });
    //   setShow(false);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   if (error?.response?.data) {
    //     toast.error(error?.response?.data, {
    //       position: "bottom-right",
    //       toastId: 1,
    //       autoClose: 1500,
    //     });
    //   } else {
    //     toast.error(error?.response?.message, {
    //       position: "bottom-right",
    //       toastId: 1,
    //       autoClose: 1500,
    //     });
    //   }
    // }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      // validationSchema: registerSchema,
      onSubmit,
    });

  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <div className="py-40">
      <div className="contain">
        <div className="w-[75%] flex items-center justify-center py-10 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-start justify-start gap-8 w-full"
          >
            <div className="flex items-start justify-start flex-col gap-4 flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">Create an Account</h1>
              <CustomizeInput
                showLabel={false}
                htmlFor="username"
                label="Username"
                labelClassName="text-sm font-medium text-darkColor"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("username")}
                id="username"
                placeholder="Johndoe"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              />
              <CustomizeInput
                showLabel={false}
                htmlFor="email"
                label="Email Address"
                labelClassName="text-sm font-medium text-darkColor"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("email")}
                id="email"
                placeholder="Email Address"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              />
            </div>
            <div className="flex items-start justify-start flex-col gap-4 flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">I want to be a seller</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
