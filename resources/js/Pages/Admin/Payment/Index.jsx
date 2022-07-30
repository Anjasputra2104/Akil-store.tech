import Breadchumb from "@/Components/Admin/Breadchumb";
import TablePayment from "@/Components/Admin/TablePayment";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Payment Method" />
            <Breadchumb menu="Payment" />
            <div className="flex justify-end mb-4">
                <Link
                    href={route("paymentmethod.create")}
                    as="button"
                    className="btn btn-primary"
                >
                    Add Payment Method
                </Link>
            </div>
            <TablePayment payment={props.payment} />
        </Authenticated>
    );
}
