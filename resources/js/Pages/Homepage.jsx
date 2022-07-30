import ListProduct from "@/Components/User/Listproduct";
import Guest, { getchart } from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

import Carousel from "@/Components/User/Carousel";

export default function Homepage(props) {
    const [chart, setChart] = useState(getchart());
    return (
        <Guest
            props={props}
            chart={chart}
            setChart={setChart}
            header="Homepage"
        >
            <div className="mt-6"></div>
            {props.carousel.length > 0 && (
                <Carousel carousel={props.carousel} />
            )}
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold">
                    <span className="text-primary">New</span> Products
                </h3>
                <Link
                    href={route("allproducts")}
                    className="btn btn-xs btn-primary "
                >
                    All Product ⇨
                </Link>
            </div>
            <hr className="mt-3 mb-6" />
            <ListProduct products={props.products} />
        </Guest>
    );
}
