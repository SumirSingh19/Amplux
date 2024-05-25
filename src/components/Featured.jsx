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
        <div className="flex flex-col bg-[#eae8e8] font-abel pb-10">
            <div className="pb-20 px-8">
                <span className="text-5xl font-light">Why choose us?</span>
            </div>
            <div className="infinite-scroll-container" ref={scrollContainerRef}>
                <div className="scroll-wrapper">
                    {items.concat(items).map((item, index) => (
                        <div key={index} className="scroll-item w-[29rem] h-[30rem] bg-white p-2 pb-10">
                            <div className="pt-5 px-2">
                                <span className="text-4xl">{item.title}</span>
                            </div>
                            <div className="flex flex-col flex-wrap description leading-3 pt-20 p-2 whitespace-pre-line">
                                <span className="text-sm">{item.description}</span>
                                <button className="flex w-24 h-6 justify-around rounded-full bg-[#B0B0B0] py-1 mt-8 mb-5 items-center">
                                    <span className="pl-2 font-medium text-[0.8rem]">Learn More</span>
                                    <img src={ARROW_UP} alt="arrow-icon" className="w-[0.7rem] mt-[2px]" />
                                </button>
                                <img src={item.image} alt="" className="h-44 w-[26rem] rounded-3xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
