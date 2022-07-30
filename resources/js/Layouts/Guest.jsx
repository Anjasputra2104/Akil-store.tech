import Announ from "@/Components/User/Announ";
import Footer from "@/Components/User/Footer";
import Navbar from "@/Components/User/Navbar";
import Services from "@/Components/User/Services";
import { Head, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export const getchart = () => {
    const data = localStorage.getItem("chart");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

export default function Guest({ children, header, chart, setChart }) {
    const { announ } = usePage().props;

    useEffect(() => {
        localStorage.setItem("chart", JSON.stringify(chart));
    }, [chart]);

    return (
        <div className="min-h-screen bg-neutral text-white">
            <Head title={header} />
            <Navbar chart={chart} setChart={setChart} />
            <div className="max-w-5xl mx-auto px-2 lg:px-0">
                <Announ announ={announ} />
                {children}
                <div className="divider mt-10"></div>
            </div>
            <Services />
            <div className="mx-auto mt-10">
                <Footer />
            </div>
        </div>
    );
}
