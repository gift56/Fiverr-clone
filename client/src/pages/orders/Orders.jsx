import React from "react";
import { MdMail } from "react-icons/md";
import { ordersColumns, tableData } from "../../data/data";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../config";
import requests from "../../libs/request";
import useAuthStore from "../../stores";
import loader from "../../assets/icons/loader.svg";

const Orders = () => {
  const { authUser } = useAuthStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["ordes"],
    queryFn: () => Axios.get(`${requests.orders}`).then((res) => res.data),
  });

  console.log(data);

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
        className="w-8 h-8 cursor-pointer bg-blue-600 rounded-full flex items-center justify-center text-white"
        onClick={() => alert(item.title)}
      >
        <MdMail size={18} />
      </div>
    ),
  }));

  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <div className="flex items-center justify-between w-full gap-2">
            <h2 className="text-2xl font-bold">Orders</h2>
          </div>
          <table className="w-full">
            <thead className="h-[35px]">
              <tr>
                {ordersColumns &&
                  ordersColumns.map((head, i) => (
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
                    {ordersColumns?.map((col, i) => (
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

export default Orders;
