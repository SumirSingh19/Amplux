import { Link } from "react-router-dom";
import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/projector1.webp";
import { useState } from "react";
import MenuComponent from "./MenuComponent";

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
            <header className="flex justify-between p-4 sm:p-0.5 z-20">
                <div className="w-40 sm:w-20">
                    <img src={LOGO} alt="Ampluxe Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] sm:h-[2rem] p-4 sm:p-2 sm:gap-2 z-30">
                <div 
                        className="flex items-center rounded-full  text-base font-roboto font-normal p-6 sm:p-2 py-[0.4rem] sm:y-[0.2rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 sm:mr-1 text-white sm:text-[0.4rem]">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 sm:gap-[0.1rem] ${isMenuOpen ? 'gap-[0.5px] w-2 py-10 sm:w-1 sm:py-2 sm:gap-[0.2px]' : ''}`}>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>
                    
                    <Link to={"contact"} className='sm:mt-[-0.41rem] py-[0.4rem] sm:py-[0rem]'>
                        <span className="rounded-full text-base px-3 py-2 pb-3 sm:p-1 font-roboto font-normal  cursor-pointer bg-black text-white transition duration-300 ease-in-out sm:text-[0.45rem]">CONTACT</span>
                    </Link>
                </div>
                <div className={`absolute top-0 left-0 w-full h-full z-20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <MenuComponent />
                </div>
            </header>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'}`}></div>

            {/* Main Content Section */}
            <div className="flex flex-col items-center pt-32 sm:pt-12">
                <div>
                    <span className="text-9xl sm:text-4xl">Projector Screens</span>
                </div>
                <div className="flex gap-8 sm:gap-4 pt-40 sm:pt-16">
                    <button className="text-white bg-[#4D4D4D] py-3 sm:py-1.5 px-7 sm:px-4 rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase">Specifications</button>
                    <button className="text-white bg-[#4D4D4D] py-3 sm:py-1.5 px-11 sm:px-4 rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase">Details</button>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={PHOTO1} className="w-[40rem] sm:w-[16rem] pt-8" alt="All-In-One-LED" />
                    </div>
                    <div className="w-6/12 sm:w-11/12 text-2xl sm:text-sm tracking-tight text-center uppercase pt-9">
                        <span>
                            Elevate your presentations with our premium projector screens 
                            designed to deliver impeccable image clarity and brightness, 
                            ensuring your message captivates your audience with every projection.
                        </span>
                    </div>
                </div>

                {/* Tabbed Navigation Section */}
                <div className="flex flex-col mb-10 px-40 sm:px-5 w-full mt-20">
                    <div className="text-3xl sm:text-lg">
                        <span>Choose Your Mountiing Method:</span>
                    </div>
                    <div className="flex left-0 pt-10 sm:pt-5 font-roboto gap-2 w-full">
                        <Link to="/motorized-screens">
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 sm:py-2 px-8 sm:px-5 font-medium text-sm sm:text-xs bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            Motorized
                        </div>
                        </Link>

                        <Link to="/fixed-screens">
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 sm:py-2 px-8 sm:px-5 font-medium text-sm sm:text-xs bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            Fixed
                        </div>
                        </Link>

                        <Link to="/custom-screens">
                        <div className={`border border-[#D3D3D3] rounded-lg py-3 sm:py-2 px-8 sm:px-5 font-medium text-sm sm:text-xs bg-[#F1F1F1] hover:bg-[#888888] hover:text-white transition duration-500`}>
                            Custom
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectorScreen;
