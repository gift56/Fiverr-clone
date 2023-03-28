import useAuthStore from "../../stores";

const { authUser } = useAuthStore();

export const INITIAL_STATE = {
  userId: authUser?._id,
  title: "",
  cat: "",
  cover: "",
  images: [],
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  revisionNumber: 0,
  features: [],
  price: 0,
};
