import React from "react";

const Add = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="flex flex-col w-full gap-4 items-start justify-start">
          <h2 className="text-2xl font-bold">Add New Gig</h2>
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex-1 flex items-start justify-start flex-col gap-2">
              <div className="flex flex-col w-full gap-2 items-start justify-start">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
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
