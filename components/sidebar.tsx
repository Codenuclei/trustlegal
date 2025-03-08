import React, { useState } from 'react';
import { X, Home, ChevronLeft, ChevronRight, Inbox, Pen, Mail } from 'lucide-react';
import Link from 'next/link';

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative flex h-full">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-[#192841] text-white transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-0"
        } lg:relative`}
      >
        {sidebarOpen && (
          <>
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#9e814d]/20">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#9e814d] to-[#c0a978] flex items-center justify-center">
                  <span className="font-bold text-white">LF</span>
                </div>
                <span className="ml-2 font-semibold">LAWFIRM</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white hover:text-[#9e814d]">
                <X size={20} />
              </button>
            </div>

            <nav className="px-2 py-4 overflow-y-auto">
              <div className="space-y-1">
                {[
                  { name: "Home", icon: Home, href: "/dashboard" },
                  { name: "Inbox", icon: Inbox, href: "/inbox" },
                  { name: "Blogs", icon: Pen, href: "/blog" },
                  { name: "Newsletters", icon: Mail, href: "/news" },
                  // { name: "Documents", icon: FileText, href: "#" },
                  // { name: "Clients", icon: Users, href: "#" },
                  // { name: "Settings", icon: Settings, href: "#" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-2.5 text-sm font-medium rounded-md text-white hover:bg-[#9e814d]/10 group transition-colors"
                  >
                    <item.icon className="mr-3 h-5 w-5 text-[#9e814d] group-hover:text-[#c0a978] transition-colors" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="absolute bottom-0 w-full p-4 border-t border-[#9e814d]/20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-[#9e814d]/20 flex items-center justify-center">
                    <span className="font-medium text-[#9e814d]">JD</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-xs text-gray-300">Senior Partner</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content area with toggle button */}
      <div className="flex-1 min-w-0 relative">
        {/* Toggle button - always visible */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 left-4 z-40 flex items-center justify-center h-10 w-10 rounded-md bg-[#192841] text-white shadow-md hover:bg-[#9e814d] transition-colors focus:outline-none"
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default SideBar;