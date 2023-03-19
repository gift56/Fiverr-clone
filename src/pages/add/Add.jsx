import React from "react";
import { BsUpload } from "react-icons/bs";

const Add = () => {
  const options = [
    {
      value: "design",
      text: "Design",
    },
    {
      value: "web",
      text: "Web Development",
    },
    {
      value: "animation",
      text: "Animation",
    },
    {
      value: "music",
      text: "Music",
    },
  ];
  return (
    <main className="py-40">
      <div className="contain">
        <div className="flex flex-col w-full gap-4 items-start justify-start">
          <h2 className="text-2xl font-bold">Add New Gig</h2>
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex-1 flex items-start justify-start flex-col gap-2 ">
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g I will do something I'm really good at..."
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm border-gray-300"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label htmlFor="cats">Category</label>
                <select
                  name="cats"
                  id="cats"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm appearance-none bg-[url(./assets/icons/dropDown.svg)] bg-no-repeat bg-[center_right_1.2rem] cursor-pointer border-gray-300"
                >
                  {options.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label htmlFor="cover" className="text-sm font-medium">
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
                <label htmlFor="upload" className="text-sm font-medium">
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
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  className="w-full border h-[136px] rounded-md text-sm text-gray-600 outline-none resize-none border-gray-300 p-2"
                ></textarea>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Add;
