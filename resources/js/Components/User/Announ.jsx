import React from "react";

const Announ = ({ announ }) => {
    return (
        <div className="alert bg-slate-800 text-white rounded-md shadow-xl py-3">
            <div className="w-full">
                <div className="lg:bg-slate-700 flex gap-1 py-1 px-3 rounded mr-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info flex-shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span className="hidden sm:block">Announcement</span>
                </div>
                <marquee className="w-full inline-flex">
                    {announ[0] ? announ[0].announcement : null}
                </marquee>
            </div>
        </div>
    );
};

export default Announ;
