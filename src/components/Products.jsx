import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/projector1.webp";
import PHOTO2 from "../assets/images/panel1.jpg";
import PHOTO3 from "../assets/images/panel2.jpeg";
import PHOTO4 from "../assets/images/panel3.png";
import {Link} from "react-router-dom";
import MenuComponent from "./MenuComponent";
import { useState } from "react";

const Products = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="flex flex-col font-abel">
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

            <div className="flex flex-col pt-40 items-center">
                <div className="py-5 pb-16">
                    <span className="text-9xl">Products</span>
                </div>
                <div className="flex gap-5 flex-wrap px-20 py-10 pb-32">
                    <Link to={"/projector-screens"}>
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO1} className="w-[26rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="Projector Screen" />
                        <span className="text-4xl pt-10">Projector Screens</span>
                    </div>
                    </Link>
                    <Link to={"/Flat-Panel-Display"}>
                    <div className="flex flex-col items-center pt-3 cursor-pointer">
                        <img src={PHOTO2} className="w-[30rem] p-1 hover:scale-95 transition duration-700 ease-in-out" alt="Interactive Flat Panel Display" />
                        <span className="text-4xl pt-10">Interactive Flat Panel Display</span>
                    </div>
                    </Link>
                    <Link to={"/All-In-One-LED"}>
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO4} className="w-[26rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="All-In-One LED Series" />
                        <span className="text-4xl pt-14">All-In-One LED Series</span>
                    </div>
                    </Link>
                    <Link to={"/Active-LED-Display"}>
                    <div className="flex flex-col items-center pt-20 cursor-pointer">
                        <img src={PHOTO3} className="w-[24rem] hover:scale-95 transition duration-700 ease-in-out" alt="Active LED Displays" />
                        <span className="text-4xl pt-10">Active LED Displays</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Products;