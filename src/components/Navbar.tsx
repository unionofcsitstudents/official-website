"use client";
import Logo from "../../public/logo.png";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/#events" },
    {
      name: "Executive Committee",
      href: "/ec",
      dropdownItems: [
        { name: "Current EC", href: "/ec/current" },
        { name: "Founding Committee", href: "/ec/founding" },
      ],
    },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "FAQ", href: "/#faq" },
    { name: "Get Involved", href: "/#getinvolved" },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-black sticky top-0 left-0 right-0 z-50 ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="logo" className="w-8 h-8" />

              <span className="block md:hidden lg:block text-xl font-bold text-white">
                Union of CSIT Students
              </span>

              <span className="hidden md:block md:pr-8 lg:hidden text-xl font-bold text-white">
                UCS
              </span>
            </Link>
            <Button
              variant="ghost"
              className="p-0 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) =>
                item.dropdownItems ? (
                  <div key={item.name} className="relative group">
                    <button
                      className="text-white hover:text-gray-300 flex items-center"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "fixed left-0 right-0 top-0 z-50 bg-black transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-xl font-bold text-white">
                  Organization
                </span>
              </Link>
              <Button
                variant="ghost"
                className="p-0"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.dropdownItems ? (
                  <div key={item.name} className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-white hover:text-gray-300"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
