import { useState } from 'react';
import LOGO from "../assets/images/ampluxe.png";
import MenuComponent from "./MenuComponent";
import PHOTO1 from "../assets/images/3d1.png";
import PHOTO2 from "../assets/images/3d2.png";
import PHOTO3 from "../assets/images/3d3.png";
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        role: '',
        website: '',
        email: '',
        phone: '',
        message: ''
    });

    const [messageCharCount, setMessageCharCount] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message') {
            if (value.length <= 500) {
                setFormData({
                    ...formData,
                    [name]: value
                });
                setMessageCharCount(value.length);
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handlePhoneChange = (e) => {
        const phone = e.target.value.replace('+91 ', '');
        setFormData({
            ...formData,
            phone
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const images = [PHOTO1, PHOTO2, PHOTO3];

    return (
        <div className="w-full h-full font-abel">
            <header className="flex justify-between p-4 sm:p-0.5 z-40 fixed top-0 w-full bg-transparent bg-opacity-40 backdrop-blur-xl">
                <div className="w-40 sm:w-20">
                    <Link to={"/"}>
                        <img src={LOGO} alt="Logo" className="w-full" />
                    </Link>
                </div>
                <div className="flex gap-5 h-[4.5rem] sm:h-[2rem] p-4 sm:p-2 sm:gap-2">
                    <div
                        className="flex items-center rounded-full text-base font-roboto font-normal p-6 sm:p-2 py-[0.4rem] sm:py-[0.2rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 sm:mr-1 text-white sm:text-[0.4rem]">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 sm:gap-[0.1rem] ${isMenuOpen ? 'gap-[0.5px] w-2 py-10 sm:w-1 sm:py-2 sm:gap-[0.2px]' : ''}`}>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>

                    <Link to={"/contact"} className='sm:mt-[-0.41rem] py-[0.4rem] sm:py-[0rem]'>
                        <span className="rounded-full text-base px-3 py-2 pb-3 sm:p-1 font-roboto font-normal cursor-pointer bg-black text-white transition duration-300 ease-in-out sm:text-[0.45rem]">CONTACT</span>
                    </Link>
                </div>
            </header>

            <main className={`flex flex-col pt-40 sm:pt-20 items-center ${isMenuOpen ? 'blurred backdrop-blur-md' : ''}`}>
                <div className="w-1/3 sm:mr-9 text-center flex">
                    <span className="text-9xl sm:text-4xl uppercase">Lets Connect</span>
                </div>
                <div className='flex sm:flex-col items-center gap-20'>
                    <div className="flex p-8 sm:p-4 shadow-md mt-10 border border-[#070707] rounded-xl mb-36 sm:mb-16">
                        <form onSubmit={handleSubmit} className="w-[38rem] sm:w-[19rem] font-roboto">
                            <div className="flex gap-4">
                                <div className="mb-4 flex flex-col gap-2 w-[18.5rem] sm:w-[9rem]">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold flex gap-1" htmlFor="firstName">
                                        <span>Name</span>
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName"
                                        placeholder="XYZ" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        className="w-full border-b-2 border-[#888888] text-xs pt-1 sm:pt-0 placeholder:text-xs"
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex flex-col gap-2 w-[18.5rem] sm:w-[9rem]">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold flex gap-1" htmlFor="lastName">
                                        <span>Last Name</span>
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        placeholder="ABC"
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        className="border-b-2 border-[#888888] text-xs sm:text-[0.72rem] pt-1 sm:pt-0 placeholder:text-xs sm:placeholder:sm:text-[0.72rem]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-2">
                                <div className="mb-4 flex flex-col gap-2 w-[18.5rem] sm:w-[9rem]">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold flex gap-1" htmlFor="company">
                                        <span>Company</span>
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="company" 
                                        id="company"
                                        placeholder="Nome Azienda" 
                                        value={formData.company} 
                                        onChange={handleChange} 
                                        className="border-b-2 border-[#888888] text-xs sm:text-[0.72rem] pt-1 sm:pt-0 placeholder:text-xs sm:placeholder:sm:text-[0.72rem]"
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex flex-col gap-2 w-[18.5rem] sm:w-[9rem]">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold flex gap-1" htmlFor="role">
                                        <span>Role</span>
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="role" 
                                        id="role"
                                        placeholder="Es. Market manager" 
                                        value={formData.role} 
                                        onChange={handleChange} 
                                        className="border-b-2 border-[#888888] text-xs sm:text-[0.72rem] pt-1 sm:pt-0 placeholder:text-xs sm:placeholder:sm:text-[0.72rem]"
                                        required
                                    />
                                </div>
                            </div>                    
                            
                            <div className="mb-4 w-[38rem] sm:w-[19rem] flex flex-col gap-2">
                                <label className="text-gray-700 text-sm sm:text-xs font-bold" htmlFor="website">
                                    Website
                                </label>
                                <input 
                                    type="url" 
                                        name="website" 
                                        id="website"
                                        placeholder="www.example.com" 
                                        value={formData.website} 
                                        onChange={handleChange} 
                                        className="border-b-2 border-[#888888] text-xs sm:text-[0.72rem] pt-1 sm:pt-0 placeholder:text-xs sm:placeholder:sm:text-[0.72rem]"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col gap-2 w-[18.5rem] sm:w-[9rem]">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold flex gap-1" htmlFor="email">
                                        <span>Email</span>
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="example@email.com"
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className="border-b-2 border-[#888888] text-xs sm:text-[0.72rem] pt-1 sm:pt-0 placeholder:text-xs sm:placeholder:sm:text-[0.72rem]"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-[18.5rem] sm:w-[9rem] relative">
                                    <label className="text-gray-700 text-sm sm:text-xs font-bold" htmlFor="phone">
                                        Phone no.
                                    </label>
                                    <input
                                        mask="+91 9999999999"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className="border-b-2 border-[#888888] pl-12 text-xs pt-1 sm:pt-0"
                                    />
                                    <span className="absolute pt-1 sm:pt-0 top-7 text-xs sm:text-[0.72rem] text-[#161616]">+91 </span>
                                </div>
                            </div>

                            <div className="py-10 flex flex-col gap-1 sm:w-11/12">
                                <div>
                                    <span className="font-semibold">Purpose</span>
                                </div>
                                <ul className="flex flex-wrap gap-2 sm:gap-1">
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Collaboration</li>
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Marketplace</li>
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Distribution</li>
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Payment</li>
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Business</li>
                                    <li className="border border-black py-1 px-8 sm:px-5 text-xs sm:text-[0.62rem] rounded-full font-medium">Other</li>
                                </ul>
                            </div>
                            
                            <div className="mb-4 w-[38rem] sm:w-[19rem] flex flex-col relative">
                                <label className="text-gray-700 text-sm font-bold" htmlFor="message">
                                    Custom Message
                                </label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className="h-[12rem] border-b border-[#888888]"
                                ></textarea>
                                <span className="absolute bottom-2 right-2 text-sm text-gray-500">{messageCharCount}/500</span>
                            </div>

                            <div className="flex justify-center sm:justify-normal">
                                <button type="submit" className="text-white bg-[#292639] py-3 px-[18rem] sm:px-[8.5rem] font-roboto rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase hover:bg-[#4D4D4D] hover:scale-x-95 transition duration-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="isometric-container pb-60 cursor-pointer">
                        {images.map((src, index) => (
                            <div key={index} className="isometric-card">
                            <img src={src} alt={`Card ${index}`} className="card-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Overlay and Menu Component */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-30">
                    <div className="fixed inset-0 bg-black opacity-70" onClick={toggleMenu}></div>
                    <div className="relative z-50">
                        <MenuComponent />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactPage;
