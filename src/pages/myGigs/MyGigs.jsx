import React from "react";

const MyGigs = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <div className="flex items-center justify-between w-full gap-2">
            <h2 className="text-2xl font-bold">Gigs</h2>
            <button>Add New Gig</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyGigs;
