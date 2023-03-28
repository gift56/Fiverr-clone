import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../config";
import { messageColumns } from "../../data/data";
import requests from "../../libs/request";
import useAuthStore from "../../stores";
import loader from "../../assets/icons/loader.svg";
import moment from "moment";

const Messages = () => {
  const { authUser } = useAuthStore();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      Axios.get(`${requests.conversations}`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return Axios.put(`${requests.conversations}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  const tableActions = data?.map((item, i) => ({
    buyer: (
      <p
        className={`md:py-5 h-full text-xs font-semibold w-[90px] md:w-full md:text-sm truncate ${
          (authUser?.isSeller && !item?.readBySeller) ||
          (!authUser.isSeller && !item?.readByBuyer && "!bg-slate-100")
        }`}
      >
        {authUser?.isSeller ? item.buyerId : item.sellerId}
      </p>
    ),
    lastMessage: (
      <Link
        to={`/messages/${item.id}`}
        className={`w-full flex items-center text-xs md:text-sm justify-start text-darkColor/70 border-x border-white h-full py-5 ${
          (authUser?.isSeller && !item?.readBySeller) ||
          (!authUser.isSeller && !item?.readByBuyer && "bg-slate-100")
        }`}
      >
        {item?.lastMessage?.substring(0, 100)}...
      </Link>
    ),
    date: (
      <p
        className={`w-full flex items-center text-xs md:text-sm font-semibold text-darkColor/70 justify-start h-full py-5 border-r border-white ${
          (authUser?.isSeller && !item?.readBySeller) ||
          (!authUser.isSeller && !item?.readByBuyer && "bg-slate-100")
        }`}
      >
        {moment(item.updatedAt).fromNow()}
      </p>
    ),
    action: (
      <Link
        to={`/messages/${i}`}
        className={`w-full flex items-start justify-start h-full py-3 ${
          (authUser?.isSeller && !item?.readBySeller) ||
          (!authUser.isSeller && !item?.readByBuyer && "!bg-slate-100")
        }`}
      >
        {((authUser.isSeller && !item.readBySeller) ||
          (!authUser.isSeller && !item.readByBuyer)) && (
          <button
            className="bg-primary/80 hover:bg-primary text-white w-fit py-2 sm:px-2 rounded md:text-sm text-xs"
            onClick={() => handleRead(item.id)}
          >
            Mark as Read
          </button>
        )}
      </Link>
    ),
  }));

  return (
    <main className="py-40 pb-10">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <h2 className="text-xl md:text-2xl font-bold">Messages</h2>
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
                    className="w-full md:w-[350px]"
                  />
                  <h2 className="text-4xl text-active font-medium">
                    No Messages!
                  </h2>
                </div>
              ) : (
                <table className="w-full overflow-auto">
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
