import PHOTO1 from "../assets/images/projector1.webp";
import PHOTO2 from "../assets/images/panel1.jpg";
import PHOTO3 from "../assets/images/panel2.webp";
import PHOTO4 from "../assets/images/screen2.webp";

const ScreenCarousel = () => {
    return (
        <div className="bg-[#eae8e8] flex flex-col font-abel items-center py-32">
            <div className="text-center flex flex-col items-center pl-3">
                <div className="w-10/12 pb-5">
                    <span className="text-6xl">Transfrom Any Space Into Immersive Theater</span>
                </div>
                <div className="w-7/12 font-light text-center pb-10">
                    <span className="text-xl font-roboto text-[#4D4D4D]">
                        Amplux Is A Leading Technology Company Providing State-Of-The-Art
                        Digital Screens, Projectors, And Displays For Businesses Of All Sizes.
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-8">
                    <div className="bg-white w-4/12 flex flex-col items-center pb-3">
                        <div>
                            <img src={PHOTO2} alt="" className="w-[20rem]" />
                        </div>
                        <div className="p-3">
                            <div  >
                                <span className="text-2xl">Interactive Flat Panel Dispay</span>
                            </div>
                            <div>
                                <span className="text-sm">
                                    Versatile Projector Screens, Available In Both Motorized And Fixed Options, 
                                    Enhancing Your Viewing Experience Across All Inch Categories: 65, 75, 86, And 98-Inch.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-4/12 flex flex-col items-center pb-3">
                        <div className="">
                            <img src={PHOTO1} alt="" className="w-[19rem] pt-1"/>
                        </div>
                        <div className="p-3 pt-6">
                            <div>
                                <span className="text-2xl">Projector Screens</span>
                            </div>
                            <div>
                                <span className="text-sm">
                                    Versatile Projector Screens, Available In Both Motorized And Fixed Options, 
                                    Enhancing Your Viewing Experience.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-8">
                    <div className="bg-white w-4/12 flex flex-col items-center pb-3">
                        <div>
                            <img src={PHOTO3} alt="" className="w-[20rem]" />
                        </div>
                        <div className="p-3">
                            <div  >
                                <span className="text-2xl">Active LED Displays</span>
                            </div>
                            <div>
                                <span className="text-sm">
                                    Cutting Edge Indoor And Outdoor LED Cabinets, Available In Various Pixel Pitches (P1.5, P2.5, P3.9, P6, P8, P10).
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-4/12 flex flex-col items-center pb-3">
                        <div className="">
                            <img src={PHOTO4} alt="" className="w-[19rem] pt-1"/>
                        </div>
                        <div className="p-3 pt-6">
                            <div>
                                <span className="text-2xl">All-In-One-LED Series</span>
                            </div>
                            <div>
                                <span className="text-sm">
                                    Seamless LED Screens Ranging From 120 To 165 Inches, Delivering Immersive Visuals For Any Sp
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ScreenCarousel;