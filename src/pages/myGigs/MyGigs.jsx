import React from "react";

const MyGigs = () => {
  const tableData = [
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      orders: "102",
    },
  ];

  const columns = [
    {
      field: "image",
      header: "Image",
    },
    {
      field: "title",
      header: "Title",
    },
    {
      field: "price",
      header: "Price",
    },
    {
      field: "orders",
      header: "Orders",
    },
    {
      field: "actions",
      header: "Actions",
    },
  ];

  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <div className="flex items-center justify-between w-full gap-2">
            <h2 className="text-2xl font-bold">Gigs</h2>
            <button className="bg-primary/80 py-3 px-2 text-white outline-none rounded-md text-sm hover:bg-primary w-fit transition-all duration-300">
              Add New Gig
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyGigs;
