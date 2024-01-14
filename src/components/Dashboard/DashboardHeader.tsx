import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react";

import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
export default function DashboardHeader() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    // Implement your search logic here using the searchTerm
    console.log("Searching for:", searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the search term to the parent component or handle it as needed
    handleSearch();
  };

  return (
    <header className="flex items-center justify-between bg-slate-100 px-8 h-[8vh] py-1 border-y border-slate-300 shadow-sm">
      {/* left side  */}
      <div className="flex items-center gap-4">
        <button>
          <History className="w-5 h-5 rotate-180" />
        </button>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <div className="flex w-full max-w-sm items-center gap-1.5 bg-gray-300 rounded-md ">
            <button type="submit" className="px-2">
              <Search className="w-4 h-4 text-gray-500 " />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target?.value)}
              placeholder="Search in customers "
              className="px-3 py-2 text-sm focus:ring-0 focus:outline-none bg-gray-300 rounded-md "
            />
          </div>
        </form>
      </div>
      {/* right sides icons */}

      <TooltipProvider>
        <div className="flex items-center space-x-3">
          <div className="pr-2 border-r border-gray-300">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-blue-500 p-1 rounded-md">
                  <Plus className="w-4 h-4 text-gray-50" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:bg-slate-200 p-1 rounded-md">
                <Users className="w-4 h-4 text-gray-800" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Users</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:bg-slate-200 p-1 rounded-md">
                <Bell className="w-4 h-4 text-gray-800" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="hover:bg-slate-200 p-1 rounded-md">
                <Settings className="w-4 h-4 text-gray-800" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 ">
              <span>Bashar</span>
              <ChevronDown />
            </button>
            <button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
            <button>
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </TooltipProvider>
    </header>
  );
}
