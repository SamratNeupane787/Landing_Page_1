import React from 'react';
import Image from "next/image";

const Supported = () => {
    return (
        <div>
            <div className="text-center mt-8 text-5xl text-cyan-900">
                <h1>Supported By</h1>
            </div>

            <div className="my-12 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center ">
                <div className=' my-8  mx-8 h-auto w-auto'><Image src="/logos/vz.svg"  alt="colgate-logo" width={250} height={150}></Image></div>
                <div className=' my-8 h-auto w-auto '><Image src="/logos/money.svg" alt="colgate-logo" width={250} height={150}></Image></div>
                <div className=' my-8 h-auto w-auto'><Image src="/logos/sc.svg" alt="colgate-logo" width={250} height={150}></Image></div>
            </div>


        </div>
    );
};

export default Supported;