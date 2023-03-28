import React, { useState } from "react";
import { useFormik } from "formik";
import CustomizeInput from "../../utils/Input/CustomizeInput";
import CustomizeTextArea from "../../utils/Input/CustomizeTextarea";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../config";
import requests from "../../libs/request";
import { toast } from "react-toastify";
import loader from "../../assets/icons/loader.svg";
import { BsUpload } from "react-icons/bs";
import { registerSchema } from "../../schemas";
import upload from "../../libs/upload";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    phone: "",
    img: null,
    country: "",
    isSeller: false,
    desc: "",
  };
  const onSubmit = async (payload, actions) => {
    setLoading(true);
    const url = await upload(values.img);
    try {
      const res = await Axios.post(requests.register, {
        ...payload,
        img: url,
      });
      toast.success(res?.data, {
        position: "bottom-right",
        toastId: 1,
        autoClose: 1500,
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error?.response?.data) {
        toast.error(error?.response?.data, {
          position: "bottom-right",
          toastId: 1,
          autoClose: 1500,
        });
      } else {
        toast.error(error?.response?.message, {
          position: "bottom-right",
          toastId: 1,
          autoClose: 1500,
        });
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  function handleImageChange(event) {
    const file = event.currentTarget.files[0];
    if (file && !file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      setFieldValue("img", null);
      return;
    }
    setFieldValue("img", file);
  }

  return (
    <div className="py-24 lg:py-40 pb-10">
      <div className="contain">
        <div className="w-full lg:w-[75%] flex items-center flex-col sm:flex-row justify-center py-10 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-start flex-col sm:flex-row justify-start gap-8 w-full"
          >
            <div className="flex items-start justify-start flex-col gap-4 w-full sm:flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">
                Create an Account
              </h1>
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
              <CustomizeInput
                showLabel={false}
                htmlFor="password"
                label="Password"
                labelClassName="text-sm font-medium text-darkColor"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("password")}
                id="password"
                placeholder="********"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              />
              <div className="w-full">
                <CustomizeInput
                  showLabel={false}
                  htmlFor="img"
                  label="Profile Picture"
                  labelClassName="text-sm font-medium text-darkColor"
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="img"
                  className="hidden"
                />
                <div
                  className={`flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 ${
                    touched.img && errors.img
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {values?.img?.type?.startsWith("image/") ? (
                    <label
                      htmlFor="img"
                      className="cursor-pointer h-full w-full flex items-center justify-center"
                    >
                      <img
                        src={URL.createObjectURL(values.img)}
                        alt={values.img.name}
                        className="w-[120px] h-[120px] rounded-full object-cover"
                      />
                    </label>
                  ) : (
                    <>
                      <p>Upload Cover Image</p>
                      <BsUpload size={20} />
                      <label
                        htmlFor="img"
                        className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                      >
                        Browser
                      </label>
                    </>
                  )}
                </div>
              </div>
              <CustomizeInput
                showLabel={false}
                htmlFor="country"
                label="country"
                labelClassName="text-sm font-medium text-darkColor"
                type="text"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("country")}
                id="country"
                placeholder="e.g Nigeria"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full bg-primary/80 hover:bg-primary cursor-pointer outline-none text-white rounded py-3 transition-all duration-300 mt-4 hidden sm:block"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <img src={loader} alt="/" className="w-[40px]" />
                  </div>
                ) : (
                  <p className="flex items-center justify-center gap-2">
                    Register
                  </p>
                )}
              </button>
            </div>
            <div className="flex items-start justify-start flex-col gap-4 w-full sm:flex-1">
              <h1 className="text-2xl text-darkColor font-semibold">
                I want to be a seller
              </h1>
              <div className="w-full mt-8">
                <label className="flex items-center justify-start w-full relative gap-4">
                  <span className="text-[#5D6771] text-[15px] leading-5 font-medium flex items-center justify-center select-none">
                    Activate the seller account
                  </span>
                  <span className="flex items-center justify-center select-none action">
                    <input
                      type="checkbox"
                      className="appearance-none"
                      value={values.isSeller}
                      onChange={handleChange}
                      name="isSeller"
                    />
                    <i className="bg-[#c5c7c9] relative w-11 h-6 rounded-xl transition-all duration-200 before:content-[''] before:absolute before:top-[2px] before:left-[2.8px] before:w-5 before:h-5 before:bg-white before:rounded-full before:shadow-newLongShadow before:transition-all before:duration-300 cursor-pointer"></i>
                  </span>
                </label>
              </div>
              <CustomizeInput
                showLabel={false}
                containerClass="my-2"
                htmlFor="phone"
                label="Phone Number"
                labelClassName="text-sm font-medium text-darkColor"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                id="phone"
                placeholder="phone"
                className="bg-white  border border-[#C7CBD1] w-full h-[40px] rounded px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm"
              />
              <CustomizeTextArea
                rows={9}
                showLabel={false}
                htmlFor="desc"
                label="Bio"
                labelClassName="text-sm font-medium text-darkColor"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
                id="desc"
                name="desc"
                placeholder="A short description of yourself"
                className="bg-white border border-[#E6E6E6] w-full h-[107px] rounded p-4 focus:border-[1.5px] outline-none text-sm text-[#454B54] resize-none shadow-smallShadow"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary/80 hover:bg-primary cursor-pointer outline-none text-white rounded py-3 transition-all duration-300 mt-4 sm:hidden"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <img src={loader} alt="/" className="w-[40px]" />
                </div>
              ) : (
                <p className="flex items-center justify-center gap-2">
                  Register
                </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
