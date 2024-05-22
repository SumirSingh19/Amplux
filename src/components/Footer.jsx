import BG from "../assets/images/gradient.jpg";

const Footer = () => {
    return (
        <div className="relative flex flex-col font-abel text-white" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="relative z-10 flex flex-col left-0">
                <div className="flex justify-between py-8 p-5">
                    <div className="pr-10 text-xs py-24">
                        <ul>
                            <li className="cursor-pointer">LinkedIn</li>
                            <li className="cursor-pointer">X</li>
                            <li className="cursor-pointer">Instagram</li>
                            <li className="cursor-pointer">Facebook</li>
                            <li className="cursor-pointer">YouTube</li>
                        </ul>
                    </div>
                    <div className="text-2xl pt-10 pl-[24rem]">
                        <ul>
                            <li className="cursor-pointer">Products</li>
                            <li className="cursor-pointer">Active LED Displays</li>
                            <li className="cursor-pointer">All-in-One LED Displays</li>
                            <li className="cursor-pointer">Interactive Flat Panel Display</li>
                            <li className="cursor-pointer">Projector Screens</li>
                        </ul>
                    </div>
                    <div className="text-2xl pr-64 pt-10">
                        <ul>
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-[32.5rem] items-center p-4 font-light text-xs">
                    <div>
                        <span>© 2024 Amplux. All rights reserved.</span>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <span className="cursor-pointer">Privacy Policy</span>
                        </div>
                        <div>
                            <span className="cursor-pointer">Cookies Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
