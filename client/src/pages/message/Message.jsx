import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../config";
import { mesagesData } from "../../data/data";
import requests from "../../libs/request";
import useAuthStore from "../../stores";
import { useFormik } from "formik";
import * as yup from "yup";
import loader from "../../assets/icons/loader.svg";

const Message = () => {
  const { id } = useParams();
  const { authUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const { isLoading, error, data } = useQuery({
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
      const res = await Axios.post(requests.reviews, payload);
      console.log(res.data);
      toast.success("Thanks for your Review!😊", {
        position: "bottom-right",
        toastId: 1,
        autoClose: 1500,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });


  return (
    <main className="py-40 pb-10">
      <div className="contain">
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <p className="flex items-center gap-2 uppercase justify-start text-sm font-medium text-darkColor/60 w-[80%]">
            <Link to="/messages" className="font-semibold text-darkColor">
              MESSAGES
            </Link>{" "}
            <BiChevronRight size={20} />
            <span>John Doe</span> <BiChevronRight size={20} />
          </p>
          <div className="w-[80%] flex items-start justify-start gap-4 flex-col h-[500px]">
            <div className="h-[500px] overflow-auto border p-4 rounded-md flex flex-col gap-4 w-full">
              {mesagesData.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 max-w-[600px] ${
                    item.owner === true ? "self-end flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c51dbf5c160dac9bd067442911e65d16-1626181910196/Miscellaneous_2x.png"
                    alt="sender_img"
                    className="w-10 h-10 object-cover rounded-full border"
                  />
                  <p
                    className={`text-sm p-4 rounded-2xl ${
                      item.owner === true
                        ? "bg-blue-500 rounded-tr-[0] text-white"
                        : "bg-gray-200 rounded-tl-[0]"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis beatae aperiam cupiditate aliquid reprehenderit
                    voluptatem qui asperiores illo atque suscipit odio, alias
                    doloribus repellat voluptates nesciunt distinctio! Tempora
                    labore, voluptate hic repellat ad deserunt alias earum
                    recusandae nulla ullam repellendus.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-end w-full gap-8">
              <textarea
                name="message"
                placeholder="Reply a message"
                cols="30"
                rows="10"
                className="border h-[100px] w-[80%] rounded-md resize-none p-2 text-sm font-medium focus:border-2 focus:border-primary outline-none"
              ></textarea>
              <button className="bg-primary/80 hover:bg-primary text-white w-fit py-2 px-6 text-sm rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Message;
