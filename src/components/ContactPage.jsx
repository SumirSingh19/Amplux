import { useState } from 'react';
import LOGO from "../assets/images/ampluxe.png";
import ARROW1 from "../assets/icons/arrow1.png";
import ARROW2 from "../assets/icons/arrow2.png";
import MenuComponent from "./MenuComponent";

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

    return (
        <div className="w-full h-full font-abel">
            <header className="flex justify-between p-4 z-20">
                <div className="w-40">
                    <img src={LOGO} alt="Ampluxe Logo" className="w-full" />
                </div>
                <div className="flex gap-5 h-[4.5rem] p-4 z-20">
                    <div 
                        className="flex items-center rounded-full text-base font-roboto font-normal p-6 py-[0.4rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 text-white">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 ${isMenuOpen ? 'gap-[0.5px] w-2 py-10' : ''}`}>
                            <span className={`block w-5 h-[0.1rem] bg-white ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 h-[0.1rem] bg-white ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>
                    <span className="rounded-full text-base p-4 font-roboto font-normal py-[0.4rem] cursor-pointer bg-black text-white">CONTACT</span>
                    <div className="flex rounded-full pr-5 px-3 pt-1 cursor-pointer bg-black">
                        <img src={ARROW1} alt="arrow1" className="h-6 w-6 mr-[-10px] mt-1.5 filter invert" />
                        <img src={ARROW2} alt="arrow2" className="h-6 w-6 mt-[-2px] filter invert" />    
                    </div>
                </div>
                <div className={`absolute top-0 left-0 w-full h-full z-20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <MenuComponent />
                </div>
            </header>

            <main className="flex flex-col items-center">
                <div className="w-1/3 text-center flex">
                    <span className="text-9xl uppercase">Lets Connect</span>
                </div>
                <div className="flex p-8 shadow-md mt-10 border border-[#070707] rounded-xl mb-36">
                    <form onSubmit={handleSubmit} className="w-[38rem] font-roboto">
                        <div className="flex gap-4">
                            <div className="mb-4 flex flex-col gap-2 w-[18.5rem]">
                                <label className="text-gray-700 text-sm font-bold flex gap-1" htmlFor="firstName">
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
                                    className="w-full border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-col gap-2 w-[18.5rem]">
                                <label className="text-gray-700 text-sm font-bold flex gap-1" htmlFor="lastName">
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
                                    className="border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <div className="mb-4 flex flex-col gap-2 w-[18.5rem]">
                                <label className="text-gray-700 text-sm font-bold flex gap-1" htmlFor="company">
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
                                    className="border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex flex-col gap-2 w-[18.5rem]">
                                <label className="text-gray-700 text-sm font-bold flex gap-1" htmlFor="role">
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
                                    className="border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                                />
                            </div>
                        </div>                    
                        
                        <div className="mb-4 w-[38rem] flex flex-col gap-2">
                            <label className="text-gray-700 text-sm font-bold" htmlFor="website">
                                Website
                            </label>
                            <input 
                                type="url" 
                                    name="website" 
                                    id="website"
                                    placeholder="www.example.com" 
                                    value={formData.website} 
                                    onChange={handleChange} 
                                    className="border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col gap-2 w-[18.5rem]">
                                <label className="text-gray-700 text-sm font-bold flex gap-1" htmlFor="email">
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
                                    className="border-b-2 border-[#888888] text-xs pt-1 placeholder:text-xs"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-[18.5rem] relative">
                                <label className="text-gray-700 text-sm font-bold" htmlFor="phone">
                                    Phone no.
                                </label>
                                <input
                                    mask="+91 9999999999"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    className="border-b-2 border-[#888888] pl-12 text-xs pt-1"
                                    required
                                />
                                <span className="absolute left-5 pt-1 top-7 text-xs text-[#161616]">+91 </span>
                            </div>
                        </div>

                        <div className="py-10 flex flex-col gap-1">
                            <div>
                                <span className="font-semibold">Purpose</span>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Collaboration</li>
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Marketplace</li>
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Distribution</li>
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Payment</li>
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Business</li>
                                <li className="border border-black py-2 px-8 text-xs rounded-full font-medium">Other</li>
                            </ul>
                        </div>
                        
                        <div className="mb-4 w-[38rem] flex flex-col relative">
                            <label className="text-gray-700 text-sm font-bold" htmlFor="message">
                                Custom Message
                            </label>
                            <textarea 
                                name="message" 
                                id="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="h-[12rem] border-b border-[#888888]"
                                required
                            ></textarea>
                            <span className="absolute bottom-2 right-2 text-sm text-gray-500">{messageCharCount}/500</span>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="text-white bg-[#292639] py-3 px-[18rem] font-roboto rounded-full text-[0.8rem] uppercase hover:bg-[#4D4D4D] hover:scale-x-95 transition duration-500">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
