"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { icon: null, name: "Home", href: "/" },
    { icon: null, name: "Posts", href: "/blog/posts" },
    { icon: null, name: "About", href: "/blog/about" },
    { icon: null, name: "Contact", href: "/blog/contact" }
]
function NavLinks() {
    const pathname=usePathname()
    return (
        <>
            {links?.map((link) => {
                return (
                    <Link href={link.href} key={link.href}
                        className={`flex h-[48px] grow items-center justify-center
                         gap-2 rounded-lg hover:bg-purple-100 active:bg-purple-100 w-full mb-1
                         ${link.href===pathname ? "bg-purple-100":"bg-blue-50"}`}>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default NavLinks