import Particles from "./ui/Particles"
import SpotLight from "./ui/SpotLight"
import { TextAnimate } from "./ui/TextBlur"

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
    <TextAnimate animation="blurIn" as="h1" className='text-5xl mb-3'>
        hey, mohammad here.
    </TextAnimate>
    <h1 className="text-4xl font-bold text-gray-200 coding-text">
      i Create good shii
    </h1>
  </div>
</div>

    
  )
}

export default Hero
