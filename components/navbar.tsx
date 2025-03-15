import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import DarkModeButton from "./ui/darkModeButton";

const Navbar = (  ) => {
    return ( 
        <nav className="w-full flex items-center justify-between px-2">
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <DarkModeButton/>
        </nav>
     );
}

export  default Navbar;