import { Link } from "react-router-dom";
import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/projector1.webp";
import { useState } from "react";

const ProjectorScreen = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative w-full h-full font-abel">
            <div className="flex justify-between p-4 z-20">
                <div className="w-40">
                    <img src={LOGO} alt="Ampluxe Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-20">
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
                    <span className="rounded-full text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer bg-black text-white">CONTACT</span>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col items-center pt-32">
                <div>
                    <span className="text-9xl">Projector Screens</span>
                </div>
                <div className="flex gap-8 pt-40">
                    <button className="text-white bg-[#4D4D4D] py-3 px-7 rounded-full text-[0.8rem] uppercase">Specifications</button>
                    <button className="text-white bg-[#4D4D4D] py-3 px-11 rounded-full text-[0.8rem] uppercase">Details</button>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={PHOTO1} className="w-[40rem] pt-8" alt="All-In-One-LED" />
                    </div>
                    <div className="w-6/12 text-2xl tracking-tight text-center uppercase pt-9">
                        <span>
                            Elevate your presentations with our premium projector screens 
                            designed to deliver impeccable image clarity and brightness, 
                            ensuring your message captivates your audience with every projection.
                        </span>
                    </div>
                </div>

                {/* Tabbed Navigation Section */}
                <div className="flex flex-col mb-10 px-40 w-full mt-20">
                    <div className="text-3xl">
                        <span>Choose Your Mountiing Method:</span>
                    </div>
                    <div className="flex left-0 pt-10 font-roboto gap-2 w-full">
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 px-8 font-medium text-sm bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            <Link to="/motorized-screens">Motorized</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 px-8 font-medium text-sm bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            <Link to="/fixed-screens">Fixed</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 px-8 font-medium text-sm bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            <Link to="/custom-screens">Custom</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectorScreen;
