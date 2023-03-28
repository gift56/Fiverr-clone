import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../config";
import requests from "../../libs/request";
import useAuthStore from "../../stores";
import { useFormik } from "formik";
import * as yup from "yup";
import loader from "../../assets/icons/loader.svg";

const Message = () => {
  const { id } = useParams();
  const { authUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      Axios.get(`${requests.messages}/${id}`).then((res) => {
        return res.data;
      }),
  });

  const initialValues = {
    conversationId: id,
    desc: "",
  };
  const validationSchema = yup.object({
    desc: yup.string().required("Required"),
  });

  const onSubmit = async (payload, actions) => {
    setLoading(true);
    try {
      const res = await Axios.post(requests.messages, payload);
      setLoading(false);
      actions.resetForm();
      refetch();
      return res.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <main className="py-40 pb-20">
      <div className="contain">
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60 w-full md:w-[80%]">
            <Link to="/messages" className="font-semibold text-darkColor">
              MESSAGES
            </Link>{" "}
            <BiChevronRight size={20} />
            <span>Client</span> <BiChevronRight size={20} />
          </p>
          <div className="w-full md:w-[80%] flex items-start justify-start gap-4 flex-col h-[500px]">
            {isLoading ? (
              <div className="flex items-center justify-center w-full">
                <img src={loader} alt="/" className="w-[40px]" />
              </div>
            ) : error ? (
              <p className="text-2xl text-red-400 font-normal">
                Error : Something went wrong
              </p>
            ) : (
              <>
                {data?.length === 0 ? (
                  <div className="flex items-center justify-center mt-5 flex-col w-full">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                      alt="/"
                      className="w-[350px]"
                    />
                    <h2 className="text-4xl text-active font-medium">
                      Start Making a Conversation!
                    </h2>
                  </div>
                ) : (
                  <div className="h-[500px] overflow-auto border p-4 rounded-md flex flex-col gap-4 w-full">
                    {data.map((item) => (
                      <div
                        key={item._id}
                        className={`flex items-start gap-5 max-w-[600px] ${
                          item.userId === authUser._id
                            ? "self-end !flex-row-reverse"
                            : ""
                        }`}
                      >
                        <img
                          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"
                          alt="sender_img"
                          className="w-10 h-10 object-cover rounded-full border"
                        />
                        <p
                          className={`text-sm p-4 rounded-2xl ${
                            item.userId === authUser._id
                              ? "bg-blue-500 rounded-tr-[0] text-white"
                              : "bg-gray-200 rounded-tl-[0]"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex items-end w-full md:gap-8 flex-col md:flex-row gap-2"
            >
              <textarea
                name="desc"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
                placeholder="Reply a message"
                cols="30"
                rows="10"
                className={`border h-[100px] w-full md:w-[80%] rounded-md resize-none p-2 text-sm font-medium focus:border-primary outline-none ${
                  errors.desc && touched.desc ? "border-red-500" : ""
                }`}
              ></textarea>
              <button
                type="submit"
                className="bg-primary/80 hover:bg-primary text-white w-fit py-3 px-6 text-sm rounded"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <img src={loader} alt="/" className="w-[30px]" />
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Message;
