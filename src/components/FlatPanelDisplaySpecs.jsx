import TABLE from "../assets/images/Table2.png";
import DOWNLOAD from "../assets/icons/download.png";

const FlatPanelDisplaySpecs = () => {
    return (
        <div className="flex flex-col px-20 pb-20">
            <div className="font-roboto uppercase text-xl font-medium text-[#212529] pb-5">
                <span>Specifications</span>
            </div>
            <div>
                <img src={TABLE} alt="" />
            </div>
            <div className="w-full mt-20 px-10 flex flex-col items-start">
                <div className="pt-5 border-t border-[#BCB7B7] text-left">
                    <span className="uppercase font-roboto text-xl">download</span>
                </div>
                <div className="pt-2">
                    <button className="text-[#FFFFFF] bg-[#292639] py-2 px-6 text-[0.8rem] uppercase text-xs font-roboto flex items-center gap-2">
                        <span>Download literature</span>
                        <img src={DOWNLOAD} className="w-3" alt="" />                        
                    </button>
                </div>
            </div>
        </div>
    )
};

export default FlatPanelDisplaySpecs;