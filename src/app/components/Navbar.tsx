import Link from "next/link";
import React from "react";
import { ButtonsCard } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-black blur-0 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-white">Vert</h1>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
           <ButtonsCard />
          </div>
        </div>
      </div>
  );
};

export default Navbar;
