import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
});

export const registerSchema = yup.object({
  username: yup.string().required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
  img: yup.string().required("Required"),
  country: yup.string().required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
});

export const addGigSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  cat: yup.string().required("Category is required"),
  desc: yup.string().required("Description is required"),
  shortTitle: yup.string().required("Short Title is required"),
  shortDesc: yup.string().required("Short Description is required"),
  deliveryTime: yup.number().positive().integer().required("Delivery Time is required"),
  revisionNumber: yup.number().positive().integer().required("Revision Number is required"),
  price: yup.number().positive().integer().required("Price is required"),
});
