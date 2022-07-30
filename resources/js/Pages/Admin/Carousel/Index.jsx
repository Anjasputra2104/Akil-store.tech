import Breadchumb from "@/Components/Admin/Breadchumb";
import TableCarousel from "@/Components/Admin/TableCarousel";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Carousel Method" />
            <Breadchumb menu="Carousel" />
            <div className="flex justify-end mb-4">
                <Link
                    href={route("carousel.create")}
                    as="button"
                    className="btn btn-primary"
                >
                    Add Carousel
                </Link>
            </div>
            <TableCarousel carousel={props.carousel} />
        </Authenticated>
    );
}
