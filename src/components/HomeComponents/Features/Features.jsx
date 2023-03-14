import { useState, useRef, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const Features = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
            <button>Click me</button>
            <video
              className="rounded-md"
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
