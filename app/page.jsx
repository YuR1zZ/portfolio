'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  return (
    <main>


    <div className="absolute flex flex-col items-center justify-center w-[100vw] h-[100vh] z-100 top-0 left-0 text-xl">

    <div className="text-5xl mb-4">
    <h1>Welcome</h1>
    </div>
    <div className="mb-4 text-3xl">
    <p className="">Please Choose Your Path</p>
    </div>

      <div className="flex flex-row gap-8 mt-10">

      <button
       className="cursor-pointer"
       onClick={()=>router.push('/gaming')}
       >
        <p
        className="gradient-text">Gaming</p>
      </button>
    
      <button
      className="cursor-pointer"
      onClick={()=>router.push('/coding')}
      >
        <p className="bg-gradient-to-b from-gray-600 via-gray-300 to-white bg-clip-text text-transparent">
          Coding
        </p>
      </button>

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
