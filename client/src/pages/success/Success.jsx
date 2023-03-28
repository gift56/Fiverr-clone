import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Axios } from "../../config";
import requests from "../../libs/request";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await Axios.put(requests.orders, { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="py-40 pb-10">
      <div className="contain">
        <div className="flex w-full items-center justify-center flex-col">
          <div className="border border-primary max-w-[400px] rounded p-4 flex items-center justify-center flex-col gap-4">
            <span className="text-primary">
              <FiCheckCircle className="w-20 h-20" />
            </span>
            <h2 className="text-center text-xl font-medium text-active">
              Payment successful!😊
            </h2>
            <p className="text-base font-normal text-gray-500 text-center">
              You are being redirected to the orders page. Please do not close
              the page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
