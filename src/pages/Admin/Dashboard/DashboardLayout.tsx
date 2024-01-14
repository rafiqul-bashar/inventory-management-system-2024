import React from "react";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import DasboardSidebar from "../../../components/Dashboard/DasboardSidebar";

import { Outlet } from "react-router-dom";
import DashboardHomeNavbar from "@/components/Dashboard/DashboardHomeNavbar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <DasboardSidebar />
      <main className="w-full min-h-screen bg-slate-50">
        <DashboardHeader />
        <DashboardHomeNavbar />
        <div className="bg-gray-100 p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
