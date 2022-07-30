import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Table = (props) => {
    return (
        <div className="overflow-scroll">
            <table className="table-auto w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200 text-black">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            No
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Cover
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Name
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Price
                        </th>
                        <th className="w-full p-3 text-sm font-semibold tracking-wide text-left">
                            Description
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {props.products.map((data, index) => {
                        return (
                            <tr
                                key={index}
                                className="border-b border-gray-200"
                            >
                                <td className="p-3 text-sm text-gray-700 text-center">
                                    {index + 1}
                                </td>
                                <td className="p-3 text-sm text-gray-700">
                                    <div className="w-32">
                                        <img
                                            className="w-full"
                                            src={"/storage/" + `${data.cover}`}
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td className="p-3 text-sm text-gray-700">
                                    {data.name}
                                </td>
                                <td className="p-3 text-sm text-gray-700">
                                    {data.price}
                                </td>
                                <td className="p-3 text-sm text-gray-700">
                                    {data.description}
                                </td>
                                <td className="p-3 text-sm text-gray-700 bg-slate-50">
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            as="button"
                                            href={route("products.edit", {
                                                id: data.id,
                                            })}
                                            method="get"
                                            className="btn btn-xs btn-success w-full rounded-md text-white font-medium"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            as="button"
                                            href={route("products.destroy", {
                                                id: data.id,
                                            })}
                                            method="delete"
                                            className="btn btn-xs btn-error w-full rounded-md text-white font-medium hover:scale-105 transition-all duration-75"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
