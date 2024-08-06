"use client";

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

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

const SidebarRoutes = () => {
    const routes = guestRoutes

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