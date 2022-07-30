import ListProduct from "@/Components/User/Listproduct";
import Guest, { getchart } from "@/Layouts/Guest";
import React, { useState } from "react";

export default function AllProducts(props) {
    const [chart, setChart] = useState(getchart());
    return (
        <Guest header="All Products" chart={chart} setChart={setChart}>
            <div className="mt-6"></div>
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold">
                    <span className="text-primary">All</span> Products
                </h3>
            </div>
            <hr className="mt-3 mb-6" />
            <ListProduct products={props.products} />
        </Guest>
    );
}
