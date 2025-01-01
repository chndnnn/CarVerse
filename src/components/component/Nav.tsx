import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { isSignedIn } = useUser();
  const [sidebar, setSideBar] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/SearchScreen", label: "Search" },
    { path: "/New", label: "New" },
    { path: "/PreOwned", label: "Pre-Owned" },
  ];

  return (
    <>
      <header className="flex items-center md:p-3 p-2 justify-between border border-solid bg-slate-100">
        <div className="md:hidden relative">
          <CgDetailsMore
            className={`${sidebar ? "text-blue-500" : ""} h-[25px] w-[25px]`}
            onClick={() => setSideBar((prev) => !prev)}
          />
          <div
            className={`${
              sidebar ? "" : "hidden"
            } z-20 rounded absolute top-9 left-[-15px] border border-solid bg-neutral-800 h-48 w-40 animationtest`}
          >
            <ul className="font-serif text-white p-6">
              {navLinks.map((link) => (
                <Link to={link.path} key={link.path}>
                  <li
                    className={`p-1 cursor-pointer hover:scale-105 font-semibold ${
                      location.pathname === link.path ? "text-blue-500" : "hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="/vite.svg" alt="" className="h-[30px] w-[30px] rounded-full" />
          <span className="md:hidden font-serif text-2xl">Car-Verse</span>
        </div>
        <ul className="md:flex hidden gap-16 font-sans">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.path}>
              <li
                className={`cursor-pointer hover:scale-105 font-semibold ${
                  location.pathname === link.path ? "text-blue-500" : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        ) : (
          <div className="flex items-center p-1 gap-2">
            <UserButton />
            <Link to="/Mylisting">
              <Button>Submit listing</Button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
