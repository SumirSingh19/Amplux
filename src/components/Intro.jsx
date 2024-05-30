import { useState } from 'react';
import INTRO_VIDEO from "../assets/videos/2.mp4";
import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";
import MenuComponent from "./MenuComponent";

const Intro = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [videoOpacity, setVideoOpacity] = useState(1); // Initial opacity of the video

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setVideoOpacity(isMenuOpen ? 1 : 0.5); // Adjust video opacity based on menu state
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setVideoOpacity(1); // Reset video opacity when menu is closed
    };

    return (
        <div className="relative w-full h-full font-abel">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="w-40">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-10">
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
                    <span className="rounded-full bg-white text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out">CONTACT</span>
                    <div className="flex rounded-full bg-white pr-5 px-3 pt-1 cursor-pointer transition duration-300 ease-in-out group hover:bg-black">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-10px] mt-1.5 transition duration-300 ease-in-out group-hover:filter group-hover:invert" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-[-2px] transition duration-300 ease-in-out group-hover:filter group-hover:invert" />    
                    </div>
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
