import MADE_IN_INDIA from "../assets/images/ultra-wide.png";
import AMPLUX from "../assets/images/amplux1.png"

const MadeInIndia = () => {
    return (
        <div className="font-abel bg-[#eae8e8] flex flex-col items-center">
            <div className="w-9/12 flex flex-col items-center">
                <img src={MADE_IN_INDIA} alt="made-in-india-logo" className="w-full mt-[-120px]" />
                <img src={AMPLUX} alt="amplux-logo" className="w-28 mt-[-133px]" />
            </div>
            <div>
                <div className="flex flex-col items-center pt-16">
                    <span className="text-5xl pb-5">Proudly Made In India</span>
                </div>
                <div className="w-10/12 text-center pl-44">
                    <span className="text-xl font-roboto text-[#4D4D4D] tracking-wider">Our Screens And projectors Are Locally Produced Thus Supporting The Initiative Of Make In India</span>
                </div>
            </div>
        </div>
    )
};

export default MadeInIndia;