import { Link } from "@inertiajs/inertia-react";
import React from "react";

// icons
import Whatsapp from "../../../../public/storage/images/icon/whatsapp.svg";

const Footer = () => {
    return (
        <>
            <div className="flex justify-center sm:justify-between max-w-5xl mx-auto items-center py-2">
                <div className="hidden sm:block navbar-center lg:flex-1">
                    <Link
                        href={route("homepage")}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        QuertyShop
                    </Link>
                </div>
                <div className="flex gap-3 items-center">
                    <div>Find Our In :</div>
                    <div className="flex gap-1">
                        <div className="">
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon h-10 bg-green-500 p-1.5 rounded-full fill-white hover:saturate-150"
                                    viewBox="0 0 512 512"
                                >
                                    <title>Whatsapp</title>
                                    <path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" />
                                </svg>
                            </a>
                        </div>
                        <div className="">
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon h-10 p-1.5 bg-gradient-to-tr from-orange-700 to-purple-600 fill-white rounded-full hover:saturate-150"
                                    viewBox="0 0 512 512"
                                >
                                    <title>Instagram</title>
                                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                </svg>
                            </a>
                        </div>
                        <div className="">
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon h-10 p-1.5 bg-blue-600 fill-white rounded-full hover:saturate-150"
                                    viewBox="0 0 512 512"
                                >
                                    <title>Facebook</title>
                                    <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" />
                                </svg>
                            </a>
                        </div>
                        <div className="">
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon bg-[#4B60FC] h-10 p-1.5 rounded-full hover:saturate-150 fill-white"
                                    viewBox="0 0 512 512"
                                >
                                    <title>Discord</title>
                                    <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
                                    <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-center px-10 sm:px-0 pt-8 pb-4 bg-slate-800 text-primary-content">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-10 mb-16">
                        <div>
                            <div className="font-semibold">About Us</div>
                            <div className="text-sm mt-6">
                                <p className="font-bold">
                                    Monday - Friday{" "}
                                    <span className="font-normal">
                                        (09.00 - 19.00)
                                    </span>
                                </p>
                                <p className="font-bold">
                                    Saturday - Week{" "}
                                    <span className="font-normal">
                                        (Slow Respond)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">Payment</div>
                            <div className="grid grid-cols-4 gap-2 justify-center mt-6">
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                                <div className="bg-white w-full p-4"></div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">Contact Us</div>
                            <div className="grid grid-cols-2 gap-2 mt-6">
                                <div className="btn btn-ghost btn-active w-full rounded-full py-0 capitalize text-xs">
                                    Call
                                </div>
                                <div className="btn btn-ghost btn-active w-full rounded-full py-0 capitalize text-xs">
                                    Whatsapp
                                </div>
                                <div className="btn btn-ghost btn-active w-full rounded-full py-0 capitalize text-xs">
                                    E-mail
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2">
                        <div className="sm:flex gap-4 items-center mx-auto sm:mx-0">
                            <div className="text-xs">
                                @2022 - <b>QuertyShop</b>
                            </div>
                            <div className="flex">
                                <div>
                                    <Link
                                        href={route("homepage")}
                                        className="text-xs text-primary px-2"
                                    >
                                        Home
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={route("allproducts")}
                                        className="text-xs text-primary px-2"
                                    >
                                        All Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs sm:text-right my-2 sm:my-0">
                            By Anjas
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
