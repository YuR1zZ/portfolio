'use client'

import SpotLight from "./ui/SpotLight"





const CodingSpecialties = () => {
  return (
    <main className="h-screen relative flex items-center justify-center overflow-hidden">
      <SpotLight
      lights={[
      { color: "gray", position: "bottom-left" },
      ]}
      />
      {/* <MouseEffect /> */}
      <div>
        <img src="/images/specialties.png" alt="" />
      </div>
    </main>
  )
}

export default CodingSpecialties
