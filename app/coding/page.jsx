
import Introduction2 from "./components/CodingAbout"
import CodingHeader from "./components/CodingHeader"
import Hero from "./components/CodingHero"
import Introduction from "./components/CodingIntroduction"

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
      <Introduction2 />
      <CodingFooter />
    </div>
  )
}

export default page
