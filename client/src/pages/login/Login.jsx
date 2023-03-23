import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = ({ show, setShow }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object({
    username: yup.string().required("Required"),
    password: yup
      .string()
      .min(5, "Password must be at least 5 characters long")
      .required("Required"),
  });

  const onSubmit = async (payload, actions) => {
    request(payload);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setShow(false);
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  return (
    <section className="">
      <div className="contain">
        <form className=""></form>
      </div>
    </section>
  );
};

export default Login;
