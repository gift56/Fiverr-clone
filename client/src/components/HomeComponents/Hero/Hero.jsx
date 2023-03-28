import React from "react";
import { FiSearch } from "react-icons/fi";
import { buttons } from "../../../data/data";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const initialValues = {
    input: "",
  };
  const validationSchema = yup.object({
    input: yup.string().required("Required"),
  });
  const onSubmit = async (payload, actions) => {
    navigate(`/gigs?search=${payload.input}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <section className="w-full bg-[#1a1b1d] lg:bg-navbg h-screen text-white lg:animate-bganimate bg-no-repeat bg-cover bg-top-4 pt-20">
      <div className="contain flex flex-col items-start justify-center h-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-[120%]">
            Find the perfect <i className="font-light">freelance</i> <br />{" "}
            services for your business
          </h2>
          <div className="flex flex-col lg:flex-row items-center w-full gap-5 lg:w-[650px] bg-white h-[50px] rounded-md focus:border focus:border-primary relative mb-20 lg:mb-0">
            <div className="flex items-center justify-start gap-2 w-full h-full">
              <span className="text-active pl-3">
                <FiSearch size={18} />
              </span>
              <input
                type="text"
                value={values.input}
                onChange={handleChange}
                onBlur={handleBlur}
                name="input"
                placeholder='Try "building mobile app"'
                className="w-full h-full bg-transparent outline-none text-active"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-primary h-full lg:w-[150px] outline-none absolute top-16 lg:relative lg:top-0 rounded-md lg:rounded-[0] lg:rounded-tr-md lg:rounded-br-md w-full"
            >
              Search
            </button>
          </div>
          <div className="flex items-center gap-3 flex-wrap sm:flex-row">
            <span>Popular :</span>
            {buttons.map((item, i) => (
              <button
                key={i}
                className="border outline-none py-1 px-2 rounded-2xl text-sm"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
