import React from 'react';
import Image from "next/image";
import { TbSeo } from "react-icons/tb"
import {SiAdobeindesign} from "react-icons/Si"
import {RiMoneyEuroBoxLine} from "react-icons/ri"


const Offers = () => {
    return (
        <div className="  mt-24">
            <div className=" text-center text-4xl">
                <h1 className="text-cyan-600">What We Offer ?</h1>
            </div>
            <div className=" text-center text-xl mt-7">
                <p className="mx-4">We have Been Providing Many Services from the past and some of the services <br/> that we are good at are mentioned below.</p>
            </div>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-12 place-items-center ">
                <div >
                    <Image src="/Services1.png" alt="Services" height={160} width={450}/>
                </div>
                <div className=" grid grid-cols-1">
                    <div>
                        <h1 className=" text-5xl font-Oswald text-cyan-800 text-center">Power Up Your Campaign</h1>
                        <p className=" text-md mt-8 text-center mx-4">In today’s scenario, when the world is shifting online, it is important to mark a strong online presence. Your business needs to sustain, and there shall be no excuse for it. Set your business stand out with our mobile-friendly, SEO-enabled, and fully scalable marketing-ready website development.</p>
                    </div>
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-12 place-items-center">
                            <div className=" sm: grid place-items-center" >
                                <TbSeo className=" text-center text-4xl mt-5 text-cyan-950"/>
                                <p className=" text-xl">SEO Optimized</p>
                                <p className=" lg:text-left text-sm my-4 mr-2 sm:text-center ">We use our SEO expertise to optimize the websites that will rank higher and crawl to the top of the search engines.</p>
                            </div>
                            <div className=" sm: grid place-items-center">
                              <SiAdobeindesign className=" text-4xl mt-5 text-cyan-950" />
                                <p className=" text-xl">Professionally Designed</p>
                                < p className="lg:text-left text-sm my-4 mr-2 sm:text-center ">Our experienced in-house team does the magic that optimizes the website and makes it visually appealing.</p>

                            </div>
                            <div className=" sm: grid place-items-center">
                               <RiMoneyEuroBoxLine className=" text-4xl mt-5 text-cyan-950"/>
                                <p className=" text-xl">Money Generative</p>
                                < p className="lg:text-left text-sm my-4 mr-2 sm:text-center  "> Don't miss any sales opportunities. We create interactive websites that is competent on any mobile device.</p>

                            </div>
                        <div className=" sm: grid place-items-center">
                            <RiMoneyEuroBoxLine className=" text-4xl mt-5 text-cyan-950"/>
                            <p className=" text-xl">Money Generative</p>
                            < p className="lg:text-left text-sm my-4 mr-2 sm:text-center "> Don't miss any sales opportunities. We create interactive websites that is competent on any mobile device.</p>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Offers;