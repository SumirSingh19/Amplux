import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import ARROW_UP from "../assets/icons/arrow2.png";
import FRAME_1 from "../assets/images/wp_slider_v_001-1-1.webp";
import FRAME_2 from "../assets/images/wp_slider_v_001-1-4.webp";
import FRAME_3 from "../assets/images/wp_slider_v_001-1-7.webp";
import FRAME_4 from "../assets/images/wp_slider_v_001-1-10.webp";
import FRAME_5 from "../assets/images/wp_slider_v_001-1-13.webp";
import FRAME_6 from "../assets/images/wp_slider_v_001-1-16.webp";
import FRAME_7 from "../assets/images/wp_slider_v_001-1-19.webp";
import FRAME_8 from "../assets/images/wp_slider_v_001-1-22.webp";
import FRAME_9 from "../assets/images/wp_slider_v_001-1-25.webp";
import FRAME_10 from "../assets/images/wp_slider_v_001-1-28.webp";
import FRAME_11 from "../assets/images/wp_slider_v_001-1-31.webp";
import FRAME_12 from "../assets/images/wp_slider_v_001-1-34.webp";
import FRAME_13 from "../assets/images/wp_slider_v_001-1-37.webp";
import FRAME_14 from "../assets/images/wp_slider_v_001-1-40.webp";
import FRAME_15 from "../assets/images/wp_slider_v_001-1-43.webp";
import FRAME_16 from "../assets/images/wp_slider_v_001-1-46.webp";
import FRAME_17 from "../assets/images/wp_slider_v_001-1-49.webp";
import FRAME_18 from "../assets/images/wp_slider_v_001-1-52.webp";
import ScrollAnimation from "./ScrollAnimation";

const ScreenSolutions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const frames = [
    FRAME_1, FRAME_2, FRAME_3, FRAME_4, FRAME_5, FRAME_6, FRAME_7,
    FRAME_8, FRAME_9, FRAME_10, FRAME_11, FRAME_12, FRAME_13,
    FRAME_14, FRAME_15, FRAME_16, FRAME_17, FRAME_18,
  ];

  return (
    <div className="flex flex-col pt-24 bg-[#f7f2f2] font-abel">
      <div className="flex text-center flex-col text-5xl font-light" data-aos="zoom-in-up">
        <span>Screen and projector solution</span>
        <span>for every application</span>
      </div>
      <div className="flex items-center justify-center pl-44 pt-10" data-aos="zoom-in-up">
        <div className="flex flex-col mt-36 mr-[-150px] z-10">
          <span className="text-5xl">Screen Solutions</span>
          <span className="text-md pt-1">Check out digital screen solutions</span>
          <button className="flex items-center w-24 justify-between text-xs rounded-full bg-[#B0B0B0] py-1 px-2 p-3 mt-6 hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-[#888686] transition duration-700 group">
            <span className="p-1 pl-2 font-semibold group-hover:text-white">Learn More</span>
            <img src={ARROW_UP} alt="arrow-icon" className="w-4 mt-1 transition duration-300 ease-in-out group-hover:filter group-hover:invert" />
          </button>
        </div>
        <div className="">
          <ScrollAnimation frames={frames} />
        </div>
      </div>
    </div>
  );
};

export default ScreenSolutions;
