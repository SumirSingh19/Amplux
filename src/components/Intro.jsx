import { useState } from 'react';
import INTRO_VIDEO from "../assets/videos/2.mp4";
import LOGO from "../assets/images/ampluxe.png";
import MenuComponent from "./MenuComponent";
import { Link } from 'react-router-dom';

const Intro = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [videoOpacity, setVideoOpacity] = useState(1);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setVideoOpacity(isMenuOpen ? 1 : 0.5);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setVideoOpacity(1);
    };

    return (
        <div className="relative w-full h-full font-abel">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4 sm:p-0.5 z-20">
                <div className="w-40 sm:w-20">
                    <Link to={"/"}>
                    <img src={LOGO} alt="Logo" className="w-full" />
                    </Link>
                </div>
                <div className="flex gap-5 h-[4.5rem] sm:h-[2rem] p-4 sm:p-2 sm:gap-2">
                    <div 
                        className="flex items-center rounded-full bg-white text-base font-roboto font-normal p-6 sm:p-2 py-[0.4rem] sm:y-[0.2rem] cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 sm:mr-1 group-hover:text-white sm:text-[0.4rem]">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 sm:gap-[0.1rem] ${isMenuOpen ? 'gap-[0.5px] w-2 py-10 sm:w-1 sm:py-2 sm:gap-[0.2px]' : ''}`}>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-black transition duration-500 ease-in-out group-hover:bg-white ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-black transition duration-500 ease-in-out group-hover:bg-white ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>
                    <Link to={"/contact"} className='sm:mt-[-0.41rem] py-[0.4rem] sm:py-[0rem]'>
                        <span className="rounded-full bg-white text-base px-3 py-2 pb-3 sm:p-1 font-roboto font-normal  cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out sm:text-[0.45rem]">CONTACT</span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-screen sm:h-20" style={{ opacity: videoOpacity }}>
                <video autoPlay muted loop src={INTRO_VIDEO} className="w-full h-full object-cover brightness-150 sm:w-[24.5rem] sm:h-[16rem]"></video>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isMenuOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}>
                <MenuComponent />
            </div>
        </div>
    );
};

export default Intro;
