'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Magnet from "./components/ui/Magnet";
import AnimatedRightArrow from "./components/ui/RightArrow";
import AnimateLeftdArrow from "./components/ui/LeftArrow";


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
      x:-30,
    },{
      opacity:1,
      x:0,
      duration:0.5,
      delay:1
    })
    gsap.fromTo('.coding-btn',{
      opacity:0,
      x:30,
    },{
      opacity:1,
      x:0,
      duration:0.5,
      delay:1
    })
  },[])


  return (
    <main>


    <div className="absolute flex flex-col items-center justify-center w-[100vw] h-[100vh] z-100 top-0 left-0 text-xl">

    <div className="text-5xl mb-4 welcome">
    <h1>Welcome</h1>
    </div>
    <div className="mb-4 text-3xl path">
    <p>Please Choose Your Path</p>
    </div>

      <div className="flex flex-row gap-8 mt-15">

      <Magnet>
        <div className="gaming-btn flex flex-row items-center justify-center">
        <AnimateLeftdArrow />
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
      <AnimatedRightArrow />
      </div>
      </Magnet>

      </div>

    </div>


    <div className="gradient-bg blur-3xl h-screen">

      <div className="gradient-container">
      
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>

      </div>
    </div>
    </main>
  );
}
