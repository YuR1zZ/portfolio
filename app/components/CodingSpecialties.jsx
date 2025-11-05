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
        <h1 className='text-[4.5vw] text-center text-white p-10'>Specialties</h1>
      </div>
    </main>
  )
}

export default CodingSpecialties
