import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/dist/compiled/@next/font/dist/google";



const HeroSection = () => {
    return (
       <main>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 w-full ">
                <div className=" grid grid-cols-1 place-items-center">
                    <div>
                    <h1 className=" text-4xl font-extrabold text-cyan-400">
                        MoneyTips.Co
                    </h1>
                    </div>


                    <p className=" text-2xl text-center mt-8 text-black">Wanted to <span className=" font-Oswald lg:text-4xl md:text-xl sm:text-2xl  text-text-cyan-400">Grow your Social Media</span><br/> then <span className=" font-Oswald lg:text-4xl md:text-xl sm:text-2xl  text-cyan-400">MoneyTips.Co</span> is there to Help you.<br/> We help you grow your social media and <br/>Help you in<span className=" font-Oswald lg:text-4xl md:text-xl sm:text-2xl  text-cyan-400"> earning.</span> </p>
                    <button className=" h-12 w-36 mt-8 rounded-full bg-[#846075]"><Link href="/" className="text-white font-bold bg-transparent">Join Now</Link></button>
                </div>
                <div className=" flex items-center justify-center">
                    <Image src="/Image1.png" alt="businessman" height={250} width={380}/>
                </div>

            </div>



       </main>
    );
};

export default HeroSection;