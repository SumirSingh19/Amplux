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
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4 z-20">
                <div className="w-40">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4">
                    <div 
                        className="flex items-center rounded-full bg-white text-base font-roboto font-normal p-6 py-[0.4rem] cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 group-hover:text-white">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 ${isMenuOpen ? 'gap-[0.5px] w-2 py-10' : ''}`}>
                            <span className={`block w-5 h-[0.1rem] bg-black transition duration-500 ease-in-out group-hover:bg-white ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 h-[0.1rem] bg-black transition duration-500 ease-in-out group-hover:bg-white ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>
                    <Link to={"contact"} className="rounded-full bg-white text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out">
                        <span >CONTACT</span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-screen" style={{ opacity: videoOpacity }}>
                <video autoPlay muted loop src={INTRO_VIDEO} className="w-full h-full object-cover brightness-150"></video>
            </div>
            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isMenuOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}>
                <MenuComponent />
            </div>
        </div>
    );
};

export default Intro;
