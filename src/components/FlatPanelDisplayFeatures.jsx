import COMP5 from "../assets/images/comp5.png";
import COMP6 from "../assets/images/comp6.png";
import COMP7 from "../assets/images/comp7.png";
import COMP8 from "../assets/images/comp8.png";
import COMP9 from "../assets/images/comp9.png";
import COMP10 from "../assets/images/comp10.png";

const FlatPanelDisplayFeatures = () => {

    return (
        <div className="flex flex-col gap-10">
            <div className="pb-20 text-left">
                <span className="text-8xl">Features</span>
            </div>
            <div className="flex flex-col gap-36 pb-40">
                <div className="flex items-center gap-12">
                    <div className="flex flex-col gap-7 w-7/12">
                        <div className="w-5/12">
                            <span className="text-7xl text-[#343531]">Wireless Collaboration</span>
                        </div>
                        <div className=" text-base text-left font-roboto tracking-wider">
                            <span>
                                The ED series includes built-in wireless presentation and collaboration tools, 
                                enabling cable-free and effortless presenting in classrooms or offices.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={COMP5} className="w-[32rem]" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div>
                        <img src={COMP6} className="w-[35rem]" alt="" />
                    </div>
                    <div className="flex flex-col gap-10 w-7/12">
                        <div className="text-7xl flex flex-col text-right pl-40 text-[#343531]">
                            <span>Digital Whiteboard</span>
                        </div>
                        <div className="text-base text-right pl-24 font-roboto">
                            <span>
                                The ED series features 20-point touch interaction and a digital whiteboard for smooth annotation, 
                                highlighting, and screen capture for easy sharing. The panel is protected by 4mm thick, high-quality 
                                toughened glass (4T, Level 7H on the Mohs hardness scale).
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex flex-col gap-6 w-6/12">
                        <div className="text-7xl text-left tracking-wider text-[#343531]">
                            <span>Google Play enabled</span>
                        </div>
                        <div className="flex flex-col gap-2 text-left text-lg font-roboto">
                            <span>
                                Convenient access to any Google Play app enhances flexibility and optimizes 
                                productivity for both work and teaching sessions.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={COMP7} className="w-[32rem] ml-20" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-44">
                    <div>
                        <img src={COMP8} className="w-[34rem]" alt="" />
                    </div>
                    <div className="flex flex-col gap-6 w-7/12">
                        <div className="text-7xl text-right text-[#343531]">
                            <span>4K UHD Resolution and rich connectivity</span>
                        </div>
                        <div className="text-base pl-14 font-roboto text-right pb-3">
                            <span>
                                The ED series offers display sizes of 65", 75", and 86", 
                                featuring 4K Ultra-HD (3,840 x 2,160) resolution for exceptional detail 
                                and breathtaking visuals. With multiple interfaces including USB Type-C, 
                                HDMI, and USB 2.0/3.0, seamless connection to various devices is enabled, 
                                complemented by HEVC decoder support.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-6 w-6/12">
                        <div className="text-7xl text-left text-[#343531]">
                            <span>Backlit D-LED Technology</span>
                        </div>
                        <div className="flex flex-col gap-2 text-base w-11/12 tracking-wider pr-2 text-left font-roboto">
                            <span>
                            The D-LED (IPS panel) with Optical Bonding technology features 
                            backlighting, ensuring brighter images, vibrant colors, enhanced 
                            textures, and exceptionally wide viewing angles (178°/ 178°).
                            This results in remarkably sharp and clear images Additionally, 
                            the PCB is coated to safeguard against damage from 
                            humidity, dust, and other environmental factors.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={COMP9} className="w-[35rem] ml-20" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-36">
                    <div>
                        <img src={COMP10} className="w-[33rem]" alt="" />
                    </div>
                    <div className="flex flex-col gap-6 w-6/12">
                        <div className="text-7xl text-right text-[#343531]">
                            <span>Eye Protection Technology</span>
                        </div>
                        <div className="text-base font-roboto text-right pl-10 pb-3">
                            <span>
                                The ED series prioritizes eye protection by incorporating features like 
                                low Blue Light and Flicker Free technology, ensuring an optimal viewing experience.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FlatPanelDisplayFeatures;






