'use client'
import { useEffect  } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Magnet from "./components/ui/Magnet";
import SpotLight from "./components/ui/SpotLight";
import { LightRays } from "./components/ui/LightRay";
import Link from "next/link";




export default function Home() {


  const router = useRouter();


  useGSAP(()=>{
    gsap.fromTo('.gaming-btn',{
      opacity:0,
      y:20,
    },{
      opacity:1,
      y:0,
      duration:0.6,
      delay:0.5,
      ease:'power3.out',
    })
    gsap.fromTo('.coding-btn',{
      opacity:0,
      y:20,
    },{
      opacity:1,
      y:0,
      duration:1,
      delay:0.6,
      ease:'power3.out',
    })
    gsap.fromTo('.path',{
      opacity:0,
      y:15,
    },{
      opacity:1,
      y:0,
      duration:1,
      delay:0.3,
      ease:'power3.out',
    })
    gsap.fromTo('.welcome',{
      opacity:0,
      y:15,
    },{
      opacity:1,
      y:0,
      duration:1,
      ease:'power3.out',
    })
    gsap.fromTo('.attention',{
      opacity:0,
      y:15,
    },{
      delay:1,
      opacity:0.6,
      y:0,
      duration:1,
      ease:'power3.out',
    })
  },[])




  return (


    <main>
    <div className="absolute flex flex-col items-center justify-center w-[100vw] h-[100vh] z-100 top-0 left-0 bg-black">

    {/* <div className="absolute inset-0 z-0">
      <SpotLight
        lights={[
        { color: "blue", position: "top-center" },
        ]}
      />
    </div> */}

    <LightRays />

    
    


    <div className="absolute flex flex-col items-center justify-center z-20">
      <div className="text-5xl mb-7 welcome">
    <h1 className="bg-gradient-to-b from-gray-600 to-white bg-clip-text text-transparent uppercase text-center leading-none font-thin">Welcome</h1>
    </div>
    <div className="mb-4 text-3xl path">
      <p className="bg-gradient-to-b from-gray-600 to-white  bg-clip-text text-transparent text-center leading-[2.4rem] font-thin">Please Choose Your Path</p>
    </div>

    <div className="flex flex-row gap-8 mt-15 text-xl">

      <Magnet>
        <Link
          href="/gaming"
          className="gaming-btn flex flex-row items-center justify-center cursor-pointer"
        >
          <p className="gaming-text">Gaming</p>
        </Link>
      </Magnet>

      <Magnet>
        <Link
          href="/coding"
          className="coding-btn flex flex-row items-center justify-center cursor-pointer"
        >
          <p className="coding-text">Coding</p>
        </Link>
      </Magnet>


    </div>

    <div className="fixed inset-x-0 bottom-10 p-6 flex items-center justify-center text-center overflow-hidden text-sm opacity-60 attention">
  <p>
    ⚠️ for Better Experience Please Use Larger Screens
  </p>
</div>


      
    </div>

    </div>


    {/* <div className="gradient-bg blur-3xl h-screen">

      <div className="gradient-container">
      
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>

      </div>
    </div> */}

    </main>
  );
}
