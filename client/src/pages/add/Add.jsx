import React, { useReducer, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BsUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../config";
import { options } from "../../data/data";
import requests from "../../libs/request";
import upload from "../../libs/upload";
import { gigReducer, INITIAL_STATE } from "../../reducers/addGigReducer";
import loader from "../../assets/icons/loader.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return Axios.post(requests.gigs, gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
    onError: (error) => {
      store.setRequestLoading(false);
      console.log(error);
      toast.error("Something went wrong", {
        position: "top-right",
        toastId: 1,
      });
    },
  });

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    mutation.mutate(state);
    setTimeout(() => {
      navigate("/myGigs");
      setLoading(false);
    }, 5000);
  };
  return (
    <main className="py-40 pb-20">
      <div className="contain">
        <div className="flex flex-col w-full gap-4 items-start justify-start">
          <h2 className="text-2xl font-bold">Add New Gig</h2>
          <div className="flex items-start justify-between gap-4 w-full md:flex-row flex-col">
            <div className="w-full md:flex-1 flex items-start justify-start flex-col gap-2">
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g I will do something I'm really good at..."
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary`}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.title}
                />
                {/* {errors.title && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.title}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="cat"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Category
                </label>
                <select
                  name="cat"
                  id="cat"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.cat}
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm appearance-none bg-[url(./assets/icons/dropDown.svg)] bg-no-repeat bg-[center_right_1.2rem] cursor-pointer border-gray-300 focus:border-primary`}
                >
                  {options.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.text}
                    </option>
                  ))}
                </select>
                {/* {errors.cat && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.cat}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="cover"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <div className="flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 border-gray-300">
                  {singleFile?.type?.startsWith("image/") ? (
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={URL.createObjectURL(singleFile)}
                        alt={singleFile.name}
                        className="w-[100px] h-[100px] rounded-full border-2 border-primary object-cover"
                      />
                      <label
                        htmlFor="cover"
                        className="cursor-pointer text-sm sm:text-base font-medium"
                      >
                        Change Cover Image
                      </label>
                    </div>
                  ) : (
                    <>
                      <p>Upload Cover Image</p>
                      <BsUpload size={20} />
                      <label
                        htmlFor="cover"
                        className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                      >
                        Browser
                      </label>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="images"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
                {files.length === 0 ? (
                  <div className="flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 border-gray-300">
                    <p>Upload and Image</p>
                    <BsUpload size={20} />
                    <label
                      htmlFor="images"
                      className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                    >
                      Browser
                    </label>
                  </div>
                ) : (
                  <div className="flex items-start  flex-col lg:flex-row justify-start gap-4 w-full">
                    <button
                      onClick={handleUpload}
                      className="w-[150px] border py-2 rounded-md cursor-pointer hover:bg-primary hover:border-primary hover:text-white text-base font-medium transition-all duration-300"
                    >
                      {uploading ? (
                        <div className="flex items-center justify-center">
                          <img src={loader} alt="/" className="w-[30px]" />
                        </div>
                      ) : (
                        "Upload Images"
                      )}
                    </button>
                    {files.length === 0 ? null : (
                      <div className="flex items-center flex-wrap gap-2">
                        {[...files].map((item, i) => (
                          <p
                            key={i}
                            className="truncate w-[120px] text-sm border bg-gray-300 p-2 rounded-3xl"
                          >
                            {item.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="desc"
                  className="text-sm text-darkColor/80 font-medium"
                >
                  Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  cols="30"
                  rows="10"
                  placeholder="Brief description to customers of your service..."
                  className={`w-full border h-[136px] rounded-md text-sm text-gray-600 outline-none resize-none border-gray-300 p-3 focus:border-primary`}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.desc}
                ></textarea>
                {/* {errors.desc && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.desc}
                  </p>
                )} */}
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-primary/80 hover:bg-primary mt-4 text-white text-base font-semibold h-10 rounded transition-all duration-300 outline-none focus:border-primary hidden md:block"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <img src={loader} alt="/" className="w-[30px]" />
                  </div>
                ) : (
                  "Create"
                )}
              </button>
            </div>
            <div className="w-full md:flex-1 flex items-start justify-start flex-col gap-2">
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="shortTitle"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Service Title
                </label>
                <input
                  type="text"
                  name="shortTitle"
                  id="shortTitle"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.shortTitle}
                  placeholder="e.g One page web design..."
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary`}
                />
                {/* {errors.shortTitle && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.shortTitle}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="shortDesc"
                  className="text-darkColor/80 text-sm font-medium"
                >
                  Short Description
                </label>
                <textarea
                  name="shortDesc"
                  id="shortDesc"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.shortDesc}
                  cols="30"
                  rows="10"
                  placeholder="Short Description of your service..."
                  className={`w-full border h-[136px] rounded-md text-sm text-gray-600 outline-none resize-none border-gray-300 p-3 focus:border-primary`}
                ></textarea>
                {/* {errors.shortDesc && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.shortDesc}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="deliveryTime"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Delivery Time (e.g 3 days)
                </label>
                <input
                  type="text"
                  name="deliveryTime"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.deliveryTime}
                  id="deliveryTime"
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary`}
                />
                {/* {errors.deliveryTime && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.deliveryTime}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="revisionNumber"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Revision Number
                </label>
                <input
                  type="text"
                  name="revisionNumber"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.revisionNumber}
                  id="revisionNumber"
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary `}
                />
                {/* {errors.revisionNumber && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.revisionNumber}
                  </p>
                )} */}
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="features"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Add Features
                </label>
                <form
                  className="w-full flex items-center justify-start gap-2"
                  onSubmit={handleFeature}
                >
                  <input
                    type="text"
                    id="features"
                    placeholder="e.g page design"
                    className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="border w-fit h-10 px-4 rounded bg-primary/80 border-primary hover:bg-primary text-white transition-all duration-300 capitalize"
                  >
                    add
                  </button>
                </form>
                <div className="flex flex-wrap gap-3 w-full">
                  {state?.features?.map((f) => (
                    <div
                      className="flex items-center gap-2 justify-start w-fit bg-primary/90 px-2 py-1 rounded-2xl text-white"
                      key={f}
                    >
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_FEATURE", payload: f })
                        }
                        className="flex items-center gap-2 justify-start w-fit lowercase"
                      >
                        {f}
                        <span>
                          <IoCloseCircleOutline />
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.price}
                  className={`border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary`}
                />
                {/* {errors.price && (
                  <p className="text-sm font-medium text-red-500 text-end w-full">
                    {errors.price}
                  </p>
                )} */}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-primary/80 hover:bg-primary mt-4 text-white text-base font-semibold h-10 rounded transition-all duration-300 outline-none focus:border-primary md:hidden"
            >
               {loading ? (
                  <div className="flex items-center justify-center">
                    <img src={loader} alt="/" className="w-[30px]" />
                  </div>
                ) : (
                  "Create"
                )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Add;
