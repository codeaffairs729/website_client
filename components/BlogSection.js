import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const BlogSection = () => {
  const styles = {
    // width: '320px',
  }
  return (
    <div className="container justify-content-center blog-container">
      <h2>Our Featured Blogs!</h2>
      <div className="row blog-list">
        <div className="col-12 col-lg-4">
          <div className="card m-2 shadow p-3 bg-body-tertiary" style={styles}>
            <div className="card-img text-center">
              <Image
                src="/blog_images/enhance-speed.webp"
                width={554}
                height={383}
                objectFit="contain"
                objectPosition="50% 50%"
                alt="a snow-capped mountain range"
              />
              {/* <img src="/blog_images/SpeedWebsite.webp" style={{width:"334px"}}/> */}
            </div>
            <div className="card-body">
              <div className="card-desc">
                <h3 className="card-title pt-2">
                  A Complete Guide on How to Enhance the Speed of Your Website
                </h3>
                <p className="card-text pt-2">
                  When we talk about a website&apos;s performance, page speed is
                </p>
              </div>
              <Link href="/blog/speed-up-page" className="">
                <button type="button" className="blog-btn">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card m-2 shadow p-3 bg-body-tertiary" style={styles}>
            <div className="card-img text-center">
              <Image
                src="/blog_images/cost_pwa.webp"
                width={554}
                height={383}
                alt="a snow-capped mountain range"
                objectFit="contain"
                objectPosition="50% 50%"
              />
            </div>
            <div className="card-body">
              <div className="card-desc">
                <h3 className="card-title pt-2">
                  Cost of Building a Progressive Web App (PWA) in 2023?
                </h3>
                <p className="card-text pt-2">
                  Well, Progressive Web Apps (PWAs) are in trend now and it
                </p>
              </div>
              <Link href="/blog/progressive-web-app" className="">
                <button type="button" className="blog-btn">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card m-2 shadow p-3 bg-body-tertiary" style={styles}>
            <div className="card-img text-center">
              <Image
                src="/blog_images/ruby-framework.webp"
                width={554}
                height={383}
                alt="a snow-capped mountain range"
                objectFit="contain"
                objectPosition="50% 50%"
              />
            </div>
            <div className="card-body">
              <div className="card-desc">
                <h3 className="card-title pt-2">
                  Ruby Frameworks For Website Development In 2023
                </h3>
                <p className="card-text pt-2">
                  Are you wondering what headless shopify actually is?
                </p>
              </div>
              <Link href="/blog/shopify-blog" className="">
                <button type="button" className="blog-btn">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
