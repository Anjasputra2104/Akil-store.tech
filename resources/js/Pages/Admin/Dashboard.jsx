import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Breadchumb from "@/Components/Admin/Breadchumb";

export default function Dashboard(props) {
    console.log(props);
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />
            <Breadchumb menu="Dashboard" />
            <div className="bg-[#1B2B65] text-white font-semiboldbold text-3xl py-20 px-8 rounded-lg text-center shadow-lg">
                You are now on the <b>Admin Dashboard</b>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <Link
                    href={route("products.index")}
                    className="bg-slate-200 text-center py-8 rounded-md shadow transition-all duration-300 ease-in-out text-slate-800 font-semibold text-xl hover:translate-x-1 hover:-translate-y-1"
                >
                    {props.product}
                    <div className="font-normal text-base text-slate-500 mt-2">
                        Products
                    </div>
                </Link>
                <Link
                    href={route("paymentmethod.index")}
                    className="bg-slate-200 text-center py-8 rounded-md shadow transition-all duration-300 ease-in-out hover:translate-x-1 hover:-translate-y-1 text-slate-800 font-semibold text-xl"
                >
                    {props.payment}
                    <div className="font-normal text-base text-slate-500 mt-2">
                        Payment Account
                    </div>
                </Link>
                <Link
                    href={route("whatsapp.index")}
                    className="bg-slate-200 text-center py-8 rounded-md shadow transition-all duration-300 ease-in-out hover:translate-x-1 hover:-translate-y-1 text-slate-800 font-semibold text-xl"
                >
                    {props.whatsappNumber[0].number}
                    <div className="font-normal text-base text-slate-500 mt-2">
                        Whatsapp Number
                    </div>
                </Link>
            </div>
        </Authenticated>
    );
}
