import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LOGO from "../assets/images/ampluxe.png";
import PHOTO3 from "../assets/images/panel2.png";
import MenuComponent from "./MenuComponent";

const ActiveLEDDIsplay = () => {
    const [activeTab, setActiveTab] = useState('indoor-cabinets');
    const navigate = useNavigate();

    useEffect(() => {
        navigate('indoor-cabinets');
    }, [navigate]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative w-full h-full font-abel">
            <header className="flex justify-between p-4 sm:p-0.5 z-40 fixed top-0 w-full bg-transparent bg-opacity-40 backdrop-blur-xl">
                <div className="w-40 sm:w-20">
                    <Link to={"/"}>
                        <img src={LOGO} alt="Logo" className="w-full" />
                    </Link>
                </div>
                <div className="flex gap-5 h-[4.5rem] sm:h-[2rem] p-4 sm:p-2 sm:gap-2">
                    <div
                        className="flex items-center rounded-full text-base font-roboto font-normal p-6 sm:p-2 py-[0.4rem] sm:py-[0.2rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 sm:mr-1 text-white sm:text-[0.4rem]">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 sm:gap-[0.1rem] ${isMenuOpen ? 'gap-[0.5px] w-2 py-10 sm:w-1 sm:py-2 sm:gap-[0.2px]' : ''}`}>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>

                    <Link to={"/contact"} className='sm:mt-[-0.41rem] py-[0.4rem] sm:py-[0rem]'>
                        <span className="rounded-full text-base px-3 py-2 pb-3 sm:p-1 font-roboto font-normal cursor-pointer bg-black text-white transition duration-300 ease-in-out sm:text-[0.45rem]">CONTACT</span>
                    </Link>
                </div>
            </header>
            
            {/* Main Content Section */}
            <div className={`flex flex-col items-center pt-52 sm:pt-10 ${isMenuOpen ? 'blurred backdrop-blur-md' : ''}`}>
                <div>
                    <span className="text-9xl sm:text-4xl">Active LED Displays</span>
                </div>
                <div className="flex gap-8 pt-40 sm:pt-10">
                    <button className="text-white bg-[#4D4D4D] py-3 sm:py-1.5 px-7 sm:px-4 rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase">Specifications</button>
                    <button className="text-white bg-[#4D4D4D] py-3 sm:py-1.5 px-11 sm:px-4 rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase">Details</button>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={PHOTO3} className="w-[40rem] sm:w-[20rem] pt-8" alt="All-In-One-LED" />
                    </div>
                    <div className="w-6/12 sm:w-11/12 text-justify text-2xl sm:text-sm uppercase pt-9">
                        <span>
                            Introducing our state-of-the-art Active LED Panel Display, engineered to 
                            redefine visual excellence with vibrant colors, remarkable clarity, and 
                            dynamic contrast. This sleek and modern display seamlessly enhances any 
                            environment, prioritizing user comfort with features like low Blue Light 
                            emission and Flicker Free technology.
                        </span>
                    </div>
                </div>

                {/* Tabbed Navigation Section */}
                <div className="flex flex-col mb-10 px-40 sm:px-5 w-full mt-20 sm:mt-10">
                    <div className="text-3xl sm:text-xl">
                        <span>Choose Your Model:</span>
                    </div>
                    <div className="flex left-0 pt-10 sm:pt-5 font-roboto gap-1 w-full border-b border-[#D3D3D3]">
                        <div className={`border border-[#D3D3D3] py-3 sm:py-1 px-8 sm:px-4 font-medium text-sm sm:text-xs ${activeTab === 'indoor-cabinets' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="indoor-cabinets" onClick={() => setActiveTab('indoor-cabinets')}>Indoor Cabinets</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] py-3 sm:py-1 px-8 sm:px-4 font-medium text-sm sm:text-xs ${activeTab === 'outdoor-cabinets' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="outdoor-cabinets" onClick={() => setActiveTab('outdoor-cabinets')}>Outdoor Cabinets</Link>
                        </div>
                    </div>
                </div>

                {/* Route Components */}
                <div className="w-full px-40 sm:px-5">
                    <Outlet />
                </div>
            </div>

            {/* Overlay and Menu Component */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-30">
                    <div className="fixed inset-0 bg-black opacity-70" onClick={toggleMenu}></div>
                    <div className="relative z-50">
                        <MenuComponent />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActiveLEDDIsplay;
