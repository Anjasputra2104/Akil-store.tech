import Breadchumb from "@/Components/Admin/Breadchumb";
import TableAnnouncement from "@/Components/Admin/TableAnnoun";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Announcements" />
            <Breadchumb menu="Announcements" />
            <div className="flex justify-end mb-4">
                <Link
                    href={route("announcement.create")}
                    as="button"
                    className="btn btn-primary"
                >
                    Add Announcement
                </Link>
            </div>
            <TableAnnouncement Announcement={props.announ} />
        </Authenticated>
    );
}
