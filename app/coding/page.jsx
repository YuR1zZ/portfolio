import CodingHeader from "../components/CodingHeader"
import Hero from "../components/CodingHero"
import Introduction from "../components/CodingIntroduction"
import CodingIntroduction2 from "../components/CodingIntroduction2"
import CodingSpecialties from "../components/CodingSpecialties"
import WhoAmI from "../components/WhoAmI"



const page = () => {
  return (
    <div>
      <CodingHeader />
      <Hero />
      <Introduction />
      <WhoAmI />
      <CodingIntroduction2 />
      <CodingSpecialties />
    </div>
  )
}

export default page
