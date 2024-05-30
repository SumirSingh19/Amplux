const IndoorCabinets = () => {
    return (
        <div className="flex flex-col mb-32">
            <div className="flex flex-col gap-5 pb-20">
                <div className="text-2xl">
                    <span>INDOOR</span>
                </div>
                <div className="text-base font-roboto text-[#4D4D4D] w-8/12">
                    <span>
                        Elevate indoor environments with our Indoor Active LED Panel Display, 
                        delivering vibrant visuals, advanced features, and unparalleled performance.
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-base font-roboto text-[#4D4D4D]">
                    <ul className="list-disc pl-5 flex flex-col gap-5 w-8/12">
                        <li>
                            <span>Elevate indoor environments with vibrant visuals and unparalleled performance.</span>
                        </li>
                        <li className="w-11/12">
                            <span>Advanced features include low Blue Light emission and Flicker Free technology for enhanced user comfort.</span>
                        </li>
                        <li>
                            <span>Perfect for corporate presentations, educational seminars, and entertainment venues.</span>
                        </li>
                        <li>
                            <span>Sleek design seamlessly blends into any indoor setting.</span>
                        </li>
                        <li>
                            <span>Experience immersive visual solutions with our INDOOR Active LED Panel Display.</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-7 pb-24">
                    <div className="text-2xl">
                        <span>Models:</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="border border-[#D3D3D3] py-3 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (1.5 )</span>
                        </div>
                        <div className="border border-[#D3D3D3] py-3 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (2.5 )</span>
                        </div>
                        <div className="border border-[#D3D3D3] py-3 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (3.9)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndoorCabinets;