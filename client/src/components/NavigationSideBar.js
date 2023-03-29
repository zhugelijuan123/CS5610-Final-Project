import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split("/");
    const active = paths[1];
    console.log(paths);
    return (
        <div className="container">
            <div className="list-group mb-3">
                <Link
                    to="/home"
                    className={`list-group-item ${active === "home" || active === "search" || active === "details" ? "active" : ""}`}
                >
                    Home
                </Link>
                <Link
                    to="/profile"
                    className={`list-group-item ${active === "profile" ? "active" : ""}`}
                >
                    Profile
                </Link>
            </div>
        </div>

    );
};
export default NavigationSidebar;
