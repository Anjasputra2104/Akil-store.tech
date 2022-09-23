import React from "react";
import background from "../../../../public/storage/images/waves/waves.png";
import hand from "../../../../public/storage/images/icon/hand.svg";
import cash from "../../../../public/storage/images/icon/cash.svg";
import whatsapp from "../../../../public/storage/images/icon/whatsapp.svg";

const Services = () => {
    return (
        <div
            className="bg-no-repeat bg-local min-h-screen -mt-48 -mb-10"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="max-w-5xl mx-auto pt-60 px-10 sm:px-4 sm:pt-96">
                <h2 className="block text-center text-lg lg:text-2xl">
                    Why Buy On <b>QuertyShop</b> ?
                </h2>
                <div className="flex flex-wrap mt-16 gap-y-4">
                    <div className="w-full group sm:w-4/12 sm:-mx-4 sm:px-4">
                        <div className="flex gap-2 items-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon h-12 fill-primary bg-white p-2 lg:px-2.5 lg:group-hover:px-2.5 rounded-full group-hover:p-1.5 transition-all duration-150 ease-in-out"
                                viewBox="0 0 512 512"
                            >
                                <title>Logo Whatsapp</title>
                                <path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Easy to Order
                                </h3>
                                <p className="text-xs mt-4">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="w-full group sm:w-4/12 sm:-mx-4 sm:px-4">
                        <div className="flex gap-2 items-start group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon h-12 text-primary bg-white p-2 lg:px-2.5 lg:group-hover:px-2.5 rounded-full group-hover:p-1.5 transition-all duration-150 ease-in-out"
                                viewBox="0 0 512 512"
                            >
                                <title>Hand Left</title>
                                <path
                                    d="M80 320V144a32 32 0 0132-32h0a32 32 0 0132 32v112M144 256V80a32 32 0 0132-32h0a32 32 0 0132 32v160M272 241V96a32 32 0 0132-32h0a32 32 0 0132 32v224M208 240V48a32 32 0 0132-32h0a32 32 0 0132 32v192"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                                <path
                                    d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                            </svg>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Fast Respond
                                </h3>
                                <p className="text-xs mt-4">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="w-full group sm:w-4/12 sm:-mx-4 sm:px-4">
                        <div className="flex gap-2 items-start group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon text-primary fill-primary h-12 p-2 lg:px-2.5 lg:group-hover:px-2.5 bg-white rounded-full group-hover:p-1.5 transition-all duration-150 ease-in-out"
                                viewBox="0 0 512 512"
                            >
                                <title>Happy</title>
                                <circle cx="184" cy="232" r="24" />
                                <path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" />
                                <circle cx="328" cy="232" r="24" />
                                <circle
                                    cx="256"
                                    cy="256"
                                    r="208"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                />
                            </svg>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Priceless
                                </h3>
                                <p className="text-xs mt-4">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
