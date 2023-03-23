import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <section className="">
      <div className="contain">
        <form className=""></form>
      </div>
    </section>
  );
};

export default Login;
