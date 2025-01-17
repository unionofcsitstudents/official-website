import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Organization
        </Link>
        <div className="hidden space-x-6 md:flex">
          {[
            "Home",
            "About",
            "Projects",
            "Get Involved",
            "Events",
            "News",
            "Contact",
            "FAQ",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-white hover:text-white/80"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
