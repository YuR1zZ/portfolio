import Particles from "./ui/Particles"
import SpotLight from "./ui/SpotLight"
import { TextAnimate } from "./ui/TextBlur"
import Magnet from "./ui/Magnet"
import Button from "./ui/CodingButton"

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
    <TextAnimate animation="blurIn" as="h1" className='text-5xl mb-3 font-thin'>
        hey, Mohammad here.
    </TextAnimate>
    <h1 className="text-4xl text-gray-200 coding-text font-thin">
      i create good stuff
    </h1>
    <Button />
  </div>
</div>

    
  )
}

export default Hero
