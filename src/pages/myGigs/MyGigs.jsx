import React from "react";
import { BsTrash } from "react-icons/bs";

const MyGigs = () => {
  const tableData = [
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
    },
    {
      img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c8c0b94d835437aaa18685a80831010a-1675613384041/Website%20Developer%20med2.jpeg",
      title: "Mara Andre",
      price: "20",
      sales: "102",
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

  const tableActions = tableData.map((item) => ({
    image: (
      <div className="w-14 h-10">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    title: <p className="w-full bg-red-400">{item.title}</p>,
    price: <p className="w-full">{item.price}</p>,
    actions: (
      <div className="w-full">
        <BsTrash />
      </div>
    ),
  }));

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
          <table className="w-full">
            <thead className="h-[35px]">
              <tr className="border-b">
                {columns &&
                  columns.map((head, i) => (
                    <th
                      key={i}
                      className="text-left text-gray-700 text-sm font-semibold leading-[18px] pb-2"
                    >
                      {head.header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {tableActions &&
                tableActions.map((row, i) => (
                  <tr
                    key={i}
                    className="text-sm leading-5 w-full even:bg-gray-200"
                  >
                    {columns?.map((col, i) => (
                      <td
                        key={i}
                        className="first:text-left text-xs text-darkColor font-medium text-center py-2"
                      >
                        {row[col.field]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MyGigs;
