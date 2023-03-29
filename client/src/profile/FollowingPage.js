import React from "react";
import UsersList from "../components/UsersList";
import BackButtonComponent from "../components/BackButtonComponent";

const FollowingPage = () => {
    return (
        <div>
            <BackButtonComponent/>
            <h1>Following</h1>
            <UsersList/>
        </div>
    )
}

export default FollowingPage;