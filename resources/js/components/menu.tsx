import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const navLinks = [
  { name: "découvrez iuppc", href: "#" },
  { name: "actualités", href: "#" },
  { name: "vie étudiante", href: "#" },
  { name: "formation proféssionnelles continues", href: "#" },
];

const links = [
    { name: "télécharger une brochure", href: "#" },
    { name: "admission", href: "#" },
    { name: "formation", href: "#" }
];

export default function ResponsiveMenu({ isScroll }: { isScroll: boolean }) {

    const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);

  return (
    <nav className="flex flex-col fixed w-full z-50">
        <div
            data-aos={isScroll ? "fade-down" : "fade-up"}
            className={cn("text-primary w-full flex justify-between items-center",
                isScroll ? "bg-primary text-white" : "bg-white"
            )}
        >

            <Link href="/" className="">
                <img src="/img/logo.png" alt="IUPPC Pigier" className="h-20 md:h-28" />
            </Link>

            {/* Desktop Menu */}
            <ul className={cn("hidden md:flex space-x-6 nav", isScroll ? "nav_scroll" : "nav")}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href}>
                            <span className="uppercase text-base font-bold text-lg">{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <Link href="/" className="hidden md:flex bg-secondary border-2 border-primary p-1 hover:bg-primary hover:border-secondary">
                <span className="text-white font-bold text-base uppercase">discuter avec un conseiller</span>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                {isNavOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
        <div
            data-aos={isScroll ? "fade-down" : "fade-up"}
            className={cn("flex w-full px-3 justify-center md:justify-between gap-6 items-center opacity-100 transition-opacity duration-900 starting:opacity-0",
                isScroll ? "bg-secondary" : "bg-primary"
            )}
        >

            <ul className="hidden md:flex space-x-6 p-5">
                {links.map((link) => (
                    <Link href={link.href}
                        className={cn("p-2 bg-white text-primary hover:text-secondary",

                        )}
                        key={link.name}
                    >
                        <span className="uppercase text-base font-bold text-lg tracking-wider">{link.name}</span>
                    </Link>
                ))}
            </ul>
            <ul className="md:hidden flex flex-col items-center justify-center space-y-4 py-4">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="bg-white p-2 text-secondary hover:text-primary">
                                <span className="uppercase text-base font-bold text-lg tracking-wider">{link.name}</span>
                            </Link>
                        </li>
                    ))}
            </ul>
            <div className="hidden md:flex items-center bg-primary rounded-full overflow-hidden max-w-lg">
                {/* Input */}
                <Input
                    type="text"
                    placeholder="Rechercher votre spécialité"
                    className="flex-1 px-4 h-10 font-semibold bg-white rounded-l-full focus:outline-none"
                />

                {/* Séparateur */}
                <div className="h-6 w-px bg-primary"></div>

                {/* Icône de recherche */}
                <Button className="p-2 bg-white text-primary rounded-r-full cursor-pointer h-9.75 hover:text-white hover:bg-primary">
                    <Search className="w-5 h-5" />
                </Button>
            </div>
        </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col items-center space-y-4 bg-white py-2 nav"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="block py-2 px-4">
                <span className="uppercase text-base font-bold text-primary">{link.name}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
