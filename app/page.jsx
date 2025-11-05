'use client'
import { useEffect , useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Magnet from "./components/ui/Magnet";
import GridBg from "./components/ui/GridBg";
import SpotLight from "./components/ui/SpotLight";
import PlanetSketch from "./components/ui/Planet";



export default function Home() {


  const router = useRouter();


  useEffect(() => {
    const welcomeSplit = new SplitText(".welcome", { type: "chars, words" });
    gsap.from(welcomeSplit.chars, {
      y:20,
      yoyo:true,
      duration:0.5,
    })
  }, []);


  useEffect(() => {
    const pathSplit = new SplitText(".path", { type: "chars, words" });
    gsap.from(pathSplit.words, {
      opacity:0,
      y:20,
      yoyo:true,
      duration:0.5,
      delay:.4,
    });
  }, []);


  useGSAP(()=>{
    gsap.fromTo('.gaming-btn',{
      opacity:0,
      y:30,
    },{
      opacity:1,
      y:0,
      duration:0.5,
      delay:0.6
    })
    gsap.fromTo('.coding-btn',{
      opacity:0,
      y:30,
    },{
      opacity:1,
      y:0,
      duration:0.5,
      delay:0.8
    })
  },[])


  useEffect(() => {
    
  }, []);


  useGSAP(()=>{
    gsap.fromTo('.planet', {
      opacity:0,
    },{
      opacity:1,
      delay:0.5
    })
  })


  return (
    <main>


    <div className="absolute flex flex-col items-center justify-center w-[100vw] h-[100vh] z-100 top-0 left-0 bg-black">

    <div className="absolute inset-0 z-0">
      <SpotLight
        lights={[
        { color: "blue", position: "top-center" },
        ]}
      />
    </div>

    <div className="relative scale-[0.6] rotate-[40deg] pointer-events-none animate-bounce-slow z-10 -translate-y-60 sm:-translate-y-60 md:-translate-y-60 lg:-translate-y-60 xl:-translate-y-60 planet">
    <PlanetSketch />
    </div>

    <div className="absolute flex flex-col items-center justify-center z-20">
      <div className="text-5xl mb-4 welcome font-light">
    <h1>Welcome</h1>
    </div>
    <div className="mb-4 text-3xl path font-light">
    <p>Please Choose Your Path</p>
    </div>

      <div className="flex flex-row gap-8 mt-15 text-xl">

      <Magnet>
        <div className="gaming-btn flex flex-row items-center justify-center">
      <button
       className="cursor-pointer"
       onClick={()=>router.push('/gaming')}
       >
        <p className="gaming-text">Gaming</p>
      </button>
      </div>
      </Magnet>
    
      <Magnet>
      <div className="coding-btn flex flex-row items-center justify-center">
      <button
      className="cursor-pointer "
      onClick={()=>router.push('/coding')}
      >
        <p className="coding-text">
          Coding
        </p>
      </button>
      </div>
      </Magnet>

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
