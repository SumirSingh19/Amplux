import ARROW_UP from "../assets/icons/arrow2.png";
import PHOTO1 from "../assets/images/GWX.jpg";
import PHOTO2 from "../assets/images/Shared-Team.png";
import PHOTO3 from "../assets/images/custom-1.png";
import PHOTO4 from "../assets/images/earthflow.jpg";
import PHOTO5 from "../assets/images/gradient.jpg";


const Featured = () => {
    return (
        <div className="flex flex-col bg-[#eae8e8] pl-64 font-abel pb-10">
            <div className="pb-20">
                <span className="text-4xl font-light">Why choose us?</span>
            </div>
            <div className="flex flex-wrap gap-7 font-abel">
                <div className="w-3/12 bg-white p-6 pb-10" >
                    <div className="pt-5">
                        <span className="text-3xl">Full-Service Solutions</span>
                    </div>
                    <div className="leading-3 pt-5">
                        <span className="text-xs">We handle every aspect of your project, streamlining the process and ensuring seamless execution from start to finish.</span>
                        <button className="flex w-20 h-4 justify-around text-xs rounded-full bg-[#B0B0B0] py-0 mt-8 mb-5">
                            <span className=" pl-2 font-medium text-[0.6rem]">Learn More</span>
                            <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                        </button>
                        <img src={PHOTO1} alt="" className="h-36 w-[23rem] rounded-lg" />
                    </div>
                </div>
                <div className="w-3/12 bg-white p-6 pb-10">
                    <div className="pb-4">
                        <span className="text-3xl">Expert Design Team</span>
                    </div>
                    <div className="leading-3 pt-5">
                        <span className="text-xs">Our large, design team is dedicated to creating visually stunning and technologically advanced solutions that elevate your space.</span>
                        <button className="flex w-20 h-4 justify-around text-xs rounded-full bg-[#B0B0B0] py-0 mt-8 mb-5">
                            <span className=" pl-2 font-medium text-[0.6rem]">Learn More</span>
                            <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                        </button>
                        <img src={PHOTO2} alt="" className="h-36 w-[23rem] rounded-lg" />
                    </div>
                </div>
                <div className="w-3/12 bg-white p-6 pb-10">
                    <div className="pb-2">
                        <span className="text-3xl">Custom Solutions</span>
                    </div>
                    <div className="leading-3 pt-5">
                        <span className="text-xs">Discovered tailored screen solutions designed to meet your unique needs, crafted with precision and innovation. Let us tranform your vision into reality with our bespoke screen services.</span>
                        <button className="flex w-20 h-4 justify-around text-xs rounded-full bg-[#B0B0B0] py-0 mt-8 mb-5">
                            <span className=" pl-2 font-medium text-[0.6rem]">Learn More</span>
                            <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                        </button>
                        <img src={PHOTO3} alt="" className="h-36 w-[23rem] rounded-lg" />
                    </div>
                    
                </div>
                <div className="w-3/12 bg-white p-6 pb-10">
                    <div className="pb-2">
                        <span className="text-3xl">Global Reach</span>
                    </div>
                    <div className="leading-3 pt-5">
                        <span className="text-xs">With our global installation capabilities, we can deliver exhibit projects anywhere in the world, providing you with the same exceptional service and quality, no matter where you are.</span>
                        <button className="flex w-20 h-4 justify-around text-xs rounded-full bg-[#B0B0B0] py-0 mt-8 mb-5">
                            <span className=" pl-2 font-medium text-[0.6rem]">Learn More</span>
                            <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                        </button>
                        <img src={PHOTO4} alt="" className="h-36 w-[23rem] rounded-lg" />
                    </div>
                    
                </div>
                <div className="w-3/12 bg-white p-6 pb-10">
                    <div className="pb-2">
                        <span className="text-3xl tracking-tight">Highest Quality Materials</span>
                    </div>
                    <div className="leading-3 pt-5">
                        <span className="text-xs">We can use only the highest quality materials, ensuring durability, reliability, and superior performance in all our products.</span>
                        <button className="flex w-20 h-4 justify-around text-xs rounded-full bg-[#B0B0B0] py-0 mt-8 mb-5">
                            <span className=" pl-2 font-medium text-[0.6rem]">Learn More</span>
                            <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                        </button>
                        <img src={PHOTO5} alt="" className="h-36 w-[23rem] rounded-lg" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Featured;