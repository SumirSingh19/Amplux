import { useEffect, useRef, useState } from 'react';
import MADE_IN_INDIA from "../assets/images/ultrwide_frame.png";
import VIDEO from "../assets/videos/3.mp4";
import AMPLUX from "../assets/images/amplux1.png";

const MadeInIndia = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const [firstVisit, setFirstVisit] = useState(true);

    useEffect(() => {
        const words1 = textRef1.current.querySelectorAll('.animated-word');
        const words2 = textRef2.current.querySelectorAll('.animated-word');

        // Animate each word in the first span sequentially
        words1.forEach((word, index) => {
            word.style.animationDelay = `${index * 0.5}s`;
            word.classList.add('animate-word');
        });

        // Hide the second span initially
        textRef2.current.style.opacity = 0;

        // Reveal the second span after the first span completes (only on first visit)
        if (firstVisit) {
            setTimeout(() => {
                textRef2.current.style.opacity = 1;
                words2.forEach((word, index) => {
                    word.style.animationDelay = `${index * 0.5}s`;
                    word.classList.add('animate-word');
                });
            }, words1.length * 500); // Delay for the second span

            // Mark subsequent visits as non-first visits
            setFirstVisit(false);
        }
    }, [firstVisit]);

    return (
        <div className="font-abel bg-[#f7f2f2] flex flex-col items-center sm:pt-20 pt-0">
            <div className="w-11/12 flex flex-col items-center" data-aos = "zoom-in-up">
            <img src={MADE_IN_INDIA} alt="made in india logo" className='w-full rounded-2xl' />
            </div>
            <div>
                <div className="flex flex-col items-center pt-16 sm:pt-1">
                    <div className="reveal-container">
                        <span ref={textRef1} className="text-6xl sm:text-xl pb-5 sm:pb-0">
                            <span className="animated-word">Proudly</span>{' '}
                            <span className="animated-word">Made</span>{' '}
                            <span className="animated-word">In</span>{' '}
                            <span className="animated-word">India</span>
                        </span>
                    </div>
                </div>
                <div className="w-10/12 text-center pl-44 sm:pl-16">
                    <div className="reveal-container">
                        <span ref={textRef2} className="text-xl sm:text-[0.5rem] font-roboto text-[#4D4D4D] tracking-wider sm:leading-[0.1rem] sm:tracking-tight">
                            <span className="animated-word">Our</span>{' '}
                            <span className="animated-word">Screens</span>{' '}
                            <span className="animated-word">And</span>{' '}
                            <span className="animated-word">Projectors</span>{' '}
                            <span className="animated-word">Are</span>{' '}
                            <span className="animated-word">Locally</span>{' '}
                            <span className="animated-word">Produced</span>{' '}
                            <span className="animated-word">Thus</span>{' '}
                            <span className="animated-word">Supporting</span>{' '}
                            <span className="animated-word">The</span>{' '}
                            <span className="animated-word">Initiative</span>{' '}
                            <span className="animated-word">Of</span>{' '}
                            <span className="animated-word">Make</span>{' '}
                            <span className="animated-word">In</span>{' '}
                            <span className="animated-word">India</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MadeInIndia;