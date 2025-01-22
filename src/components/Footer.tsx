import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { Linkedin, Github, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Get Involved", href: "/#getinvolved" },
    { name: "Events", href: "/#events" },
    { name: "Contact", href: "/#contact" },
    { name: "FAQ", href: "/#faq" },
  ];

  const socialLinks = [
    { name: "Gmail", icon: Mail, href: "mailto:unionofcsitstudents@gmail.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/ucscct/" },
    { name: "GitHub", icon: Github, href: "https://github.com/unionofcsitstudents" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/ucscct" },
  ];

  return (
    <footer className="bg-black border-t-[1px] border-colors-customBlue text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center mb-12 space-y-6 md:justify-between">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">
                Union of CSIT Students
              </span>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-400 text-center">
              {" "}
              Bijaypur Sadak, Dharan - 14, Sunsari <br></br>
              unionofcsitstudents@gmail.com{" "}
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
