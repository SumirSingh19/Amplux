import INTRO_VIDEO from "../assets/videos/2.mp4";
import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";

const Intro = () => {
    return (
        <div className="relative w-full h-full font-abel">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4">
                <div className="w-40">
                    <img src={LOGO} alt="Logo" className="w-full" />
                </div>
                <div className="flex gap-3 h-8">
                    <span className="rounded-full bg-white text-xs pr-9 p-2">MENU</span>
                    <span className="rounded-full bg-white text-xs pr-9 p-2">CONTACT</span>
                    <div className="flex rounded-full bg-white pr-9 pl-1">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-6px] mt-2" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen">
                <video autoPlay muted loop src={INTRO_VIDEO} className="w-full h-full object-cover"></video>
            </div>
        </div>
    );
};

export default Intro;
