import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ARROW_UP from "../assets/icons/arrow2.png";
import SCREEN from "../assets/images/screen1.jpg"

const ScreenSolutions = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <div className="flex flex-col pt-24 bg-[#eae8e8] font-abel">
            <div className="flex text-center flex-col text-5xl font-light"  data-aos="zoom-in-left">
                <span>Screen and projector solution</span>
                <span>for every application</span>
            </div>
            <div className="flex items-center justify-center pl-44 pt-10"  data-aos="fade-up">
                <div className="flex flex-col mt-36 mr-[-150px]">
                    <span className="text-4xl">Screen Solutions</span>
                    <span className="text-sm pt-1">Check out digital screen solutions</span>
                    <button className="flex w-24 justify-between text-xs rounded-full bg-[#B0B0B0] py-0 px-2 p-3 mt-6 hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-slate-600 duration-[400ms,1000ms] transition-shadow">
                        <span className="p-1 pl-2 font-semibold">Learn More</span>
                        <img src={ARROW_UP} alt="arrow-icon" className="w-4 mt-1" />
                    </button>
                </div>
                <div className="">
                    <img src={SCREEN} alt="screen-photo" className="w-[69rem] h-[42rem] p-2"/>
                </div>
            </div>
        </div>
    )
};

export default ScreenSolutions;