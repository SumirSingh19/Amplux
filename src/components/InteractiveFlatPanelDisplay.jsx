import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LOGO from "../assets/images/ampluxe.png";
import PHOTO2 from "../assets/images/panel1.png";

const FlatPanelDisplay = () => {
    const [activeTab, setActiveTab] = useState('features');
    const navigate = useNavigate();

    useEffect(() => {
        navigate('features');
    }, [navigate]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    return (
        <div className="flex flex-col font-abel">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="w-48">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-10">
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
            <div className="flex flex-col items-center pt-52 text-center">
                <div className="px-32">
                    <span className="text-9xl">Interactive Flat Panel display</span>
                </div>
                <div className="flex gap-8 pt-20">
                    <button className="text-white bg-[#4D4D4D] py-3 px-7 rounded-full text-[0.8rem] uppercase">Specifications</button>
                    <button className="text-white bg-[#4D4D4D] py-3 px-11 rounded-full text-[0.8rem] uppercase">Details</button>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <img src={PHOTO2} className="w-[45rem] pt-20" alt="" />
                    </div>
                    <div className="w-6/12 text-center text-2xl uppercase pt-9">
                        <span>
                        The Interactive Flat Panel Display is a 4K-UHD touch display ideal for education and business, 
                        available in 65", 75", and 86" sizes. Wireless Collaboration allows easy screen sharing, 
                        and the digital whiteboard with IR technology provides flawless touch annotation for interactive sessions.
                        </span>
                    </div>
                </div>
                <div className="flex font-roboto mb-20 px-40 w-full">
                    <div className="flex pt-20 left-0 gap-1 w-full border-b border-[#D3D3D3]">
                        <div className={`border border-[#D3D3D3] py-3 px-8 font-medium text-sm ${activeTab === 'features' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="features" onClick={() => setActiveTab('features')}>Features</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] py-3 px-8 font-medium text-sm ${activeTab === 'specifications' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="specifications" onClick={() => setActiveTab('specifications')}>Specifications</Link>
                        </div>
                        <div className={`border border-[#D3D3D3] py-3 px-8 font-medium text-sm ${activeTab === 'downloads' ? 'bg-[#888888] text-white' : 'bg-[#F1F1F1]'}`}>
                            <Link to="downloads" onClick={() => setActiveTab('downloads')}>Downloads</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full px-40">
                    <Outlet />
                </div>
            </div>
        </div>
    )
};

export default FlatPanelDisplay;
