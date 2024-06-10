import COMP1 from "../assets/images/comp1.png";
import COMP2 from "../assets/images/comp2.png";
import COMP3 from "../assets/images/comp3.png";
import COMP4 from "../assets/images/comp4.png";

const FeaturesAllInOneLED = () => {
    return (
        <div className="flex flex-col gap-10 sm:gap-5">
            <div className="pb-20 sm:pb-5">
                <span className="text-8xl sm:text-4xl">Features</span>
            </div>
            <div className="flex flex-col gap-32 sm:gap-20 pb-40 sm:pb-16">
                <div className="flex items-center gap-10 sm:gap-5">
                    <div className="flex flex-col gap-6 sm:gap-4 w-7/12">
                        <div>
                            <span className="text-7xl sm:text-xl text-[#343531] sm:tracking-tighter sm:leading-3">High-level System Reliability and User-friendly Operation</span>
                        </div>
                        <div className=" text-lg sm:text-[0.5rem] font-roboto tracking-wide sm:tracking-tight sm:leading-3">
                            <span>
                                The SMD 3 in 1 LED pixel arrangement used in the All-in-One LED series 
                                produces a solid product. With a minimum brightness uniformity of 98% 
                                and a minimum colour processing depth of 16 bits, it provides a visually 
                                attractive end result.  Because wireless connectivity allows for up to four 
                                simultaneous source displays, it makes operations more user-friendly.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={COMP1} className="w-[32rem] sm:w-[20rem] sm:h-72" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-10 sm:gap-5">
                    <div>
                        <img src={COMP2} className="w-[35rem] sm:w-[18rem] sm:h-52" alt="" />
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-5 w-7/12">
                        <div className="text-7xl sm:text-xl flex flex-col text-right text-[#343531] sm:tracking-tighter sm:leading-4">
                            <span>Full</span>
                            <span>High Definition</span>
                        </div>
                        <div className="text-lg sm:text-[0.5rem] text-right pl-20 sm:pl-1 font-roboto sm:tracking-tight sm:leading-3">
                            <span>
                                Full-HD resolution guarantees an impeccable viewing experience with no detail loss. 
                                The integrated video processing feature allows for screen splitting mode  and seamless  
                                switching. Multiple Scene Modes High gray scale  performance even at low brightness levels.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 sm:gap-5">
                    <div className="flex flex-col gap-6 w-6/12">
                        <div className="text-7xl sm:text-xl sm:tracking-tighter sm:leading-5 tracking-wider text-[#343531]">
                            <span>Integrated All-In-One Audio-visual Design</span>
                        </div>
                        <div className="flex flex-col gap-2 text-lg sm:text-[0.5rem] sm:tracking-tight sm:leading-3 font-roboto">
                            <span>
                                The integrated premium audio system, calibrated by experts and completely 
                                enhanced, offers an all-encompassing immersive sound experience.
                            </span>
                            <span>Advanced Audio System with 90dB Sensitivity</span>
                            <span>2 x 30W Speakers</span>
                            <span>80Hz – 20kHz Frequency Range</span>
                        </div>
                    </div>
                    <div>
                        <img src={COMP3} className="w-[32rem] sm:w-[20rem] sm:h-56 ml-20 sm:ml-1" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-44 sm:gap-6">
                    <div>
                        <img src={COMP4} className="w-[33rem] sm:w-[20rem] sm:h-52" alt="" />
                    </div>
                    <div className="flex flex-col gap-6 w-6/12">
                        <div className="text-7xl sm:text-xl sm:tracking-tighter sm:leading-5 text-right text-[#343531]">
                            <span>Highly Aesthetically Pleasing Design</span>
                        </div>
                        <div className="text-lg sm:text-[0.5rem] sm:tracking-tight sm:leading-3 font-roboto text-right pl-10 sm:pl-1 pb-3">
                            <span>
                                Sleek design featuring an ultra-thin bezel with a smooth, tactile finish
                                Automatic Brightness adjusts to ambient lighting Built-in USB-C for cutting-edge connectivity.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturesAllInOneLED;