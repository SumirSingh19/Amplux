import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";
import PHOTO3 from "../assets/images/panel2.jpeg";

const ActiveLEDDIsplay = () => {
    const [activeTab, setActiveTab] = useState('indoor-cabinets');
    const navigate = useNavigate();

    useEffect(() => {
        navigate('indoor-cabinets');
    }, [navigate]);

    return (
        <div className="flex flex-col font-abel">
            {/* Header Section */}
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="w-48">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-10">
                    <span className="rounded-full text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer bg-black text-white">CONTACT</span>
                    <div className="flex rounded-full pr-5 px-3 pt-1 cursor-pointer bg-black">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-10px] mt-1.5 filter invert" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-[-2px] filter invert" />    
                    </div>
                </div>
            </div>

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
