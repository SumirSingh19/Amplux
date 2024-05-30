const OutdoorCabinets = () => {
    return (
        <div className="flex flex-col mb-32">
            <div className="flex flex-col gap-5 pb-20">
                <div className="text-2xl">
                    <span>OUTDOOR</span>
                </div>
                <div className="text-base font-roboto text-[#4D4D4D] w-8/12 tracking-wider">
                    <span>
                        Experience unmatched outdoor visual brilliance and durability with our OUTDOOR Active LED Panel Display.
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-10">
                <div className="text-base font-roboto text-[#4D4D4D]">
                    <ul className="list-disc pl-5 flex flex-col gap-5 w-9/12">
                        <li>
                            <span>Transform outdoor spaces with vivid visuals and exceptional performance.</span>
                        </li>
                        <li className="w-11/12">
                            <span>Engineered for outdoor use with weather-resistant design and durable construction.</span>
                        </li>
                        <li className="w-11/12">
                            <span>Advanced features include high brightness and anti-glare technology for optimal visibility in sunlight.</span>
                        </li>
                        <li>
                            <span>Ideal for outdoor advertising, stadiums, outdoor events, and public displays.</span>
                        </li>
                        <li className="w-10/12">
                            <span>Ensure reliability and longevity with our OUTDOOR Active LED Panel Display.</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-7 pb-24">
                    <div className="text-2xl">
                        <span>Models:</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="border border-[#D3D3D3] py-3.5 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (6 )</span>
                        </div>
                        <div className="border border-[#D3D3D3] py-3.5 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (8 )</span>
                        </div>
                        <div className="border border-[#D3D3D3] py-3.5 px-6 font-roboto text-base bg-[#888888] text-white cursor-pointer">
                            <span>Pixel pitch (10)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OutdoorCabinets;