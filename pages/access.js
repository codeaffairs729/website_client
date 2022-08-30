import React from 'react'

const Access = () => {
  return (
    <>
        <div className="access">
          <div className="access__center center">
            <div className="access__view connect__view" data-aos data-aos-delay="300">
              <div className="access__preview">
                <img className="access__pic access-main-cloud" src="img/cloud.png" alt="" />
                {/* <img className="access__pic connect__pic" src="images/connect.png" alt="" /> */}
                <img className="access__pic sphere__pic sphere-floating" src="images/Sphere.png" alt="" />
                <img className="access-azure-cloud sphere-floating" src="images/azure.png" alt="" />
                <img className="access-heading" src="images/Cloud_Management.png" alt="" />
                {/* <h2 className="access-heading" >Cloud Services</h2> */}
                {/* <img className="access__pic" src="images/connect.svg" alt="" /> */}
              </div>
              {/* <div className="access__preview">
                <img className="access__pic" src="images/Sphere.png" alt="" />
              </div> */}
            </div>
            <div className="access__wrap" data-aos="animation-scale-y">
              <div className="access__info">
                Ready to make your app live?
              </div>
              <form className="access__form">
                <div className="access__field">
                  <input className="access__input" type="email" placeholder="Email address" />
                  <div className="access__icon">
                    <img className="access__pic" src="img/sending-mail.svg" alt="" />
                  </div>
                </div>
                <button className="access__btn btn btn_purple" type="submit">Contact Us</button>
              </form>
            </div>
          </div>
          <div className="access__circles">
            <div className="access__circle" data-aos data-aos-offset="300"></div>
            <div className="access__circle" data-aos data-aos-delay="100" data-aos-offset="300"></div>
            <div className="access__circle" data-aos data-aos-delay="200" data-aos-offset="300"></div>
          </div>
          <div className="access__clouds">
            <div className="access__cloud access-cloud-1 digitalocean-floating">
              <img className="access__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/cloud.png" alt="" />
              <img className="access-google-cloud" data-scale="1.5" data-orientation="left" src="images/digitalocean.png" alt="" />
            </div>
            <div className="access__cloud gcloud-floating">
              <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
              <img className="access-google-cloud" data-scale="1.5" data-orientation="right" src="images/google-cloud-1.png" alt="" />
            </div>
            <div className="access__cloud access-aws-cloud-outer aws-floating">
              <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
              <img className="access-google-cloud" data-scale="1.5" data-orientation="right" src="images/aws.png" alt="" />
            </div>
            <div className="access__cloud access-heroku-cloud-outer heroku-floating">
              <img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt="" />
              <img className="access-google-cloud access-heroku-cloud" data-scale="1.5" data-orientation="right" src="images/heroku.png" alt="" />
            </div>
          </div>
          <div className="access__balls">
            <div className="access__ball"></div>
            <div className="access__ball access-ball-white-leftbottom"></div>
            <div className="access__ball"></div>
            <div className="access__ball"></div>
            <div className="access__ball js-rellax access-ball-yellow rackspace-floating" data-rellax-speed="-1">
              <img className="access-google-cloud access-rackspace-cloud" src="images/rackspace.png" alt="" />
            </div>
            <div className="access__ball"></div>
            <div className="access__ball js-rellax" data-rellax-speed="1"></div>
          </div>
          <img className="access-salesforce-cloud salesforce-floating" src="images/salesforce.png" alt="" />
        </div>
    </>
  )
}

export default Access