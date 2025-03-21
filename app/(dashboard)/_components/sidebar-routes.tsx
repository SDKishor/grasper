"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes =[
    {
        icon: Layout,
        label: "Deshboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
]

const teacherRoutes =[
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics",
    },
]

const SidebarRoutes = () => {
    const pathname = usePathname()

    const isTeacherPage = pathname?.includes("/teacher")
    const routes = isTeacherPage ? teacherRoutes: guestRoutes 

    return ( 
        <div className="flex flex-col w-full">
            {routes.map((routes)=>(
                <SidebarItem
                key={routes.href}
                icon={routes.icon}
                label={routes.label}
                href={routes.href}
                />
            ))}
        </div>
     );
}
 
export default SidebarRoutes;