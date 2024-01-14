import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  CreditCard,
  ShoppingCart,
  Share2,
  BarChart2,
  FileText,
  ChevronLeft,
} from "lucide-react";
export default function DasboardSidebar() {
  const { pathname } = useLocation();
  const sidebarLinks = [
    // {
    //   path: "/dashboard/home/overview",
    //   text: "Home",
    //   icon: <Home size={18} />,
    // },
    {
      path: "/dashboard/inventory",
      text: "Inventory",
      icon: <Package size={18} />,
    },
    { path: "/dashboard/sales", text: "Sales", icon: <CreditCard size={18} /> },
    // {
    //   path: "/dashboard/sales",
    //   text: "Purchases",
    //   icon: <ShoppingCart size={18} />,
    // },
    {
      path: "/dashboard/integrations",
      text: "Integrations",
      icon: <Share2 size={18} />,
    },
    {
      path: "/dashboard/reports",
      text: "Reports",
      icon: <BarChart2 size={18} />,
    },
    {
      path: "/dashboard/documents",
      text: "Documents",
      icon: <FileText size={18} />,
    },
  ];
  return (
    <>
      <aside className="flex flex-col w-60 min-h-screen bg-gray-900 text-slate-100 justify-between ">
        {/* Logo */}
        <div className="flex flex-col items-between  ">
          <div className="flex gap-2 items-center p-3 bg-gray-800">
            <ShoppingCart />
            <h2 className="font-semibold text-xl">Inventory</h2>
          </div>
          {/* Top Part */}

          <nav className="flex flex-col gap-4 p-2">
            <NavLink
              to={"/dashboard/home/overview"}
              className={`flex items-center py-2 px-4 text-white  ${
                pathname.includes("/home")
                  ? "bg-blue-500 text-white rounded-md hover:brightness-90"
                  : "hover:bg-gray-700"
              } `}
            >
              <span className="mr-2">
                <Home size={18} />
              </span>
              <span className="text-sm">Home</span>
            </NavLink>
            {sidebarLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link?.path}
                // activeClassName="bg-blue-500 text-white"
                className={`flex items-center py-2 px-4 text-white  ${
                  pathname === link.path
                    ? "bg-blue-500 text-white rounded-md hover:brightness-90"
                    : "hover:bg-gray-700"
                } `}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                <span className="text-sm">{link.text}</span>
              </NavLink>
            ))}
          </nav>
          {/* bottom */}
        </div>
        <div className="flex   bg-gray-950 space-x-2 p-3 ">
          <ChevronLeft />
        </div>
      </aside>
    </>
  );
}
