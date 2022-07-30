import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

const DrawerItem = () => {
    const { component } = usePage();

    return (
        <ul className="rounded-r overflow-y-auto w-60 bg-[#081A51] text-base-content">
            <div className="flex justify-center py-4">
                <a
                    href=""
                    className="text-[20px] text-white flex items-center gap-x-3 font-semibold"
                >
                    <div className="bg-blue-500 px-2 py-2 rounded-lg">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                                fill="white"
                            />
                            <path
                                d="M13 6L7 13H11V18L17 11H13V6Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    DashAdmin
                </a>
            </div>
            <div className="p-4 pr-0">
                <div className="mb-2 pl-4 uppercase text-blue-400 text-[10px]">
                    Main Menu
                </div>
                <li>
                    <Link
                        className={
                            component === "Admin/Dashboard"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("dashboard")}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V11ZM13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13Z"
                                fill="white"
                            />
                        </svg>
                        Dashboard
                    </Link>
                </li>
            </div>
            <div className="p-4 pt-2 pr-0">
                <div className="mb-2 pl-4 uppercase text-blue-400 text-[10px]">
                    Workspace
                </div>
                <li className="flex items-center">
                    <Link
                        className={
                            component === "Admin/Products/Index"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("products.index")}
                    >
                        <div className="flex items-center gap-x-2 hover:font-medium">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    stroke="#51CBFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                            </svg>
                            Product
                        </div>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link
                        className={
                            component === "Admin/Payment/Index"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("paymentmethod.index")}
                    >
                        <div className="flex items-center gap-x-2 hover:font-medium">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    stroke="#51CBFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                            </svg>
                            Payment Method
                        </div>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link
                        className={
                            component === "Admin/Whatsapp/Index"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("whatsapp.index")}
                    >
                        <div className="flex items-center gap-x-2 hover:font-medium">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    stroke="#51CBFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                            </svg>
                            Whatsapp Number
                        </div>
                    </Link>
                </li>
            </div>

            <div className="p-4 pt-2 pr-0">
                <div className="mb-2 pl-4 uppercase text-blue-400 text-[10px]">
                    Misc
                </div>
                <li className="flex items-center">
                    <Link
                        className={
                            component === "Admin/Announcement/Index"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("announcement.index")}
                    >
                        <div className="flex items-center gap-x-2 hover:font-medium">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    stroke="#51CBFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                            </svg>
                            Announcement
                        </div>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link
                        className={
                            component === "Admin/Carousel/Index"
                                ? "bg-[#1B2B65] text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md text-white gap-x-2 rounded-r-none"
                                : "text-[14px] py-3 px-3 font-medium flex items-center grow rounded-l-md gap-x-2 rounded-r-none"
                        }
                        href={route("carousel.index")}
                    >
                        <div className="flex items-center gap-x-2 hover:font-medium">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    stroke="#51CBFF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="3"
                                    stroke="#CCD2E3"
                                    strokeWidth="2"
                                />
                            </svg>
                            Carousel
                        </div>
                    </Link>
                </li>
            </div>
        </ul>
    );
};

export default DrawerItem;
