import React, { useReducer, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { options } from "../../data/data";
import { gigReducer, INITIAL_STATE } from "../../reducers/addGigReducer";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [] = useReducer(gigReducer, INITIAL_STATE);

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
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="cats"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Category
                </label>
                <select
                  name="cats"
                  id="cats"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm appearance-none bg-[url(./assets/icons/dropDown.svg)] bg-no-repeat bg-[center_right_1.2rem] cursor-pointer border-gray-300 focus:border-primary"
                >
                  {options.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.text}
                    </option>
                  ))}
                </select>
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
                />
                <div className="flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 border-gray-300">
                  <p>Upload Cover Image</p>
                  <BsUpload size={20} />
                  <label
                    htmlFor="cover"
                    className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                  >
                    Browser
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="upload"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  className="hidden"
                  accept="image/*"
                  multiple
                />
                <div className="flex justify-center items-center flex-col gap-3 w-full border h-[136px] rounded-md text-sm text-gray-600 border-gray-300">
                  <p>Upload and Image</p>
                  <BsUpload size={20} />
                  <label
                    htmlFor="upload"
                    className="w-fit border py-2 px-5 rounded-md cursor-pointer"
                  >
                    Browser
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="description"
                  className="text-sm text-darkColor/80 font-medium"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Brief description to customers of your service..."
                  className="w-full border h-[136px] rounded-md text-sm text-gray-600 outline-none resize-none border-gray-300 p-3 focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary/80 hover:bg-primary mt-4 text-white text-base font-semibold h-10 rounded transition-all duration-300 outline-none focus:border-primary hidden md:block"
              >
                Create
              </button>
            </div>
            <div className="w-full md:flex-1 flex items-start justify-start flex-col gap-2">
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Service Title
                </label>
                <input
                  type="text"
                  name="service"
                  id="service"
                  placeholder="e.g One page web design..."
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="short_description"
                  className="text-darkColor/80 text-sm font-medium"
                >
                  Short Description
                </label>
                <textarea
                  name="short_description"
                  id="short_description"
                  cols="30"
                  rows="10"
                  placeholder="Short Description of your service..."
                  className="w-full border h-[136px] rounded-md text-sm text-gray-600 outline-none resize-none border-gray-300 p-3 focus:border-primary"
                ></textarea>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="delivery"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Delivery Time (e.g 3 days)
                </label>
                <input
                  type="text"
                  name="delivery"
                  id="delivery"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="revision"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Revision Number
                </label>
                <input
                  type="number"
                  name="revision"
                  id="revision"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="feature"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Add Features
                </label>
                <input
                  type="text"
                  name="design"
                  id="design"
                  placeholder="e.g page design"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
                <input
                  type="text"
                  name="fileuploading"
                  id="fileuploading"
                  placeholder="e.g file uploading"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  placeholder="e.g setting up a domain"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
                <input
                  type="text"
                  name="hosting"
                  id="hosting"
                  placeholder="e.g hosting"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-darkColor/80"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300 focus:border-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary/80 hover:bg-primary mt-4 text-white text-base font-semibold h-10 rounded transition-all duration-300 outline-none focus:border-primary md:hidden"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Add;
