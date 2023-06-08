import Image from 'next/image'
import Head from "next/head";
import HeroSection from "@/app/Component/HeroSection";
import MidSection from "@/app/Component/MidSection";
import Link from "next/link";
import Offers from "@/app/Component/Offers";

export default function Home() {
  return (
      <>
      <HeroSection/>
      <MidSection/>
          <Offers/>


      </>

  )
}
