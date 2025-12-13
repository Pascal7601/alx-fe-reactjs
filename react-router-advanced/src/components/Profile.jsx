import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <Link to="details">profile details</Link> <br />
      <Link to="profile-settings">settings</Link>
      <Outlet />
    </div>
  );
}

export default Profile;
