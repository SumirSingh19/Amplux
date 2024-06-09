import LOGO from "../assets/images/ampluxe.png";
import INTRO_VIDEO from "../assets/videos/2.mp4";
import PHOTO1 from "../assets/images/about1.png";
import PHOTO2 from "../assets/images/about2.png";
import PHOTO3 from "../assets/images/about3.png";
import { useState } from "react";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";


const AboutPage = () => {
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
            <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-50 z-10' : 'opacity-0 pointer-events-none'}`}></div>

            {/* Main Content */}
            <main className={`flex flex-col items-center pt-20 sm:pt-10 transition-opacity duration-500 ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
                <div className="text-9xl sm:text-5xl uppercase">
                    <h1>About Us</h1>
                </div>
                <div className="px-20 sm:px-5 py-20 sm:py-5"> 
                {/* replace this video tag with the animation stuff but make sure to render frames over the screen */}
                    <video autoPlay muted loop src={INTRO_VIDEO} className="brightness-200 rounded-3xl"></video>
                </div>
                <section className="flex flex-col items-center text-center pt-10">
                    <div className="text-5xl sm:text-xl sm:leading-5 flex flex-col gap-1 tracking-wide">
                        <h2>Innovative Projectors And Screens</h2>
                        <p>Crafted For Exceptional Visual Experiences.</p>
                    </div>
                    <div className="flex flex-col pt-10 sm:pt-4 text-lg sm:text-[0.47rem] sm:leading-3 items-center text-[#343531]">
                        <p>At Ampluxe, we specialize in high-quality projectors and screens that elevate your visual experiences.</p>
                        <div className="w-3/5">
                            <p>We provide cutting-edge technology and superior craftsmanship. Trust Ampluxe to deliver exceptional products tailored to meet your projection needs.</p>
                        </div>
                    </div>
                </section>
                <section className="flex sm:flex-col gap-5 sm:gap-8 py-10 sm:py-5 px-10 sm:px-4 sm:pt-9 w-full mb-10">
                    <div className="w-1/3 sm:w-full sm:px-5">
                        <div>
                            <img src={PHOTO1} className="w-full h-[14rem] sm:h-[10rem]" alt="Innovation" />
                        </div>
                        <div className="flex flex-col pt-5 sm:pt-2 px-2 gap-4 sm:px-0">
                            <span className="text-2xl sm:text-base">01</span>
                            <h3 className="text-3xl sm:mt-[-14px] sm:text-lg">Innovation</h3>
                            <p className="text-base sm:text-xs mt-2 sm:mt-[-14px] tracking-tight">
                                Commitment to continuous research and development to stay at the forefront of technological advancements, offering innovative solutions that meet evolving industry needs.
                            </p>
                        </div>
                    </div>
                    <div className="border-l sm:border-0 pl-5 border-black w-1/3 sm:w-full sm:px-5">
                        <div>
                            <img src={PHOTO2} className="w-full h-[14rem] sm:h-[10rem]" alt="Customization" />
                        </div>
                        <div className="flex flex-col pt-5 sm:pt-2 px-2 gap-4 sm:px-0">
                            <span className="text-2xl sm:text-base">02</span>
                            <h3 className="text-3xl sm:mt-[-14px] sm:text-lg">Customization</h3>
                            <p className="text-base sm:text-xs mt-2 sm:mt-[-14px] tracking-tight">
                                Offering customizable solutions tailored to individual customer requirements, providing flexibility and versatility to accommodate diverse preferences.
                            </p>
                        </div>
                    </div>
                    <div className="border-l pl-5 border-black w-1/3 sm:w-full sm:px-5">
                        <div>
                            <img src={PHOTO3} className="w-full h-[14rem] sm:h-[10rem]" alt="Industry Expertise" />
                        </div>
                        <div className="flex flex-col pt-5 sm:pt-2 px-2 gap-4 sm:px-0">
                            <span className="text-2xl sm:text-base">03</span>
                            <h3 className="text-3xl sm:mt-[-14px] sm:text-lg">Industry Expertise</h3>
                            <p className="text-base sm:text-xs mt-2 sm:mt-[-14px] tracking-tight">
                                Leveraging deep expertise and experience in audio technology and cable manufacturing, serving as a trusted advisor to customers.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center pt-28 sm:pt-10 gap-6">
                    <h2 className="text-5xl sm:text-2xl">Need Custom Solutions?</h2>
                    <p className="text-xl sm:text-xs uppercase w-4/5 px-20 sm:px-0 text-center tracking-wide">
                        Need custom solutions? Contact us today to discuss your unique projector requirements and get a personalized quote!
                    </p>
                    <div className="pb-20 sm:pb-10 pt-10 sm:pt-1">
                        <Link to={"/contact"}>
                        <button className="text-white bg-[#292639] py-3 sm:py-1 px-16 sm:px-6 font-roboto rounded-full text-[0.8rem] sm:text-[0.5rem] uppercase hover:bg-[#4D4D4D] hover:scale-110 transition duration-500">Contact US</button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default AboutPage;
