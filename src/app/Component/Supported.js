import React from 'react';
import Image from "next/image";

const Supported = () => {
    return (
        <div>
            <div className="text-center text-4xl text-cyan-900">
                <h1>Supported By</h1>
            </div>

            <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 place-items-center ">
                <div><Image src="/logos/at.svg" alt="colgate-logo" width={250} height={150}></Image></div>
                <div><Image src="/logos/vz.svg"  alt="colgate-logo" width={250} height={150}></Image></div>
                <div><Image src="/logos/money.svg" alt="colgate-logo" width={250} height={150}></Image></div>
                <div><Image src="/logos/sc.svg" alt="colgate-logo" width={250} height={150}></Image></div>
            </div>


        </div>
    );
};

export default Supported;