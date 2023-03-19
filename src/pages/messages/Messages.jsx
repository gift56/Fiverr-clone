import React from "react";
import { messageColumns, messageTableData } from "../../data/data";

const Messages = () => {
  const tableActions = messageTableData.map((item, i) => ({
    buyer: <p>{item.buyer}</p>,
    lastMessage: (
      <p className="w-full flex items-center justify-start">
        {item.lastMessage}
      </p>
    ),
    date: <p className="w-full flex items-center justify-start">{item.date}</p>,
    actions: <button onClick={() => alert(i)}>Mark as Read</button>,
  }));

  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <h2 className="text-2xl font-bold">Messages</h2>
          <table className="w-full">
            <thead className="h-[35px]">
              <tr className="border-b">
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
                  <tr
                    key={i}
                    className={`text-sm leading-5 w-full`}
                  >
                    {messageColumns?.map((col, i) => (
                      <td
                        key={i}
                        className="first:text-left text-sm text-darkColor font-medium text-center py-5"
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
