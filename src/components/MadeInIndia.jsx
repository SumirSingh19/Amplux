import MADE_IN_INDIA from "../assets/images/ultra-wide.png";
import AMPLUX from "../assets/images/amplux1.png"

const MadeInIndia = () => {
    return (
        <div className="font-abel bg-[#f7f2f2] flex flex-col items-center">
            <div className="w-11/12 flex flex-col items-center"
            data-aos="zoom-out-up"
            data-aos-duration="2000">
                <img src={MADE_IN_INDIA} alt="made-in-india-logo" className="w-full mt-[-120px]" />
                <img src={AMPLUX} alt="amplux-logo" className="w-28 mt-[-161px]" />
            </div>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <div className="flex flex-col items-center pt-16">
                    <span className="text-6xl pb-5">Proudly Made In India</span>
                </div>
                <div className="w-10/12 text-center pl-44">
                    <span className="text-xl font-roboto text-[#4D4D4D] tracking-wider">Our Screens And projectors Are Locally Produced Thus Supporting The Initiative Of Make In India</span>
                </div>
            </div>
        </div>
    )
};

export default MadeInIndia;