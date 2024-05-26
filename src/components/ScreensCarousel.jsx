import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import PHOTO1 from "../assets/images/projector1.webp";
import PHOTO2 from "../assets/images/panel1.jpg";
import PHOTO3 from "../assets/images/panel2.jpeg";
import PHOTO4 from "../assets/images/screen2.jpg";

const ScreenCarousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const containerRef = useRef(null);
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        const container = containerRef.current;
        const isEndOfScroll = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        const isStartOfScroll = container.scrollLeft <= 0;

        // Check for conditions to initiate horizontal scrolling
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && !isHorizontalScrolling) {
          setIsHorizontalScrolling(true);
        }

        // Allow smooth transition back to vertical scrolling (using requestAnimationFrame)
        if (isHorizontalScrolling && (Math.abs(e.deltaY) < 5 || (isEndOfScroll && e.deltaY > 0) || (isStartOfScroll && e.deltaY < 0))) {
          setIsHorizontalScrolling(false);
        }

        // Horizontal scrolling within bounds (active during isHorizontalScrolling)
        if (isHorizontalScrolling) {
          e.preventDefault();
          requestAnimationFrame(() => {
            container.scrollLeft += e.deltaY;
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isHorizontalScrolling]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsHorizontalScrolling(true);
          } else {
            setIsHorizontalScrolling(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#f7f2f2] font-abel py-32">
      <div className="text-center flex flex-col items-center mb-12" data-aos="zoom-in-up">
        <div className="w-11/12 pb-5">
          <span className="text-8xl font-light tracking-tight">Transform Any Space Into Immersive Theater</span>
        </div>
        <div className="w-8/12 font-light text-center pb-10">
          <span className="text-3xl font-roboto text-[#4D4D4D] font-light tracking-tight">
            Amplux Is A Leading Technology Company Providing State-Of-The-Art
            Digital Screens, Projectors, And Displays For Businesses Of All Sizes.
          </span>
        </div>
      </div>
      <div ref={containerRef} className="flex items-center justify-start gap-8 overflow-x-auto w-full hide-scrollbar" data-aos="zoom-in">
        <div className="flex-shrink-0 bg-white w-[45rem] h-[37rem] flex flex-col items-center pb-3 rounded-2xl cursor-pointer">
          <div>
            <img src={PHOTO2} alt="" className="w-[30rem] h-[30rem] p-2 hover:scale-110 transition duration-700" />
          </div>
          <div className="px-3 pt-1 z-10">
            <div>
              <span className="text-3xl">Interactive Flat Panel Display</span>
            </div>
            <div>
              <span className="text-base tracking-wider">
                Versatile Projector Screens, Available In Both Motorized And Fixed Options, 
                Enhancing Your Viewing Experience Across All Inch Categories: 65, 75, 86, And 98-Inch.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 bg-white w-[45rem] h-[37rem] flex flex-col items-center pb-3 rounded-2xl cursor-pointer">
          <div>
            <img src={PHOTO1} alt="" className="w-[30rem] h-[30rem] hover:scale-110 transition duration-700" />
          </div>
          <div className="px-6 py-4 z-10">
            <div>
              <span className="text-3xl">Projector Screens</span>
            </div>
            <div>
              <span className="text-base tracking-wider">
                Versatile Projector Screens, Available In Both Motorized And Fixed Options, 
                Enhancing Your Viewing Experience.
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 bg-white w-[45rem] h-[37rem] flex flex-col items-center pb-3 rounded-2xl cursor-pointer">
          <div>
            <img src={PHOTO3} alt="" className="w-[35rem] h-[30rem] p-3 hover:scale-110 transition duration-700" />
          </div>
          <div className="p-3 pt-4 z-10">
            <div>
              <span className="text-3xl">Active LED Displays</span>
            </div>
            <div>
              <span className="text-lg">
                Cutting Edge Indoor And Outdoor LED Cabinets, Available In Various Pixel Pitches (P1.5, P2.5, P3.9, P6, P8, P10).
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 bg-white w-[45rem] h-[37rem] flex flex-col items-center pb-3 rounded-2xl cursor-pointer">
          <div>
            <img src={PHOTO4} alt="" className="w-[30rem] h-[30rem] pt-1 hover:scale-110 transition duration-700" />
          </div>
          <div className="p-3 pt-0 z-10">
            <div>
              <span className="text-3xl">All-In-One-LED Series</span>
            </div>
            <div>
              <span className="text-lg tracking-wider">
                Seamless LED Screens Ranging From 120 To 165 Inches, Delivering Immersive Visuals For Any Space.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCarousel;
