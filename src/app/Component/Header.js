import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
        <div className=" w-full h-28 mt-8 ">
          <div className=" max-w-screen-2xl mx-auto px-4 flex items-center justify-between">

              <Link href='/'> <h1 className="text-2xl text-cyan-400"> MoneyTips.Co</h1></Link>

            <nav className="flex font-bold">
                <ul className=" gap-6 flex items-center text-sm">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Easy Way</Link></li>
                 </ul>
            </nav>

            <div className=" flex items-center text-sm">
                <button className="h-12 w-36  rounded-full bg-[#846075]"><Link href="/" className=" bg-transparent text-white">Join Now</Link></button>
            </div>
        </div>
        </div>



        </header>
    );
};

export default Header;