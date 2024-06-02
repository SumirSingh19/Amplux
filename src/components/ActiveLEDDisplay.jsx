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

            {/* Main Content Section */}
            <div className="flex flex-col items-center pt-52">
                <div>
                    <span className="text-9xl">Active LED Displays</span>
                </div>
                <div className="flex gap-8 pt-40">
                    <button className="text-white bg-[#4D4D4D] py-3 px-7 rounded-full text-[0.8rem] uppercase">Specifications</button>
                    <button className="text-white bg-[#4D4D4D] py-3 px-11 rounded-full text-[0.8rem] uppercase">Details</button>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={PHOTO3} className="w-[40rem] pt-8" alt="All-In-One-LED" />
                    </div>
                    <div className="w-6/12 text-justify text-2xl uppercase pt-9">
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
                <div className="flex flex-col mb-10 px-40 w-full mt-20">
                    <div className="text-3xl">
                        <span>Choose Your Model:</span>
                    </div>
                    <div className="flex left-0 pt-10 font-roboto gap-1 w-full border-b border-[#D3D3D3]">
                        <div className={`border border-[#D3D3D3] py-3 px-8 font-medium text-sm ${activeTab === 'indoor-cabinets' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="indoor-cabinets" onClick={() => setActiveTab('indoor-cabinets')}>Indoor Cabinets</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] py-3 px-8 font-medium text-sm ${activeTab === 'outdoor-cabinets' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="outdoor-cabinets" onClick={() => setActiveTab('outdoor-cabinets')}>Outdoor Cabinets</Link>
                        </div>
                    </div>
                </div>

                {/* Route Components */}
                <div className="w-full px-40">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ActiveLEDDIsplay;
