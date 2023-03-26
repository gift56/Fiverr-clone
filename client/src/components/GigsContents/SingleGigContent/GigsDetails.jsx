import React from "react";
import { BiChevronRight, BiLike, BiDislike } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import Slides from "../../Slides/Slides";
import Avatar from "../../../assets/icons/avatar.jpg";
import useAuthStore from "../../../stores";

const GigsDetails = ({ data }) => {
  const { authUser } = useAuthStore();
  const adsImg = [
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142042620/original/c4c5fd5fabae56ac74960aa47825b6b30bd8a1f3/design-minimalist-unique-business-logo.jpg",
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/202533806/original/1d22ff320f7486c75b23760e9fd074ad18b771e0/create-modern-responsive-html-landing-page.png",
    "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3a211b4709ad773709265d95262c7b37-1648487716/screencapture-ndaya-ci-coming-soon-en-2022-03-28-19_34_55%20(1)/create-modern-responsive-html-landing-page.png",
  ];
  console.log(data);
  return (
    <div className="w-full flex items-start justify-start gap-3 flex-col">
      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm font-medium">
        <span className="text-active">FIVERR </span>
        <span>
          <BiChevronRight />
        </span>
        <span className="text-active capitalize">{data?.cat}</span>
      </div>
      <h1 className="text-3xl font-bold text-darkColor/90 max-w-[790px]">
        {data?.title}
      </h1>
      <div className="flex items-center justify-start gap-3 w-full">
        <div className="flex items-center justify-start gap-3">
          <img
            src={authUser.img || Avatar}
            alt={data?.username}
            className="w-8 h-8 border rounded-full"
          />
          <span>{authUser?.username}</span>
        </div>
        {!isNaN(data?.totalStars / data?.starNumber) && (
          <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold px-4">
            <span>
              <BsStarFill />
            </span>
            <span>{Math.round(data?.totalStars / data?.starNumber)}</span>
          </p>
        )}
      </div>
      <div className="w-full">
        <Slides rowId="4" distance={750}>
          {data.images.map((item, i) => (
            <div
              key={i}
              className="relative inline-block cursor-pointer w-full mx-4 shadow-box"
            >
              <div className="w-full h-full">
                <img src={item} alt={item} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </Slides>
      </div>
      <h2 className="text-xl font-semibold text-gray-500">About This Gig</h2>
      <p className="text-base text-gray-700 max-w-[700px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        facilis tempora, voluptatibus, enim labore vero ea dolorem quam magnam
        numquam deleniti quidem reiciendis nulla beatae nobis quis nesciunt
        neque unde itaque! Delectus nobis aliquam, vel est enim velit minus,
        quidem odio eveniet consequuntur distinctio perferendis atque dolor cum,
        explicabo error! Modi ullam enim, accusamus amet illo officia ab eveniet
        molestiae quas sit. Optio nam aperiam et provident dignissimos vero rem.
      </p>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">
          About The Seller
        </h2>
        <div className="flex items-start justify-start gap-3 w-full">
          <img
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d17126381eb48afcee047939cfc4de7c-1558258572050/9f862fd8-b1e4-4b8f-b857-6984b31e635c.jpg"
            alt=""
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h4 className="text-base font-bold text-darkColor">John doe</h4>
            <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold w-full">
              {[0, 1, 2, 3, 4].map((item, i) => (
                <span>
                  <BsStarFill />
                </span>
              ))}
              5.0
            </p>
            <button className="outline-none text-sm font-medium hover:bg-gray-400 hover:text-white transition-all duration-300 border border-gray-400 w-fit py-2 px-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
        <div className="border w-[83%] p-5 rounded flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-start justify-between gap-4">
            <div className="w-[50%] flex flex-col items-start justify-start gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">From</span>
                <h2 className="text-darkColor font-medium">Somewhere</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Avg. response time
                </span>
                <h2 className="text-darkColor font-medium">1 Hour</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Languages
                </span>
                <h2 className="text-darkColor font-medium">English</h2>
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-start justify-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Member since
                </span>
                <h2 className="text-darkColor font-medium">Mar 2019</h2>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-sm font-normal">
                  Last delivery
                </span>
                <h2 className="text-darkColor font-medium">1 day</h2>
              </div>
            </div>
          </div>
          <p className="text-darkColor text-sm font-medium border-t w-full pt-4 pr-4">
            My name is Abdul Majid Maqsood. Having an experience of more than 4
            years in video editing, I led multiple projects by utilizing my
            skills in various pro-level video editing software. I produce and
            deliver exceptional content in line with clients' unique
            requirements.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <h2 className="text-xl font-semibold text-gray-500">Reviews</h2>
        <div className="w-full flex items-start justify-start flex-col gap-4">
          {[0, 1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              className="w-full flex flex-col gap-4 items-start justify-start border-t last:border-b last:pb-7 pt-7 "
            >
              <div className="flex items-start justify-start gap-4">
                <div className="w-10 h-10 border bg-gray-300 rounded-full flex items-center justify-center text-base text-gray-500 uppercase font-semibold">
                  E
                </div>
                <div className="flex items-start justify-start flex-col gap-4">
                  <div className="flex items-start justify-start gap-1 flex-col">
                    <h2 className="text-darkColor font-bold lowercase">
                      EfeGift222
                    </h2>
                    <div className="flex items-center justify-start gap-2">
                      <img
                        src="http://www.nigerianembassy.co.il/wp-content/uploads/2019/04/flag.jpg"
                        alt="flag"
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="text-sm font-medium text-gray-500">
                        Nigeria
                      </span>
                    </div>
                  </div>
                  <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold">
                    {[0, 1, 2, 3, 4].map((item, i) => (
                      <span key={i}>
                        <BsStarFill />
                      </span>
                    ))}
                    5
                  </p>
                  <p className="font-medium max-w-[660px] text-darkColor">
                    Great job on this very well done on this. very fast and
                    timely with the edits. keep up the great work and will
                    continue to use you in the future.
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <p className="font-semibold text-sm text-gray-900">
                      Helpful?
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                        <span className="text-gray-500">
                          <BiLike />
                        </span>
                        <span>Yes</span>
                      </div>
                      <div className="flex items-center justify-start gap-2 cursor-pointer text-sm font-semibold">
                        <span className="text-gray-500">
                          <BiDislike />
                        </span>
                        <span>No</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GigsDetails;
