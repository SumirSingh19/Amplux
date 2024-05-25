import BG from "../assets/images/gradient.jpg";

const Footer = () => {
    return (
        <div className="relative flex flex-col font-abel text-white" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="relative z-10 flex flex-col left-0" data-aos="fade-right">
                <div className="flex justify-between py-8 p-5">
                    <div className="pr-10 text-xs py-24 opacity-80">
                        <ul>
                            <li className="cursor-pointer section-link">LinkedIn</li>
                            <li className="cursor-pointer section-link">X</li>
                            <li className="cursor-pointer section-link">Instagram</li>
                            <li className="cursor-pointer section-link">Facebook</li>
                            <li className="cursor-pointer section-link">YouTube</li>
                        </ul>
                    </div>
                    <div className="text-2xl pt-10 pl-[24rem]">
                        <ul>
                            <li className="cursor-pointer section-link">Products</li>
                            <li className="cursor-pointer section-link">Active LED Displays</li>
                            <li className="cursor-pointer section-link">All-in-One LED Displays</li>
                            <li className="cursor-pointer section-link">Interactive Flat Panel Display</li>
                            <li className="cursor-pointer section-link">Projector Screens</li>
                        </ul>
                    </div>
                    <div className="text-2xl pr-64 pt-10">
                        <ul>
                            <li className="cursor-pointer section-link">Home</li>
                            <li className="cursor-pointer section-link">About</li>
                            <li className="cursor-pointer section-link">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-[32.5rem] items-center p-5 pb-7 font-light text-xs opacity-70">
                    <div>
                        <span>© 2024 Amplux. All rights reserved.</span>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <span className="cursor-pointer section-link">Privacy Policy</span>
                        </div>
                        <div>
                            <span className="cursor-pointer section-link">Cookies Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
