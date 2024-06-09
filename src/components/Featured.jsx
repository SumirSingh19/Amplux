import ARROW_UP from "../assets/icons/arrow2.png";
import PHOTO1 from "../assets/images/GWX.jpg";
import PHOTO2 from "../assets/images/Shared-Team.png";
import PHOTO3 from "../assets/images/custom-1.png";
import PHOTO4 from "../assets/images/earthflow.jpg";
import PHOTO5 from "../assets/images/gradient.jpg";
import { useEffect, useRef } from 'react';

const Featured = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const firstChild = scrollContainer.firstChild;
        let animationId;

        const animate = () => {
            const firstItemWidth = firstChild.getBoundingClientRect().width;
            scrollContainer.scrollLeft += 0.5;  // Slower scroll speed

            if (scrollContainer.scrollLeft >= firstItemWidth) {
                scrollContainer.appendChild(firstChild);
                scrollContainer.scrollLeft = 0;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const items = [
        {
            title: "Full-Service Solutions",
            description: "We handle every aspect of your project, streamlining the process and ensuring seamless execution from start to finish.",
            image: PHOTO1
        },
        {
            title: "Expert Design Team",
            description: "Our large, design team is dedicated to creating visually stunning and technologically advanced solutions that elevate your space.",
            image: PHOTO2
        },
        {
            title: "Custom Solutions",
            description: "Discovered tailored screen solutions designed to meet your unique needs, crafted with precision and innovation. Let us transform your vision into reality with our bespoke screen services.",
            image: PHOTO3
        },
        {
            title: "Global Reach",
            description: "With our global installation capabilities, we can deliver exhibit projects anywhere in the world, providing you with the same exceptional service and quality, no matter where you are.",
            image: PHOTO4
        },
        {
            title: "Highest Quality Materials",
            description: "We use only the highest quality materials, ensuring durability, reliability, and superior performance in all our products.",
            image: PHOTO5
        }
    ];

    return (
        <div className="flex flex-col bg-[#f7f2f2] font-abel pb-10 sm:mt-[-80px]">
            <div className="pb-20 sm:pb-10 px-8 sm:px-2">
                <span className="text-5xl sm:text-2xl font-light">Why choose us?</span>
            </div>
            <div className="infinite-scroll-container" ref={scrollContainerRef}>
                <div className="scroll-wrapper">
                    {items.concat(items).map((item, index) => (
                        <div key={index} className="scroll-item w-[29rem] sm:w-[19rem] h-[30rem] sm:h-[20rem] bg-white p-4 pb-10 hover:scale-95 transition duration-500 tracking rounded-3xl cursor-pointer">
                            <div className="pt-5 sm:pt-2 px-2">
                                <span className="text-4xl sm:text-xl">{item.title}</span>
                            </div>
                            <div className="flex flex-col flex-wrap description leading-3 pt-20 sm:pt-6 p-2 whitespace-pre-line">
                                <span className="text-sm sm:text-[0.7rem]">{item.description}</span>
                                <button className="flex w-24 sm:w-12 h-6 sm:h-3 justify-around rounded-full bg-[#B0B0B0] py-1 mt-8 sm:mt-2 mb-5 sm:px-1 items-center 
                                hover:text-white hover:shadow-[inset_9rem_0_0_0] hover:shadow-slate-600 duration-700 transition-shadow">
                                    <span className="pl-2 sm:pl-0 font-medium text-[0.8rem] sm:text-[0.5rem]">Learn More</span>
                                    <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] sm:w-[0.34rem] mt-[2px]" />
                                </button>
                                <img src={item.image} alt="" className="h-44 w-[26rem] sm:w-[17rem] sm:h-28 rounded-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
