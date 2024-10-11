"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/home" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/home" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/home" ? "text-primary" : ""}`}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="/orders" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/orders" ? "text-primary" : ""}`}>
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link href="/products" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/products" ? "bg-muted text-primary" : "text-muted-foreground"}`}>
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link href="/customers" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/customers" ? "text-primary" : ""}`}>
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link href="/analytics" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === "/analytics" ? "text-primary" : ""}`}>
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
