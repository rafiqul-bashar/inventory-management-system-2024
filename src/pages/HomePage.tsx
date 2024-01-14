import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "./Admin/Dashboard/DashboardLayout";

export default function HomePage() {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
