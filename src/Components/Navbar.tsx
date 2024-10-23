import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-end bg-[#CFA6A61C] h-20 items-center px-10">
      <ul className="flex gap-9 font-[500] text-xl">
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
