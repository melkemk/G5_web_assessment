import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center pt-6 pl-12 pr-12">
        <div>
          <Image src={logo} height={50} width={190} alt="logo" />
        </div>
        <div className="flex gap-[70px] font-semibold">
          <div>Home</div>
          <div>Team</div>
          <div>Success Stories</div>
          <div>About Us</div>
          <div className="text-primary underline underline-offset-4 decoration-primary decoration-5">Blogs</div>
          <div>Get Involved</div>
        </div>
        <div className="flex">
          <div className="h-[50px] w-32 flex items-center justify-center mx-auto font-bold">Login</div>
          <div className="h-[50px] w-40 bg-primary flex items-center justify-center mx-auto text-white rounded-full">Donate</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;