
import CodingIntroduction2 from "./components/CodingAbout"
import CodingHero from "./components/CodingHero"
import CodingIntroduction from "./components/CodingIntroduction"
import CodingSpecialties from "./components/CodingSpecialties"
import CodingWhoAmI from "./components/CodingWhoAmI"
import CodingFooter from "./footer/page"



const page = () => {
  return (
    <div>
      <CodingHero />
      <CodingIntroduction />
      <CodingSpecialties />
      <CodingWhoAmI />
      <CodingIntroduction2 />
      <CodingFooter />
    </div>
  )
}

export default page
