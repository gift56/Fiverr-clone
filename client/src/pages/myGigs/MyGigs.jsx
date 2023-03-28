import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { columns, tableData } from "../../data/data";
import useAuthStore from "../../stores";

const MyGigs = () => {
  const { authUser } = useAuthStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      Axios.get(`${requests.conversations}`).then((res) => res.data),
  });

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
    title: (
      <p className="w-full flex items-center justify-start">{item.title}</p>
    ),
    price: (
      <p className="w-full flex items-center justify-start">{item.price}</p>
    ),
    orders: (
      <p className="w-full flex items-center justify-start">{item.sales}</p>
    ),
    actions: (
      <div
        className="w-full flex items-center justify-start text-red-500 cursor-pointer"
        onClick={() => alert(item.title)}
      >
        <BsTrash size={16} />
      </div>
    ),
  }));

  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <div className="flex items-center justify-between w-full gap-2">
            <h2 className="text-2xl font-bold">Gigs</h2>
            <Link to="/add">
              <button className="bg-primary/80 py-3 px-2 text-white outline-none rounded-md text-sm hover:bg-primary w-fit transition-all duration-300">
                Add New Gig
              </button>
            </Link>
          </div>
          <table className="w-full">
            <thead className="h-[35px]">
              <tr>
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
                        className="first:text-left text-sm text-darkColor font-medium text-center py-2"
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
