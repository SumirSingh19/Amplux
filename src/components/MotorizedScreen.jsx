import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/motor1.png";
import PHOTO2 from "../assets/images/motor2.png";
import PHOTO3 from "../assets/images/motor3.png";
import PHOTO4 from "../assets/images/motor4.png";
import PHOTO5 from "../assets/images/motor5.png";
import PHOTO6 from "../assets/images/motor6.png";
import PHOTO7 from "../assets/images/motor7.png";
import PHOTO8 from "../assets/images/motor8.png";
import PHOTO9 from "../assets/images/motor9.png";
import PHOTO10 from "../assets/images/motor10.png";
import PHOTO11 from "../assets/images/motor11.png";
import PHOTO12 from "../assets/images/motor12.png";
import PHOTO13 from "../assets/images/motor13.png";
import PHOTO14 from "../assets/images/motor14.png";
import PHOTO15 from "../assets/images/motor15.png";
import PHOTO16 from "../assets/images/motor16.png";
import PHOTO17 from "../assets/images/motor17.png";
import PHOTO18 from "../assets/images/motor18.png";
import PHOTO19 from "../assets/images/motor19.png";
import PHOTO20 from "../assets/images/motor20.png";
import PHOTO21 from "../assets/images/motor21.png";
import PHOTO22 from "../assets/images/motor22.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";

