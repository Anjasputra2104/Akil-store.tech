import Breadchumb from "@/Components/Admin/Breadchumb";
import Table from "@/Components/Admin/Table";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Product" />
            <Breadchumb menu="Products" />
            <div className="flex justify-end mb-4">
                <Link
                    href={route("products.create")}
                    as="button"
                    className="btn btn-primary"
                >
                    Add Product
                </Link>
            </div>
            <Table products={props.products} />
        </Authenticated>
    );
}
