import { Link, useLocation } from "react-router-dom";
import MarvelDexLogo from "../assets/marvel-dex-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Heroes", href: "/heroes" },
  { label: "Villains", href: "/villains" },
  //   { label: "Teams", href: "/teams" },
  //   { label: "Comics", href: "/comics" },
  //   { label: "Locations", href: "/locations" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const locationInNavItems: boolean = navItems.some((item) => item.href === location.pathname && item.href != "/");
  return (
    <main className="w-screen">
      <div className="bg-[#2A2A2A] w-screen">
        {/* ADD PAGE INDICATOR FOR TOP LEFT OF NAV BAR */}
        {locationInNavItems ? (
          <div className="w-screen flex justify-between">
            <h1 className="text-4xl min-md:text-7xl self-end ml-5">{location.pathname.slice(1).toUpperCase()}</h1>
            <img src={MarvelDexLogo} alt="Marvel Dex logo" className="object-cover w-[35vw] md:w-[35vw] md:h-30" />
          </div>
        ) : (
          <div className="w-screen flex justify-center items-center">
            <img src={MarvelDexLogo} alt="Marvel Dex logo" className="w-[90vw] h-40 object-cover md:w-[35vw] md:h-30 lg:w-[25vw]" />
          </div>
        )}
      </div>
      <nav className="bg-[#151515] flex w-full h-[55px]">
        {navItems.map((navItem, index) => (
          <Link key={index} to={navItem.href} className="w-full text-center flex items-center justify-center hover:bg-[#ec1f27] transition">
            {navItem.label}
          </Link>
        ))}
      </nav>
    </main>
  );
};
