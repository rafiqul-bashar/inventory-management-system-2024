import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardHomeNavbar() {
  const { pathname } = useLocation();
  const navlinks = [
    {
      path: "/dashboard/home/overview",
      text: "Dashboard",
    },
    {
      path: "/dashboard/home/getting-started",
      text: "Getting Started",
    },
    { path: "/dashboard/home/recentupdate", text: "Recent Updates" },

    {
      path: "/dashboard/home/announcement",
      text: "Announcement",
    },
  ];
  return (
    <div>
      <nav className="sticky flex items-center space-x-4 my-2">
        {navlinks.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`py-2 px-4 text-gray-700 border-b font-medium text-base  ${
              pathname === item.path
                ? "border-blue-500 border-b "
                : " border-transparent"
            } `}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
