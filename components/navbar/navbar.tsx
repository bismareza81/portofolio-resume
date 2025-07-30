import { Button } from "@/components/ui/button";
import { GithubLogo, } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

// Add a simple WhatsApp SVG icon (or replace with your own icon import)
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.13-2.33C12.97 27.56 14.45 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.36 0-2.68-.27-3.92-.8l-.28-.12-4.23 1.38 1.38-4.12-.18-.29C7.28 18.01 7 16.53 7 15c0-5.01 4.06-9.07 9.07-9.07S25.13 9.99 25.13 15 21.07 25.07 16 25.07zm5.06-6.41c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
  </svg>
);

// Add a simple LinkedIn SVG icon (or replace with your own icon import)
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor">
    <path d="M27 27h-4.2v-6.6c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V27H13V12.5h4v2h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V27zM7.3 10.5c-1.3 0-2.3-1-2.3-2.3S6 5.9 7.3 5.9s2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.1 16.5H5.2V12.5h4.2V27z"/>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/bismareza81/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <GithubLogo className="h-5! w-5!" />
            </Button>
          </a>
          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/bismaboostXP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Button>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6285156218245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Button>
          </a>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
