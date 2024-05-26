import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HDR from "../assets/images/Picture-3.png";
import REFRESH from "../assets/images/refresh.jpg";
import SAFE from "../assets/images/computer-glasses.jpg";

const InnovativeFeatures = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <div className="bg-[#f7f2f2] py-8 flex flex-col pt-36">
            <div className="mb-12 text-left p-2 pl-9" data-aos="zoom-in-left font-roboto">
                <span className="text-5xl">Innovative Features</span>
            </div>
            <div className="flex flex-wrap p-3 gap-8 justify-center" data-aos="zoom-in-left">
                <div className="relative w-[29rem] h-[41rem] overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
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
                            <span className="text-7xl font-semibold font-roboto">HDR</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 h-[13rem] py-1 w-full text-left rounded-lg transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <span className="text-4xl block px-3 pt-2 tracking-wider">Ultra-High Quality</span>
                            <span className="text-[1.1rem] block px-3 pt-4 pb-1 tracking-wider">
                                Our screen delivers stunning 4k ultra hd resolution, 
                                ensuring you catch every detail with vibrant colors and unparalleled clarity.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[29rem] h-[41rem] p-4 overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
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
                            <span className="text-7xl font-semibold font-roboto">3080Hz</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-3 h-[13rem] py-2 w-full text-left rounded-lg transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <span className="text-4xl block px-3 pt-2 tracking-wider">Enhanced Refresh Rate</span>
                            <span className="text-[1.1rem] block px-3 pt-4 pb-1 tracking-wider">
                                Enjoy seamless and fluid visuals, 
                                perfect for gaming and fast-paced action scenes, 
                                with our screen's 120Hz refresh rate.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[29rem] h-[41rem] p-4 overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
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
                            <span className="text-7xl font-semibold font-roboto">Safe</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 h-[13rem] py-1 w-full text-left rounded-lg transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <span className="text-4xl block px-3 pt-2 tracking-wide">Eye Comfort Technology</span>
                            <span className="text-[1.1rem] block px-3 pt-4 pb-2 tracking-wider">
                                Our screen is equipped with advanced eye comfort technology,
                                including a built-in blue light filter reducing eye strain.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeFeatures;
