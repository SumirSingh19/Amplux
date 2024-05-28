import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";
import PHOTO1 from "../assets/images/projector1.webp";
import PHOTO2 from "../assets/images/panel1.jpg";
import PHOTO3 from "../assets/images/panel2.jpeg";
import PHOTO4 from "../assets/images/panel3.png";

const Products = () => {
    return (
        <div className="flex flex-col font-abel">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="w-40">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-10">
                    <div className="flex items-center rounded-full  text-base font-roboto font-normal p-6 py-[0.4rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white">
                        <span className="mr-2 group-hover:text-white">MENU</span>
                        <div className="flex flex-col justify-center items-center gap-1">
                            <span className="block w-5 h-[0.1rem] bg-white"></span>
                            <span className="block w-5 h-[0.1rem] bg-white"></span>
                        </div>
                    </div>
                    <span className="rounded-full text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer bg-black text-white">CONTACT</span>
                    <div className="flex rounded-full pr-5 px-3 pt-1 cursor-pointer bg-black">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-10px] mt-1.5 filter invert" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-[-2px] filter invert" />    
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-40 items-center">
                <div className="py-5 pb-16">
                    <span className="text-9xl">Products</span>
                </div>
                <div className="flex gap-5 flex-wrap px-20 py-10 pb-32">
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO1} className="w-[26rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="Projector Screen" />
                        <span className="text-4xl pt-10">Projector Screens</span>
                    </div>
                    <div className="flex flex-col items-center pt-3 cursor-pointer">
                        <img src={PHOTO2} className="w-[30rem] p-1 hover:scale-95 transition duration-700 ease-in-out" alt="Interactive Flat Panel Display" />
                        <span className="text-4xl pt-10">Interactive Flat Panel Display</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO4} className="w-[26rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="All-In-One LED Series" />
                        <span className="text-4xl pt-14">All-In-One LED Series</span>
                    </div>
                    <div className="flex flex-col items-center pt-20 cursor-pointer">
                        <img src={PHOTO3} className="w-[24rem] hover:scale-95 transition duration-700 ease-in-out" alt="Active LED Displays" />
                        <span className="text-4xl pt-10">Active LED Displays</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;