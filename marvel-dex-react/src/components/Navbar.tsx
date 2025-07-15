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
      <h1 className="text-3xl color-white">MRVL-DX</h1>
      <nav>
        {navItems.map((navItem, index) => (
          <Link key={index} to={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </nav>
    </main>
  );
};
