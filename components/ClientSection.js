import React from 'react'
import Image from 'next/image'

const ClientSection = () => {
  const designIcons = [
    ['Figma', 'Figma Icon', '/icons/figma.webp', '27', '40'],
    ['Miro', 'Miro Icon', '/icons/miro.webp', '40', '40'],
    ['Sketch', 'Sketch Icon', '/icons/sketch_1.webp', '45', '40'],
    ['Adobe Xd', 'Adobe XD Icon', '/icons/adobe_xd.webp', '42', '40'],
    ['Framer', 'Framer Icon', '/icons/framer.webp', '40', '40'],
    ['Figma', 'Figma Icon', '/icons/figma.webp', '27', '40'],
    ['Miro', 'Miro Icon', '/icons/miro.webp', '40', '40'],
    ['Sketch', 'Sketch Icon', '/icons/sketch_1.webp', '45', '40'],
    ['Adobe Xd', 'Adobe XD Icon', '/icons/adobe_xd.webp', '42', '40'],
    ['Framer', 'Framer Icon', '/icons/framer.webp', '40', '40'],
    ['Figma', 'Figma Icon', '/icons/figma.webp', '27', '40'],
  ]
  return (
    <div className="client-container container">
      <div className="row bg-light">
        <div className="col-md-5 col-lg-3  client-container-left">
          <h2>Pleasure To Work With</h2>
          <p>
            The Brands we have worked with are leaving a remarkabale footprint
            in the Digital World
          </p>
        </div>
        <div className="col-md-7 col-lg-9  align-self-center ">
          <div className="d-flex flex-wrap  justify-content-sm-center justify-content-md-center">
            {designIcons.map((e, index) => (
              <div className="p-4 text-center" key={index}>
                <Image src={e[2]} width={e[3]} height={40} />
                <p>{e[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientSection
