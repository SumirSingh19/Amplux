import TABLE from "../assets/images/Table1.png";

const AllInOneLEDSpecifications = () => {
    return (
        <div className="flex flex-col px-20 pb-20">
            <div className="font-roboto uppercase text-xl font-medium text-[#212529] pb-5">
                <span>Specifications</span>
            </div>
            <div>
                <img src={TABLE} alt="" />
            </div>
            <div className="w-full mt-20 px-10">
                <div className="pt-5 border-t border-[#BCB7B7]">
                    <span className="uppercase font-roboto text-xl">download</span>
                </div>
                <div className="pt-2">
                    <button className="text-[#FFFFFF] bg-[#292639] py-2 px-6 text-[0.8rem] uppercase text-xs font-roboto">
                        <img src="" alt="" />
                        <span>Download literature</span>
                        
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AllInOneLEDSpecifications;