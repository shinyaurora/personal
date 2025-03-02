"use client";

import { HomeIcon, PencilIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

import Icons from "../icons";

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Home" },
        { href: "#", icon: PencilIcon, label: "Blog" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/luckdev01",
                icon: Icons.gitHub,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/denniskong823/",
                icon: Icons.linkedin,
            },
        },
        contact: {
            email: {
                name: "Send Email",
                url: "mailto:cupid.jack505@gmail.com",
                icon: Icons.email,
            },
            phone: {
                name: "Send Email",
                url: "+1 (332) 900 6245",
                icon: Icons.phone
            },

        }
    },
};

export function SideNav() {
    return (
        <TooltipProvider>
            <Dock direction="middle" className="fixed bottom-4 border border-black/50 left-1/2 transform -translate-x-1/2 backdrop-blur-3xl z-20 rounded-full">
                {DATA.navbar.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild className="hover:bg-transparent">
                                <Link
                                    to={item.href}
                                    aria-label={item.label}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2 bg-black/20" />
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild className="hover:bg-transparent">
                                <Link
                                    to={social.url}
                                    aria-label={social.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <social.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2 bg-black/20" />
                {Object.entries(DATA.contact.contact).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild className="hover:bg-transparent">
                                <Link
                                    to={social.url}
                                    aria-label={social.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <social.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
            </Dock>
        </TooltipProvider>
    );
}
