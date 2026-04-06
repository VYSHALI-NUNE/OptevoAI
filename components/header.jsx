/*import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";*/
/*import { SignedOut } from "@clerk/nextjs/dist/types/components.server";*/
import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import {DropdownMenuItem} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";


// filepath: e:\minor  project\OptevoAI\optevoai\components\header.jsx

const Header = async() => {
    await checkUser();

    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60"> 
            <nav className="w-full px-6 h-16 flex items-center justify-between">

                <Link href='/'>
                    <Image
                    src='/optevoai logo.png'
                    alt='OptevoAI Logo'
                    width={120}
                    height={40}
                    className="h-12 py-1 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <SignedIn>
                        <Link href={'/dashboard'}>
                            <Button variant="outline">
                                <LayoutDashboard className="h-4 w-4" />
                                <span className="hidden md:block ">
                                    Industry Insights
                                </span>
                                
                            </Button>
                        </Link>
                    

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <StarsIcon className="h-4 w-4" />
                                <span className="hidden md:block ">
                                    Growth Tools
                                </span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span >Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                    <PenBox className="h-4 w-4" />
                                    Cover Letter
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/interview"} className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    Interview Prep
                                </Link>
                            </DropdownMenuItem>
                            
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut> 
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 ",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMaintainIdentifier:" font-semibold",
                                },
                            }}
                            afterSignOutUrl="/"
                        />
                    </SignedIn>
                </div>
            </nav>
                 
        </header>
    )
}

export default Header;
