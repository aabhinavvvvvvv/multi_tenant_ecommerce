"use client";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const NavbarItem = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium">
      <Button
        asChild
        variant={"outline"}
        className={cn(
          "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
          isActive && "bg-black text-white hover:bg-black hover:text-white"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </div>
  );
};

const navbarItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];
export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-20 flex border-b justify-between font-medium bg-white">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium"
          >
            <span className="text-xl font-semibold">
              <span className={poppins.className}>FunRoad</span>
            </span>
          </Link>
        </div>
        <div className="items-center gap-2 lg:flex hidden">
          {navbarItems.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                href={item.href}
                isActive={pathname === item.href}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center ">
          <Button
            variant={"secondary"}
            asChild
            className="border-l-0 border-r-0 border-t-0 px-12 border-b-0 h-full rounded-none  hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            variant={"secondary"}
            asChild
            className="border-l border-r-0 border-t-0 px-12 border-b-0 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href="/signup">Start Selling</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-3 mt-5 items-center"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};
