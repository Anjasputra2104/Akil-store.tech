import { Link } from "@inertiajs/inertia-react";
import React from "react";

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
                        <div className="bg-blue-800 rounded-full font-bold px-3 py-1">
                            F
                        </div>
                        <div className="bg-sky-600 rounded-full font-bold px-3 py-1">
                            F
                        </div>
                        <div className="bg-gradient-to-tr from-orange-800 to-purple-700 rounded-full font-bold px-3 py-1">
                            I
                        </div>
                        <div className="bg-red-800 rounded-full font-bold px-3 py-1">
                            Y
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
