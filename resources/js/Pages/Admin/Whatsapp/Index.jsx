import Breadchumb from "@/Components/Admin/Breadchumb";
import TableWhatsapp from "@/Components/Admin/TableWhatsapp";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Whatsapp Number" />
            <Breadchumb menu="Whatsapp Number" />
            <div className="flex justify-end mb-4">
                <Link
                    href={route("whatsapp.create")}
                    as="button"
                    className="btn btn-primary"
                >
                    Add Whatsapp Number
                </Link>
            </div>
            <TableWhatsapp whatsapp={props.whatsapp} />
        </Authenticated>
    );
}
