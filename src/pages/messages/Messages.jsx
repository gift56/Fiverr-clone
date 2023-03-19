import React from "react";
import { Link } from "react-router-dom";
import { messageColumns, messageTableData } from "../../data/data";

const Messages = () => {
  const tableActions = messageTableData.map((item, i) => ({
    buyer: <p className="py-5">{item.buyer}</p>,
    lastMessage: (
      <p className="w-full flex items-center justify-start border-x border-white h-full py-5">
        {item.lastMessage.substring(0, 100)}...
      </p>
    ),
    date: (
      <p className="w-full flex items-center justify-start py-5 border-r border-white">
        {item.date}
      </p>
    ),
    action: (
      <Link
        to={`/messages/${i}`}
        className="w-full flex items-start justify-start"
      >
        <button className="bg-primary/80 hover:bg-primary text-white w-fit py-2 px-2 text-sm rounded">
          Mark as Read
        </button>
      </Link>
    ),
  }));

  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <h2 className="text-2xl font-bold">Messages</h2>
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
        </div>
      </div>
    </main>
  );
};

export default Messages;
