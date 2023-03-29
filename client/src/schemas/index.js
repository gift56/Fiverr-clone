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

// export const addGigSchema