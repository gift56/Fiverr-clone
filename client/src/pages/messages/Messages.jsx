import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../config";
import { messageColumns, messageTableData } from "../../data/data";
import requests from "../../libs/request";
import useAuthStore from "../../stores";
import loader from "../../assets/icons/loader.svg";
import moment from "moment";

const Messages = () => {
  const { authUser } = useAuthStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      Axios.get(`${requests.conversations}`).then((res) => res.data),
  });

  console.log(data);

  const tableActions = data.map((item, i) => ({
    buyer: (
      <p
        className={`py-5 h-full font-semibold ${
          item.active === true ? "bg-slate-100" : ""
        }`}
      >
        {item.buyer}
      </p>
    ),
    lastMessage: (
      <Link
        to={`/messages/${i}`}
        className={`w-full flex items-center justify-start text-darkColor/70 border-x border-white h-full py-5 ${
          item.active === true ? "bg-slate-100" : ""
        }`}
      >
        {item?.lastMessage?.substring(0, 100)}...
      </Link>
    ),
    date: (
      <p
        className={`w-full flex items-center font-semibold text-darkColor/70 justify-start h-full py-5 border-r border-white ${
          item.active === true ? "bg-slate-100" : ""
        }`}
      >
        {moment(item.updatedAt).fromNow()}
      </p>
    ),
    action: (
      <Link
        to={`/messages/${i}`}
        className={`w-full flex items-start justify-start h-full py-3 ${
          item.active === true ? "bg-slate-100" : ""
        }`}
      >
        <button className="bg-primary/80 hover:bg-primary text-white w-fit py-2 px-2 text-sm rounded">
          Mark as Read
        </button>
      </Link>
    ),
  }));

  return (
    <main className="py-40 pb-10">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <h2 className="text-2xl font-bold">Messages</h2>
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              <img src={loader} alt="/" className="w-[40px]" />
            </div>
          ) : error ? (
            <p className="text-2xl text-red-400 font-normal">
              Error : Something went wrong
            </p>
          ) : (
            <>
              {data?.length === 0 ? (
                <div className="flex items-center justify-center mt-5 flex-col w-full">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png"
                    alt="/"
                    className="w-[350px]"
                  />
                  <h2 className="text-4xl text-active font-medium">
                    No Messages!
                  </h2>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="h-[35px]">
                    <tr>
                      {messageColumns &&
                        messageColumns.map((head, i) => (
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
                        <tr key={i} className={`text-sm leading-5 w-full`}>
                          {messageColumns?.map((col, i) => (
                            <td
                              key={i}
                              className="first:text-left text-sm text-darkColor font-medium text-center"
                            >
                              {row[col.field]}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Messages;
