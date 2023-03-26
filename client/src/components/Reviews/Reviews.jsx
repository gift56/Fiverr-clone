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
        data.map((item, i) => <Review key={i} />)
      )}
    </div>
  );
};

export default Reviews;
