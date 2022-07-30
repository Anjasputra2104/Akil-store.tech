import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import Drawer from "@/Components/Admin/Drawer";
import Navbar from "@/Components/User/Navbar";
import Nav from "@/Components/Admin/Nav";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 font-[poppins]">
            <Drawer>
                <Nav />
                <div className="py-4 px-6">{children}</div>
            </Drawer>
        </div>
    );
}
