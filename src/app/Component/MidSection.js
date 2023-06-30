import React from 'react';
import { TiCamera } from "react-icons/ti";
import { MdOutlineBusinessCenter } from  "react-icons/md"
import {AiFillYoutube} from "react-icons/Ai"
const MidSection = () => {
    return (
<main className="">
        <div className=" mt-24  px-9 " >
            <div className=" text-center ">
            <h1 className=" text-4xl text-cyan-600">Why Choose US ?</h1>
            </div>
            <div className=" text-center text-2xl mt-8">
                24/7 Support to your Problem.
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3 place-items-center mt-16 ">
                <div className=" text-center grid grid-cols-1 place-items-center border-gray-200 shadow-2xl h-96 w-full ">
                <TiCamera className="text-9xl text-cyan-950"/>
                <p className=" mt-4 text-3xl">We help you <br/> Grow Your Social Media</p>
                </div>

                <div className=" text-center grid grid-cols-1 place-items-center border-gray-200 shadow-2xl h-96 w-full ">
                    <MdOutlineBusinessCenter className=" text-9xl text-cyan-950"/>
                    <p className="mt-4 text-3xl">We help you <br/>Grow Your Business</p>
                </div>

                <div className="text-center grid grid-cols-1 place-items-center border-gray-200 shadow-2xl h-96 w-full ">
                    <AiFillYoutube className=" text-9xl text-cyan-950"/>
                    <p className=" mt-4 text-3xl">We help you <br/> Grow Your Youtube</p>
                </div>


            </div>
        </div>
</main>


    );
};

export default MidSection;