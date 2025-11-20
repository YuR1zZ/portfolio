
import CodingHeader from "./components/CodingHeader"
import Hero from "./components/CodingHero"
import Introduction from "./components/CodingIntroduction"
import CodingIntroduction2 from "./about/page"
import CodingSpecialties from "./components/CodingSpecialties"
import WhoAmI from "./components/CodingWhoAmI"
import CodingFooter from "./footer/page"



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
