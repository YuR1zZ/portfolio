import CodingFooter from "../components/CodingFooter"
import CodingHeader from "../components/CodingHeader"
import Hero from "../components/CodingHero"
import Introduction from "../components/CodingIntroduction"
import CodingIntroduction2 from "../components/CodingIntroduction2"
import CodingSpecialties from "../components/CodingSpecialties"
import WhoAmI from "../components/CodingWhoAmI"



const page = () => {
  return (
    <div>
      <CodingHeader />
      <Hero />
      <Introduction />
      <CodingSpecialties />
      <WhoAmI />
      <CodingIntroduction2 />
      <CodingFooter />
    </div>
  )
}

export default page
