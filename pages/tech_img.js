import React from 'react'
import Image from 'next/image'

const tech_img = () => {
  return (
    <div className="container">
      <div className="imgtext">
        <h2 className="">Our DevOps Culture</h2>

        <Image
          src="/devops/devops_main_1.png"
          alt="tech"
          width={1400}
          height={700}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default tech_img
