import React from "react";

const Messages = () => {
  return (
    <main className="py-40">
      <div className="contain">
        <div className="w-full flex flex-col items-start gap-5 justify-start">
          <h2 className="text-2xl font-bold">Messages</h2>
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

export default Messages;
