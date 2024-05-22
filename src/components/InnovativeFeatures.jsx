import React from 'react';
import HDR from "../assets/images/Picture-3.png";
import REFRESH from "../assets/images/refresh.jpg";
import SAFE from "../assets/images/computer-glasses.jpg";

const InnovativeFeatures = () => {
    return (
        <div className="bg-[#eae8e8] py-8 font-abel flex flex-col pt-36">
            <div className="mb-8 text-left pl-52">
                <span className="text-3xl">Innovative Features</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="relative w-[22rem] h-[26rem] p-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center rounded-lg"
                        style={{ 
                            backgroundImage: `url(${HDR})`,
                            backgroundSize: '400%',
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-5xl font-semibold">HDR</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 py-1 w-full text-left rounded-lg">
                            <span className="text-xl block px-3 pt-2">Ultra-High Quality</span>
                            <span className="text-[0.7rem] block px-3 pb-2 tracking-widest">
                                Our screen delivers stunning 4k ultra hd resolution, 
                                ensuring you catch every detail with vibrant colors and unparalleled clarity.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[22rem] h-[26rem] p-4">
                    <div 
                        className="absolute inset-0 bg-cover bg-center rounded-lg"
                        style={{ 
                            backgroundImage: `url(${REFRESH})`,
                            backgroundSize: '450%',
                            backgroundPosition: 'bottom' 
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-5xl font-semibold">3080Hz</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 py-1 w-full text-left rounded-lg">
                            <span className="text-xl block px-3 pt-2">Enhanced Refresh Rate</span>
                            <span className="text-[0.7rem] block px-3 pb-2 tracking-widest">
                                Enjoy seamless and fluid visuals, 
                                perfect for gaming and fast-paced action scenes, 
                                with our screen's 120Hz refresh rate.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[22rem] h-[26rem] p-4" >
                    <div 
                        className="absolute inset-0 bg-cover rounded-lg"
                        style={{ 
                            backgroundImage: `url(${SAFE})`,
                            backgroundSize: '222%',
                            backgroundPosition:'15% center'
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="flex-grow flex items-center justify-center">
                            <span className="text-5xl font-semibold">Safe</span>
                        </div>
                        <div className="bg-black bg-opacity-50 px-2 py-1 w-full text-left rounded-lg">
                            <span className="text-lg block px-3 pt-2">Eye Comfort Technology</span>
                            <span className="text-[0.7rem] block px-3 pb-2 tracking-widest">
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
