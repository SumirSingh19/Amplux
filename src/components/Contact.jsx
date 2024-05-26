import { useState, useEffect, useRef } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

const Contact = () => {

    const [typedText, setTypedText] = useState('');
    const textToType = "Ready to take things to the next level? Get in touch!";
    const typingSpeed = 50; // Milliseconds per character
    const isMounted = useRef(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });

        const typingTimeout = setTimeout(() => {
            const typeText = async () => {
                for (let i = 0; i < textToType.length; i++) {
                    await new Promise(resolve => setTimeout(() => {
                        setTypedText(prevText => prevText + textToType.charAt(i));
                        resolve();
                    }, typingSpeed));
                }
            };

            typeText();
        }, 1500);

        return () => {
            clearTimeout(typingTimeout);
        };
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            setTypedText('');
        } else {
            isMounted.current = true;
        }
    }, [textToType]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex flex-col bg-[#f7f2f2] p-6 font-abel">
            <div className="mb-6 txt-left"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className='w-10/12 tracking-widest'>
                    <span className="text-9xl">{typedText}</span>
                </div>
                
            </div>
            <div className="w-full max-w-md"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='flex gap-4'>
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="NAME*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-[20rem] p-1 rounded-full border border-gray-600 bg-[#f7f2f2] focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-600 placeholder:text-xs placeholder:p-2 px-3"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="PHONE NUMBER*"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-[20rem] p-1 rounded-full border border-gray-600 bg-[#f7f2f2] focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-600 placeholder:text-xs placeholder:p-2 px-3"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="EMAIL*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-[41rem] p-1 rounded-full border border-gray-600 bg-[#f7f2f2] focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-600 placeholder:text-xs placeholder:p-2 px-3"
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="MESSAGE*"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-[41rem] p-1 h-40 rounded-lg border border-gray-600 bg-[#f7f2f2] focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-600 placeholder:text-xs placeholder:p-2"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            required
                            className="rounded-checkbox"
                        />
                        <label htmlFor="agreement" className="ml-2 text-sm">
                            I have read and accept the <span className='underline cursor-pointer'>privacy policy</span>
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-[10rem] p-2 bg-[#626365] text-white rounded-full hover:bg-[#717275] focus:outline-none focus:ring-2 focus:ring-[#626365]
                            hover:text-white hover:shadow-[inset_11rem_0_0_0] hover:shadow-[#454647] hover:scale-90 transition duration-700"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;