import { Link } from "react-router-dom";
import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/fixed1.png";
import PHOTO2 from "../assets/images/fixed2.png";
import PHOTO3 from "../assets/images/fixed3.png";
import PHOTO4 from "../assets/images/fixed4.png";
import PHOTO5 from "../assets/images/fixed5.png";
import PHOTO6 from "../assets/images/fixed6.png";
import { useState } from "react";
import MenuComponent from "./MenuComponent";

const FixedScreen = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative w-full h-full font-abel">
            <header className="flex justify-between p-4 z-20">
                <div className="w-40">
                    <img src={LOGO} alt="Ampluxe Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-30">
                    <div 
                        className="flex items-center rounded-full text-base font-roboto font-normal p-6 py-[0.4rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 text-white">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 ${isMenuOpen ? 'gap-[0.5px] w-2 py-10' : ''}`}>
                            <span className={`block w-5 h-[0.1rem] bg-white ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 h-[0.1rem] bg-white ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>
                    
                    <Link to={"/contact"} className="rounded-full text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer bg-black text-white transition duration-300 ease-in-out">
                        <span >CONTACT</span>
                    </Link>
                </div>
                <div className={`absolute top-0 left-0 w-full h-full z-20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <MenuComponent />
                </div>
            </header>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-50 z-10' : 'opacity-0 pointer-events-none'}`}></div>
            
            <div className="flex flex-col items-center font-abel gap-48">
                <div className="text-8xl text-[#343531] w-2/5 text-center">
                    <span>Fixed Projector Screens</span>
                </div>
                <div className="flex gap-8 flex-wrap px-24 pb-32">
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO1} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">StyleLine</span>
                            <span className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight">
                                <span className="text-xl font-roboto text-[#FF0000] font-medium">NEW!</span> StyleLine offers an attractive single fixed projection
                                screen model that comes with three standard border options to
                                accommodate individual style preferences.
                            </span>
                            <span className="font-roboto text-[0.6rem] font-[402]">Starting US MSRP: $2064</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO2} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Profile+</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    A lightweight fixed frame screen, Profile+ supports larger sizing
                                    and can be finished with either a borderless option or a thin bezel
                                    trim.
                                </span>
                                <div className="flex flex-col">
                                    <span>Custom size up to:</span>
                                    <span>Flown – 30’ (914 cm) wide, Wall-Mounted – 60’ (18.3 m) wide</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>20.1 feet ( 613 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $2098</span>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO3} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Cineperm</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Cineperm offers the most economical fixed screen, with simple
                                    assembly and a perfectly flat viewing surface for sharper image
                                    quality.
                                </span>
                                <div className="flex flex-col">
                                    <span>Custom size up to:</span>
                                    <span>25’ (762 cm) wide with truss construction</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>21 feet ( 640 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $784</span>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO4} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">ShadowBox Clarion</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Sharper image quality makes the ShadowBox Clarion fixed
                                    projection screen ideal for use in home theaters, offices, and
                                    classrooms.
                                </span>
                                <div className="flex flex-col">
                                    <span>Custom size up to:</span>
                                    <span>16’ (488 cm) wide</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>16.25 feet ( 495 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $1078</span>
                            </div> 
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO5} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Edgeless Clarion</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    No visible frame or border, Edgeless Clarion fixed frame projection
                                    screen offers the appearance of a flat panel.
                                </span>
                                <div className="flex flex-col">
                                    <span>Custom size up to:</span>
                                    <span>16’ (488 cm) wide</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>9.67 feet ( 295 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $1828</span>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO6} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">StageScreen</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    A modular truss frame, StageScreen touts the strongest, most
                                    rigid projection screen on the market with greater flexibility in size
                                    range.
                                </span>
                                <div className="flex flex-col">
                                    <span>Custom size up to:</span>
                                    <span>75’ (22.86 m) wide</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>61.38 feet ( 1871 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $5748</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FixedScreen;
