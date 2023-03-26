import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Axios } from "../../config";
import requests from "../../libs/request";
import Review from "./Review/Review";
import loader from "../../assets/icons/loader.svg";

const Reviews = ({ gigId }) => {
  //   const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      Axios.get(`${requests}/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="w-full flex items-start justify-start flex-col gap-4">
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
                Ooops! No Reviews
              </h2>
            </div>
          ) : (
            data.map((item, i) => <Review key={item?._id} item={item} />)
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
