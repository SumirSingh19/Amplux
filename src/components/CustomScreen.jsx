import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";
import PHOTO16 from "../assets/images/motor16.png";
import PHOTO13 from "../assets/images/motor13.png";
import PHOTO14 from "../assets/images/motor14.png";
import { useState } from "react";

const CustomScreen = () => {
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
                    <div className="flex rounded-full pr-5 px-3 pt-1 cursor-pointer bg-black">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-10px] mt-1.5 filter invert" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-[-2px] filter invert" />    
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="text-8xl text-[#343531] w-3/5 text-center">
                    <span>Custom Projector Solutions</span>
                </div>
                <div className="flex flex-col items-center pt-10 gap-16">
                    <div className="text-2xl uppercase px-56 tracking-wide text-center">
                        <span>
                            At Ampluxe, we deliver tailored projector solutions 
                            to meet the unique needs of our clients. Our custom 
                            projectors offer exceptional performance, superior 
                            image quality, and seamless integration. Whether 
                            enhancing a corporate boardroom, creating an immersive 
                            home theater, or setting up a dynamic event display, Ampluxe 
                            has the expertise to bring your vision to life.
                        </span>
                    </div>
                    <div className="flex gap-5">
                        <img src={PHOTO16} className="w-[15rem] h-[15rem] rounded-3xl" alt="" />
                        <img src={PHOTO13} className="w-[20rem] h-[19rem] rounded-3xl" alt="" />
                        <img src={PHOTO14} className="w-[15rem] h-[15rem] rounded-3xl" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center pt-28 gap-6">
                    <div className="text-5xl">
                        <span>Need Custom Solutions?</span>
                    </div>
                    <div className="text-xl uppercase w-4/5 text-center tracking-wide">
                        <span>
                            Need custom solutions? Contact us today to discuss your unique projector needs and 
                            get a personalized quote!
                        </span>
                    </div>
                    <div className="py-20">
                        <button className="text-white bg-[#292639] py-3 px-16 font-roboto rounded-full text-[0.8rem] uppercase hover:bg-[#4D4D4D] hover:scale-110 transition duration-500">Contact US</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomScreen;