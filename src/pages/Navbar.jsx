import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "CA Foundation", path: "/foundation" },
    { label: "CA Intermediate", path: "/intermediate" },
    { label: "CA Final", path: "/final" },
    { label: "Resources", path: "/resources" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">
              CA<span className="text-primary"> Monk</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
            //   to={link.path}
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-primary"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Enroll Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm ${isActive ? "text-primary" : "text-gray-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline">Login</Button>
            <Button>Enroll Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
