import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "./" },
  { label: "Heroes", href: "./heroes" },
  //   { label: "Teams", href: "./teams" },
  //   { label: "Comics", href: "./comics" },
  //   { label: "Locations", href: "./locations" },
];

export const Navbar: React.FC = () => {
  return (
    <main>
      <div className="bg-[#2A2A2A]">
        <h1 className="text-4xl color-white p-5 flex justify-center">MRVL-DX</h1>
      </div>
      <nav className="bg-[#151515] flex justify-evenly p-3">
        {navItems.map((navItem, index) => (
          <Link key={index} to={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </nav>
    </main>
  );
};
