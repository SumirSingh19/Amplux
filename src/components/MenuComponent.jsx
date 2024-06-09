    import { useState } from 'react';
    import ARROW_RIGHT from "../assets/icons/arrow-right.png";
    import ARROW_RIGHT1 from "../assets/icons/arrow-right-line.png";
    import { Link } from 'react-router-dom';

    const MenuComponent = () => {
        const [isHovering, setIsHovering] = useState(false);

        const handleMouseEnter = () => {
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        return (
            <div className="flex flex-col text-6xl sm:text-lg py-52 sm:py-20 px-40 sm:px-5 gap-8 sm:gap-1 font-abel font-medium">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative flex items-center" // Add this class for positioning
                >   
                    <div className='flex items-center hover:scale-110 transition duration-500'>
                        <span className='cursor-pointer'>Products</span>
                        <img src={ARROW_RIGHT} alt="arrow-right" className="w-11 sm:w-3 h-12 sm:h-4 pt-1 sm:pt-0.5 pl-2 sm:pl-0 cursor-pointer" />
                    </div>
                    
                    {isHovering && (
                        <div
                            className="absolute left-[20rem] sm:left-[6rem] top-0 flex flex-col pb-10 sm:pb-1 gap-10 sm:gap-1" // Position div on the right
                        >
                            {/* Additional content */}
                            <div className="text5xl hover:scale-105 transition duration-500 cursor-pointer">
                                <Link to={"/products"}><span className=''>All products</span></Link>
                                
                            </div>
                            <div className='flex flex-col gap-[4rem] sm:gap-[0.7rem]'>
                                <div className="text-3xl sm:text-[0.5rem] flex gap-[16rem] sm:gap-[2rem]">
                                <Link to={"/projector-screens"}>
                                    <div className='flex items-center gap-3 sm:gap-0.5 hover:scale-110 transition duration-500 cursor-pointer'>
                                        
                                        <img src={ARROW_RIGHT1} className='sm:w-1 pb-0' alt="" />
                                        <span className=''>Projector Screens</span>
                                    </div>
                                </Link>
                                <Link to={"/Flat-Panel-Display"}>
                                    <div className='w-5/6 sm: hover:scale-110 transition duration-500 flex items-center gap-3 sm:gap-[0.1rem] sm:leading-3 cursor-pointer sm:pt-3'>
                                        
                                        <img src={ARROW_RIGHT1} className='pb-6 sm:pb-3 sm:w-1' alt="" />
                                        <span>Interactive Flat Panel Display</span>
                                    </div>
                                </Link>
                                    
                                </div>
                                <div className="text-3xl sm:text-[0.5rem] flex gap-[14rem] sm:gap-[1.5rem]">
                                <Link to={"/All-In-One-LED"}>
                                    <div className='flex items-center gap-3 sm:gap-0.5 hover:scale-110 transition duration-500 cursor-pointer'>
                                        
                                        <img src={ARROW_RIGHT1} className='sm:w-2' alt="" />
                                        <span className=''>All-in-One LED Series</span>
                                    </div>
                                </Link>
                                <Link to={"/Active-LED-Display"}>  
                                    <div className='w-4/5 sm:w-2/3 hover:scale-110 transition duration-500 flex items-center gap-3 sm:gap-0.5 cursor-pointer sm:leading-3 sm:pt-3'>
                                        
                                        <img src={ARROW_RIGHT1} className='pb-6 sm:pb-3 sm:w-1' alt="" />
                                        <span>Active LED Displays</span>
                                    </div>
                                </Link>
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex'>
                    <Link className='hover:scale-110 transition duration-500' to="/about">
                        <span >About</span>
                    </Link>
                    
                </div>
                <div className='flex'>
                    <Link className='hover:scale-110 transition duration-500' to={"/contact"}>
                        <span>Contact</span>
                    </Link>
                    
                </div>
            </div>
        );
    };

    export default MenuComponent;
