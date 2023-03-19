import React from "react";

const Add = () => {
  const options = [];
  return (
    <main className="py-40">
      <div className="contain">
        <div className="flex flex-col w-full gap-4 items-start justify-start">
          <h2 className="text-2xl font-bold">Add New Gig</h2>
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex-1 flex items-start justify-start flex-col gap-2 ">
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g I will do something I'm really good at..."
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm"
                />
              </div>
              <div className="flex flex-col w-full gap-1 items-start justify-start">
                <label htmlFor="cats">Category</label>
                <select
                  name="cats"
                  id="cats"
                  className="border w-full h-10 px-3 rounded-md outline-none text-sm appearance-none bg-[url(./assets/icons/dropDown.svg)] bg-no-repeat bg-[center_right_1.2rem] cursor-pointer"
                ></select>
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
