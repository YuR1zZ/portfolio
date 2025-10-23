import GridBg from "./ui/GridBg"
import Particles from "./ui/Particles"
import SpotLight from "./ui/SpotLight"
import Tree from "./ui/Tree"

const Hero = () => {
  return (
    
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        
        <Particles
          quantity={100}
          ease={80}
          color="#ffffff"
          className="w-full h-full"
        />
      </div>
  <SpotLight />
  <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-5xl font-bold text-gray-200">
      Transforming Concepts into Seamless <br />
      <span className="coding-text">User Experiences</span>
    </h1>
  </div>
</div>

    
  )
}

export default Hero
