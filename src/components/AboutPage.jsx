import LOGO from "../assets/images/ampluxe.png";
import INTRO_VIDEO from "../assets/videos/2.mp4";
import PHOTO1 from "../assets/images/about1.png";
import PHOTO2 from "../assets/images/about2.png";
import PHOTO3 from "../assets/images/about3.png";
import { useState } from "react";
import MenuComponent from "./MenuComponent";


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
            <header className="flex justify-between p-4 z-20">
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
                </div>
                <div className={`absolute top-0 left-0 w-full h-full z-20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <MenuComponent />
                </div>
            </header>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-50 z-10' : 'opacity-0 pointer-events-none'}`}></div>

            {/* Main Content */}
            <main className={`flex flex-col items-center pt-20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
                <div className="text-9xl uppercase">
                    <h1>About Us</h1>
                </div>
                <div className="px-20 py-20"> 
                {/* replace this video tag with the animation stuff but make sure to render frames over the screen */}
                    <video autoPlay muted loop src={INTRO_VIDEO} className="brightness-200 rounded-3xl"></video>
                </div>
                <section className="flex flex-col items-center text-center pt-10">
                    <div className="text-5xl flex flex-col gap-1 tracking-wide">
                        <h2>Innovative Projectors And Screens</h2>
                        <p>Crafted For Exceptional Visual Experiences.</p>
                    </div>
                    <div className="flex flex-col pt-10 text-lg items-center text-[#343531]">
                        <p>At Ampluxe, we specialize in high-quality projectors and screens that elevate your visual experiences.</p>
                        <div className="w-3/5">
                            <p>We provide cutting-edge technology and superior craftsmanship. Trust Ampluxe to deliver exceptional products tailored to meet your projection needs.</p>
                        </div>
                    </div>
                </section>
                <section className="flex gap-5 py-10 px-10 w-full mb-10">
                    <div className="w-1/3">
                        <div>
                            <img src={PHOTO1} className="w-full h-[14rem]" alt="Innovation" />
                        </div>
                        <div className="flex flex-col pt-5 px-2 gap-4">
                            <span className="text-2xl">01</span>
                            <h3 className="text-3xl">Innovation</h3>
                            <p className="text-base mt-2 tracking-tight">
                                Commitment to continuous research and development to stay at the forefront of technological advancements, offering innovative solutions that meet evolving industry needs.
                            </p>
                        </div>
                    </div>
                    <div className="border-l pl-5 border-black w-1/3">
                        <div>
                            <img src={PHOTO2} alt="Customization" />
                        </div>
                        <div className="flex flex-col pt-5 px-2 gap-4">
                            <span className="text-2xl">02</span>
                            <h3 className="text-3xl">Customization</h3>
                            <p className="text-base mt-2 tracking-tight">
                                Offering customizable solutions tailored to individual customer requirements, providing flexibility and versatility to accommodate diverse preferences.
                            </p>
                        </div>
                    </div>
                    <div className="border-l pl-5 border-black w-1/3">
                        <div>
                            <img src={PHOTO3} alt="Industry Expertise" />
                        </div>
                        <div className="flex flex-col pt-5 px-2 gap-4">
                            <span className="text-2xl">03</span>
                            <h3 className="text-3xl">Industry Expertise</h3>
                            <p className="text-base mt-2 tracking-tight">
                                Leveraging deep expertise and experience in audio technology and cable manufacturing, serving as a trusted advisor to customers.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center pt-28 gap-6">
                    <h2 className="text-5xl">Need Custom Solutions?</h2>
                    <p className="text-xl uppercase w-4/5 px-20 text-center tracking-wide">
                        Need custom solutions? Contact us today to discuss your unique projector requirements and get a personalized quote!
                    </p>
                    <div className="pb-20 pt-10">
                        <button className="text-white bg-[#292639] py-3 px-16 font-roboto rounded-full text-[0.8rem] uppercase hover:bg-[#4D4D4D] hover:scale-110 transition duration-500">Contact US</button>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default AboutPage;
