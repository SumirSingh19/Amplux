import React, { useRef } from "react";
import 'aos/dist/aos.css';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import PHOTO1 from "../assets/images/projector1.png";
import PHOTO2 from "../assets/images/panel1.png";
import PHOTO3 from "../assets/images/panel2.png";
import PHOTO4 from "../assets/images/screen2.png";

const ScreenCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  const cards = [
    {
      img: PHOTO1,
      title: "Projector Screens",
      text: "Versatile Projector Screens, Available In Both Motorized And Fixed Options, Enhancing Your Viewing Experience.",
      link: "/projector-screens"
    },
    {
      img: PHOTO2,
      title: "Interactive Flat Panel Display",
      text: "Versatile Projector Screens, Available In Both Motorized And Fixed Options, Enhancing Your Viewing Experience Across All Inch Categories: 65, 75, 86, And 98-Inch.",
      link: "/Flat-Panel-Display"
    },
    {
      img: PHOTO3,
      title: "Active LED Displays",
      text: "Cutting Edge Indoor And Outdoor LED Cabinets, Available In Various Pixel Pitches (P1.5, P2.5, P3.9, P6, P8, P10).",
      link: "/Active-LED-Display"
    },
    {
      img: PHOTO4,
      title: "All-In-One-LED",
      text: "Seamless LED Screens Ranging From 120 To 165 Inches, Delivering Immersive Visuals For Any Space.",
      link: "/All-In-One-LED"
    }
  ];

  return (
    <section ref={targetRef} className="sm:mt-[-160px] h-[300vh] -z-30">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#f7f2f2]">
        <motion.div style={{ x }} className="flex gap-4 sm:gap-0 bg-[#f7f2f2]">
          {cards.map((card, index) => (
            <Link to={card.link} key={index} className="flex-shrink-0 bg-white w-[45rem] h-[37rem] flex flex-col items-center pb-3 rounded-2xl cursor-pointer">
              <div>
                <img src={card.img} alt={card.title} className="w-[30rem] sm:w-[16rem] h-[30rem] sm:h-[16rem] pt-1 hover:scale-95 transition duration-700" />
              </div>
              <div className="p-3 pt-0 z-10">
                <div>
                  <span className="text-3xl sm:text-lg font-light">{card.title}</span>
                </div>
                <div>
                  <span className="text-base sm:text-xs tracking-wider sm:tracking-tighter sm:leading-3">
                    {card.text}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ScreenCarousel;