const MotorizedScreen = () => {
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
            
            <div className={`flex flex-col items-center font-abel gap-48 sm:gap-20 ${isMenuOpen ? 'blurred backdrop-blur-md' : ''}`}>
                <div className="text-8xl sm:text-5xl text-[#343531] w-2/5 text-center">
                    <span>Fixed Projector Screens</span>
                </div>
                <div className="flex gap-8 flex-wrap px-24 pb-32">
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO1} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen Recharge V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Installs like a manual screen, the motorized tab-tensioned 
                                    Acumen Recharge V requires no wiring or electrician.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>9.67 feet ( 295 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $3096</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO2} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen Recharge E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Eye catching aesthetics, Acumen
                                    Recharge E free-hanging, wall-
                                    or ceiling-mounted, motorized, rechargeable screen requires no
                                    wiring or electrician.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>9.67 feet ( 295 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $2184</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO3} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Sleek, curved design, Acumen
                                    V wall- or ceiling-mounted, tab-
                                    tensioned motorized projection screen combines aesthetics with
                                    easy install and maintenance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>9.67 feet ( 295 cm) wide</span>
                                </div>                                
                                <span>Starting US MSRP: $4254</span>
                            </div> 
                        </div>
                    </div>
                                      
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO4} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Sleek curved stylish design, the Acumen
                                    E features a self-
                                    supporting, wall- or ceiling-mounted motorized screen that
                                    combines aesthetics with easy install and maintenance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>9.67 feet ( 295 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $2202</span>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO5} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen XL V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    For large applications, Acumen
                                    XL V tab-tensioned, wall- or
                                    ceiling-mounted electric screen combines aesthetics with easy
                                    install and maintenance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>18 feet ( 549 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $5712</span>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO6} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Acumen XL E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    For large venues, Acumen
                                    XL E free-hanging, wall- or ceiling-
                                    mounted motorized screen combines aesthetics with easy install
                                    and maintenance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>18 feet ( 549 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $3318</span>
                            </div> 
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO7} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Access V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Ideal for boardrooms and mid-sized training rooms, the ceiling-
                                    recessed, tab-tensioned Access V offers a premium electric
                                    projection screen.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>16 feet ( 488 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $4548</span>
                            </div>
                        </div>
                    </div>
                            
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO8} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Access XL V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    For larger venues, Access XL V offers a ceiling-recessed, tab-
                                    tensioned electric projection screen ideal for conference centers
                                    and ballrooms.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>18 feet ( 549 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $14524</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO9} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Ultimate Access V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    No exposed screw heads or fasteners provide the ceiling-recessed,
                                    tab-tensioned Ultimate Access V electric projection screen with a
                                    clean appearance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>12 feet ( 366 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $7322</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO10} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Ultimate Access XL V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Designed for larger venues, the ceiling recessed, tab tensioned
                                    Ultimate Access XL V electric screen is ideal for conference centers
                                    and ballrooms.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>22 feet ( 671 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $11084</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO11} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Premier</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Economical, Premier features a tab-tensioned, electric projection
                                    screen with a perfectly flat viewing surface for better image quality.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>12 feet ( 366 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $3602</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO12} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Premier XL</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Accommodates larger sizes, the wall- or ceiling- mounted Premier
                                    XL is Draper's most economical tab-tensioned, electric projection
                                    screen.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>16 feet ( 488 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $5596</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO13} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Paragon V</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Accommodates larger sizes, the electric wall- or ceiling-mounted,
                                    tab-tensioned Paragon V provides a heavy duty design ideal for
                                    auditoriums.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>24 feet ( 732 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $9646</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO14} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Access E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Perfect for small to medium university and boardroom spaces, the
                                    ceiling-recessed Access E provides complete concealment of
                                    projection screen.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>16 feet ( 488 cm) wide</span>
                                </div>
                                <span>SStarting US MSRP: $3882</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO15} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Access XL E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    For larger venues, Access XL E offers a ceiling-recessed, free-
                                    hanging electric projection screen ideal for conference centers and
                                    ballrooms.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>20 feet ( 610 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $12954</span>
                            </div>
                        </div>
                    </div>
                    





                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO16} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Ultimate Access E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    No exposed screw heads or fasteners provide the ceiling-recessed,
                                    free-hanging Ultimate Access E electric projection screen with a
                                    clean appearance.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>12 feet ( 366 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $5644</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO17} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Ultimate Access XL E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    For large venues and conference centers, the Ultimate Access XL E
                                    features a ceiling-recessed, free-hanging, electric projection
                                    screen.
                                </span>
                                <div className="flex flex-col">
                                    <span>CStandard size up to:</span>
                                    <span>22 feet ( 671 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $6964</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO18} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Targa XL</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Accommodates larger sizes, the Targa XL features our most
                                    popular free-hanging, wall- or ceiling-mounted, electric projection
                                    screen.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>16 feet ( 488 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $4354</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO19} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Targa</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Most popular wall- or ceiling-mounted, free-hanging electric
                                    projection screen makes Targa the choice for auditoriums and
                                    lecture halls.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>12 feet ( 366 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $1576</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO20} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Nocturne+ E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Designed for easy, outside installation, the Nocturne+ E electric
                                    projection screen transforms any outdoor space into an
                                    entertainment venue.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>11 feet ( 335 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $1746</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO21} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Paragon E</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Accommodates larger sizes, the electric wall- or ceiling-mounted,
                                    free-hanging Paragon E provides a heavy-duty design ideal for
                                    auditoriums.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>28 feet ( 853 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $10104</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b w-[19rem] h-[38rem] mb-20 rounded-t-3xl from-[#C8C8C8] to-[#F8F8F8] hover:scale-95 cursor-pointer transition duration-500">
                        <div>
                            <img src={PHOTO22} className="w-[19rem]" alt="" />
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-4">
                            <span className="text-2xl">Ropewalker</span>
                            <div className="font-roboto text-[0.6rem] font-[402] leading-5 text-left tracking-tight flex flex-col gap-4">
                                <span>
                                    Projection screen and lift integrated into one ceiling-recessed box,
                                    Ropewalker offers a 34’ (10 m) drop eliminating the need for extra
                                    black drop.
                                </span>
                                <div className="flex flex-col">
                                    <span>Standard size up to:</span>
                                    <span>12 feet ( 366 cm) wide</span>
                                </div>
                                <span>Starting US MSRP: $27938</span>
                            </div>
                        </div>
                    </div>
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
    )
};

export default MotorizedScreen;