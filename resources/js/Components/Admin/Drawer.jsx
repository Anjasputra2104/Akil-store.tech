import React from "react";
import DrawerItem from "./DrawerItem";

const Drawer = ({ children }) => {
    return (
        <div className="drawer drawer-mobile bg-base-100 shadow-md">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-100">{children}</div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <DrawerItem />
            </div>
        </div>
    );
};

export default Drawer;
