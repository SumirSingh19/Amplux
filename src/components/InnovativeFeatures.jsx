import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HDR from "../assets/images/Picture-3.png";
import REFRESH from "../assets/images/refresh.jpg";
import SAFE from "../assets/images/computer-glasses.jpg";
import 'aos/dist/aos.css';

const InnovativeFeatures = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <>
        
        <div className="bg-[#f7f2f2] py-8 flex flex-col pt-36 sm:pt-16">
            <div className="mb-12 sm:mb-3 text-left p-2 pl-9" data-aos="zoom-in-left font-roboto">
                <span className="text-5xl sm:text-2xl">Innovative Features</span>
            </div>
            <div className="flex flex-wrap p-3 gap-8 justify-center" data-aos="zoom-in-left">
                <div className="relative w-[29rem] sm:w-[23rem] h-[40rem] sm:h-[28rem] overflow-hidden group transform transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer rounded-3xl">
                    <div 
                        className="absolute inset-0 bg-cover bg-center rounded-3xl"
                        style={{ 
                            backgroundImage: `url(${HDR})`,
                            backgroundSize: '280%',
                            backgroundPosition: 'top'
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-7xl sm:text-5xl font-semibold font-roboto">HDR</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 h-[10rem] sm:h-[7rem] py-1 w-full text-left rounded-lg transform translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0">
                            <span className="text-2xl sm:text-base block px-3 pt-4 tracking-wider uppercase">Ultra-High Quality</span>
                            <span className="text-[0.9rem] sm:text-[0.6rem] font-light block px-3 pt-2 pb-1 tracking-wider">
                                Our screen delivers stunning 4k ultra hd resolution, 
                                ensuring you catch every detail with vibrant colors and unparalleled clarity.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[29rem] sm:w-[23rem] h-[40rem] sm:h-[28rem] overflow-hidden group transform transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer rounded-3xl">
                    <div 
                        className="absolute inset-0 bg-cover bg-center rounded-3xl"
                        style={{ 
                            backgroundImage: `url(${REFRESH})`,
                            backgroundSize: '450%',
                            backgroundPosition: 'bottom' 
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-7xl sm:text-5xl font-semibold font-roboto">3080Hz</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 h-[10rem] sm:h-[7rem] py-1 w-full text-left rounded-lg transform translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0">
                            <span className="text-2xl sm:text-base block px-3 pt-4 tracking-wider uppercase">Enhanced Refresh Rate</span>
                            <span className="text-[0.9rem] sm:text-[0.6rem] font-light block px-3 pt-2 pb-1 tracking-wider">
                                Enjoy seamless and fluid visuals, 
                                perfect for gaming and fast-paced action scenes, 
                                with our screen's 120Hz refresh rate.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[29rem] sm:w-[23rem] h-[40rem] sm:h-[28rem] overflow-hidden group transform transition-transform duration-700 ease-in-out hover:scale-105 cursor-pointer rounded-3xl">
                    <div 
                        className="absolute inset-0 bg-cover rounded-3xl"
                        style={{ 
                            backgroundImage: `url(${SAFE})`,
                            backgroundSize: '222%',
                            backgroundPosition:'15% center'
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-7xl sm:text-5xl font-semibold font-roboto">Safe</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 h-[10rem] sm:h-[7rem] py-1 w-full text-left rounded-lg transform translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0">
                            <span className="text-2xl sm:text-base block px-3 pt-4 tracking-wider uppercase">Eye Comfort Technology</span>
                            <span className="text-[0.9rem] sm:text-[0.6rem] font-light block px-3 pt-2 pb-1 tracking-wider">
                                Our screen is equipped with advanced eye comfort technology,
                                including a built-in blue light filter reducing eye strain.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col items-center bg-[#f7f2f2] font-abel py-32 sm:py-3 z-10">
    <div className="text-center flex flex-col items-center mb-12 sm:mb-1" data-aos="zoom-in-up">
      <div className="w-11/12 pb-5 sm:pb-1">
        <span className="text-8xl sm:text-4xl font-light tracking-tight">Transform Any Space Into Immersive Theater</span>
      </div>
      <div className="w-8/12 sm:w-9/12 font-light text-center pb-10 sm:pb-1">
        <span className="text-3xl sm:text-sm font-roboto text-[#4D4D4D] font-light tracking-tight sm:tracking-tighter">
          Amplux Is A Leading Technology Company Providing State-Of-The-Art
          Digital Screens, Projectors, And Displays For Businesses Of All Sizes.
        </span>
      </div>
    </div>
    </div>

    </>

    )
};

export default InnovativeFeatures;
