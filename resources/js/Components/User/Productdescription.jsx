import React, { useState } from "react";

const Productdescription = ({ detail }) => {
    const [tabs, setTabs] = useState(true);
    return (
        <>
            <div className="tabs flex flex-wrap mt-6">
                <a
                    onClick={() => setTabs(true)}
                    className={`w-6/12 tab tab-lifted ${
                        tabs ? "tab-active" : ""
                    } `}
                >
                    Description
                </a>
                <a
                    onClick={() => setTabs(false)}
                    className={`w-6/12 tab tab-lifted ${
                        tabs ? "" : "tab-active"
                    } `}
                >
                    Share
                </a>
            </div>
            <div
                className={`${
                    tabs ? "mt-4 pb-10 mb-10 border-slate-800" : "hidden"
                } `}
            >
                {detail.description}
            </div>
            <div
                className={`${
                    tabs ? "hidden" : "mt-4 pb-10 mb-10 border-slate-800"
                } `}
            >
                <div className="flex flex-wrap -m-1">
                    <div className="w-6/12 p-1">
                        <button className="rounded btn btn-ghost bg-slate-800 w-full capitalize">
                            Sent
                        </button>
                    </div>
                    <div className="w-6/12 p-1">
                        <button className="rounded btn btn-ghost bg-slate-800 w-full capitalize">
                            Share
                        </button>
                    </div>
                    <div className="w-6/12 p-1">
                        <button className="rounded btn btn-ghost bg-slate-800 w-full capitalize">
                            Line
                        </button>
                    </div>
                    <div className="w-6/12 p-1">
                        <button className="rounded btn btn-ghost bg-slate-800 w-full capitalize">
                            tweet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productdescription;
