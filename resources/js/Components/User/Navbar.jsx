import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

const Navbar = ({ chart, setChart }) => {
    const { component } = usePage();
    const deleteItem = (idProduct) => {
        const filter = chart.filter((element, index) => {
            return element.idProduct !== idProduct;
        });
        setChart(filter);
    };
    return (
        <div className="bg-slate-800 text-white mb-6 sticky top-0 z-50">
            <div className="navbar max-w-5xl mx-auto justify-between">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle"
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
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
                        >
                            <li>
                                <Link href={route("homepage")}>Homepage</Link>
                            </li>
                            <li>
                                <Link href={route("allproducts")}>
                                    All Product
                                </Link>
                            </li>
                            <li>
                                <label htmlFor="category">Category</label>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link
                        href={route("homepage")}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        QuertyShop
                    </Link>
                </div>
                <div className="navbar-end lg:w-auto">
                    {/* category */}
                    <label
                        htmlFor="category"
                        tabIndex="0"
                        className="btn btn-ghost rounded-btn lg:flex items-center gap-2 hidden"
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
                        <div>Category</div>
                    </label>
                    <input
                        type="checkbox"
                        id="category"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label
                                htmlFor="category"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <h3 className="text-lg font-bold">Category</h3>
                            <p className="py-4">Coming Soon...</p>
                        </div>
                    </div>
                    {/* seacrh */}
                    <div className="hidden lg:form-control mx-8">
                        <div className="input-group">
                            <label
                                htmlFor="seacrh"
                                className="btn btn-square bg-slate-800 bordered"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </label>
                            <input
                                id="seacrh"
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered bg-slate-800 w-80"
                            />
                        </div>
                    </div>
                    {/* Notification */}
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-ghost btn-circle"
                    >
                        <div className="indicator">
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
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item animate-pulse"></span>
                        </div>
                    </label>
                    <input
                        type="checkbox"
                        id="my-modal-3"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label
                                htmlFor="my-modal-3"
                                className="btn btn-sm btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                            <h3 className="text-lg font-bold">Notification</h3>
                            <p className="py-4">
                                You've been selected for a chance to get one
                                year of subscription to use Wikipedia for free!
                            </p>
                        </div>
                    </div>
                    {/* menu */}
                    <div className="lg:dropdown dropdown-end hidden">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost rounded-btn flex items-center gap-2"
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
                            <div>Menu</div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                        >
                            <li>
                                <Link href={route("homepage")}>Homepage</Link>
                            </li>
                            <li>
                                <Link href={route("allproducts")}>
                                    All Product
                                </Link>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                    {component === "User/Checkout" ? (
                        ""
                    ) : (
                        <>
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex="0"
                                    className="btn btn-ghost btn-circle"
                                >
                                    <div className="indicator">
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
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">
                                            {chart.length}
                                        </span>
                                    </div>
                                </label>
                                <div
                                    tabIndex="0"
                                    className="mt-3 card card-compact dropdown-content w-80 lg:w-96 bg-slate-800 shadow"
                                >
                                    <div className="card-body">
                                        <span className="font-bold text-lg">
                                            Chart
                                        </span>
                                        <ul>
                                            {chart.map((data, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between mb-3"
                                                    >
                                                        <div className="flex gap-3 items-start">
                                                            <div className="w-20 h-20">
                                                                <img
                                                                    className="bg-cover h-full w-full shadow-xl rounded"
                                                                    src={
                                                                        "/storage/" +
                                                                        `${data.cover}`
                                                                    }
                                                                    alt="Shoes"
                                                                />
                                                            </div>
                                                            <div>
                                                                <Link
                                                                    href={route(
                                                                        "productdetail.show",
                                                                        {
                                                                            id: data.idProduct,
                                                                        }
                                                                    )}
                                                                    className="text-primary font-medium text-2xl mt-0"
                                                                >
                                                                    {data.name}
                                                                </Link>
                                                                <div className="font-bold">
                                                                    Rp.{" "}
                                                                    {
                                                                        data.prices
                                                                    }
                                                                </div>
                                                                <div>
                                                                    Qty :{" "}
                                                                    <span className="font-bold">
                                                                        {
                                                                            data.qty
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button
                                                                value={
                                                                    data.idProduct
                                                                }
                                                                onClick={() =>
                                                                    deleteItem(
                                                                        data.idProduct
                                                                    )
                                                                }
                                                                className="btn btn-xs btn-error text-white font-bold hover:bg-red-500 border-none"
                                                            >
                                                                delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                        <span className="text-info text-center">
                                            {chart.length > 0
                                                ? `Subtotal : Rp. ${chart
                                                      .map(
                                                          (data) => data.prices
                                                      )
                                                      .reduce((a, b) => a + b)}`
                                                : ""}
                                        </span>
                                        <div className="card-actions">
                                            <Link
                                                href={route("checkout")}
                                                className="btn btn-primary btn-block"
                                            >
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
