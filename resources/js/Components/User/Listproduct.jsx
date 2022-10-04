import { Link } from "@inertiajs/inertia-react";
import React from "react";

const ListProduct = (props) => {
    // console.log(props);
    return (
        <div className="flex flex-wrap -m-2 lg:-m-3">
            {props.products.map((data, index) => {
                return (
                    <Link
                        key={index}
                        href={route("productdetail.show", { id: data.id })}
                        className="w-6/12 sm:w-3/12 md:w-4/12 lg:w-2/12 p-2 lg:p-3"
                    >
                        <div className="bg-slate-800 rounded shadow-xl overflow-hidden transition-all duration-200 hover:scale-105 group">
                            <div className="h-32 group-hover:saturate-150 group-hover:contrast-125">
                                <img
                                    className="h-32 rounded w-full"
                                    src={"storage/" + `${data.cover}`}
                                    alt={data.name}
                                />
                            </div>
                            <div className="text-center my-1">
                                <h2 className="text-primary uppercase font-semibold">
                                    {data.name}
                                </h2>
                                <h3 className="font-bold">Rp. {data.price}</h3>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ListProduct;
