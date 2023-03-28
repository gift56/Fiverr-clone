import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51LIEZEEgKFzxI7hMskyqQ92QcR3lkudfQogZ0KEup9o1bwrrGWLV41YGnM47MaM3fZwM8t7ELt4Evd5JOI5CCCv300hzK3oQrb"
);

const Pay = () => {
  const { id } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  return <div>Pay</div>;
};

export default Pay;
