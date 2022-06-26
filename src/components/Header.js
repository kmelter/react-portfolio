import React from "react";
import cosmos from "../assets/images/cosmos.jpg";

export default function Header() {
    return (
        <div>
            <h1>Kevin Melter</h1>
            <img src={cosmos} alt="" />
            <div>Welcome to my portfolio!</div>
        </div>
    );
}