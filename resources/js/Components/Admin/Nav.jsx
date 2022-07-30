import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Nav = () => {
    return (
        <div className="navbar shadow-sm bg-white">
            <div className="flex-1">
                <label
                    htmlFor="my-drawer-2"
                    tabIndex="0"
                    className="btn btn-ghost btn-circle drawer-button lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </label>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge bg-slate-900 border-primary">
                                    New
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <Link
                                method="post"
                                as="button"
                                href={route("logout")}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
