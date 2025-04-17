"use client";
import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

const poppins = Poppins({ subsets: ['latin'],weight:["700"] })

const SidebarItem = ({href,children,isActive}:{
    href:string,
    children:React.ReactNode,
    isActive?:boolean
}) => {
    return <div className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium">
        <Button asChild variant={"outline"} className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg w-full justify-start",
            isActive && "bg-black text-white hover:bg-black hover:text-white"
         )}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    </div>
}

const navbarItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
]

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const pathname = usePathname()

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="fixed inset-y-0 right-0 w-64 bg-white p-4">
                <div className="flex justify-between items-center mb-4">
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-6 w-6" />
                    </Button>
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-semibold">
                            <span className={poppins.className}>FunRoad</span>
                        </span>
                    </Link>
                </div>
                <div className="flex flex-col space-y-2">
                    {navbarItems.map((item, index) => (
                        <SidebarItem 
                            key={index} 
                            href={item.href} 
                            isActive={pathname === item.href}
                        >
                            {item.label}
                        </SidebarItem>
                    ))}
                </div>
                <div className="mt-4 space-y-2">
                    <Button variant={"secondary"} asChild className="w-full">
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button variant={"secondary"} asChild className="w-full bg-black text-white hover:bg-pink-400 hover:text-black">
                        <Link href="/signup">
                            Start Selling
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
} 