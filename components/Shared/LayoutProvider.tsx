"use client"

import type React from "react"
import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import AdminTopBar from "./AdminTopbar"



interface LayoutProviderProps {
  children?: React.ReactNode
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex bg-[#F6F6F6] min-h-screen">
      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 overflow-auto lg:ml-[300px] xl:ml-[350px]">
        <AdminTopBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="">{children}</div>
      </div>
    </div>
  )
}
