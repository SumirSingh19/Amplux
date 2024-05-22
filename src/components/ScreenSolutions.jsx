import ARROW_UP from "../assets/icons/arrow2.png";
import SCREEN from "../assets/images/screen1.jpg"

const ScreenSolutions = () => {
    return (
        <div className="flex flex-col p-10 pt-20 bg-[#eae8e8] font-abel">
            <div className="flex text-center flex-col text-4xl font-semibold">
                <span>Screen and projector solution</span>
                <span>for every application</span>
            </div>
            <div className="flex items-center justify-center pl-52 pt-10">
                <div className="flex flex-col mt-36 mr-[-120px]">
                    <span className="text-3xl">Screen Solutions</span>
                    <span className="text-xs pt-1">Check out digital screen solutions</span>
                    <button className="flex w-24 justify-between text-xs rounded-full bg-[#B0B0B0] py-0 px-1 p-2 mt-4">
                        <span className="p-1 pl-2 font-medium">Learn More</span>
                        <img src={ARROW_UP} alt="arrow-icon" className="w-4 mt-1" />
                    </button>
                </div>
                <div className="">
                    <img src={SCREEN} alt="screen-photo" className="w-[48rem] h-[27rem] p-2"/>
                </div>
            </div>
        </div>
    )
};

export default ScreenSolutions;