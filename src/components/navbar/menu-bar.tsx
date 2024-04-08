"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { BombIcon, LayoutDashboard, LayoutDashboardIcon } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const NavMenu = () => {
  return (
    <NavigationMenu className="md:flex hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2"> <LayoutDashboardIcon className="h-4 w-4" /> Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.5fr_.5fr_]">
              <div className="flex flex-col gap-3 items-start justify-start px-2">
                <h3 className="uppercase text-[16px] font-[550] text-[var(--dark-header)]">
                  Product Categories
                </h3>
                <div className="flex flex-col gap-2 pl-3">
                  <Link href={"/men"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" /> Cutton Caps</Link>
                  <Link href={"/woman"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Baseball Cap</Link>
                  <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Straw Caps</Link>
                  <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Limited Time Offer</Link>
                  <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Baseball Hat</Link>
                  <Link href={"/newest-arrivals"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Newest Arrivals</Link>
                </div>
              </div>
              <div className="bg-[var(--normal-grey)] rounded-lg flex justify-center items-center p-5">
                <Image src={"/images/firstcap.png"} alt={'facecap'} width={500} height={200} className="w-[200px] h-[200px] object-contain" />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Products
            </NavigationMenuLink>
          </Link>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavMenu


{/* <NavigationMenuItem>
<NavigationMenuTrigger>Components</NavigationMenuTrigger>
<NavigationMenuContent>
  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
    {components.map((component) => (
      <ListItem
        key={component.title}
        title={component.title}
        href={component.href}
      >
        {component.description}
      </ListItem>
    ))}
  </ul>
</NavigationMenuContent>
</NavigationMenuItem> */}