import { useState, useRef, useEffect } from "react";
import { BsCheckCircle, BsPlayFill } from "react-icons/bs";
import userImg from "../../../assets/images/users.png";

const Features = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="bg-[#f1fdf7] py-10">
      <div className="contain">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1"></div>
          <div className="flex-1">
            <div className="w-full relative" onClick={handleButtonClick}>
              <img src={userImg} alt="features_image" className="w-full" />
              <span className="absolute top-0 w-full h-full flex items-center justify-center text-white">
                <span className="bg-black/50 rounded-full flex items-center w-[60px] h-[60px] justify-center cursor-pointer">
                  <BsPlayFill size={59} />
                </span>
              </span>
            </div>
            {showVideo && (
              <div ref={videoRef}>
                <video
                  className="rounded-md"
                  src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                  controls
                ></video>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
