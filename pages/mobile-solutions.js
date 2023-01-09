import React from 'react'
import ServiceForm from '../components/service'
import CompanyDescription from '../components/company-description'

const techTitle='Mobile Solutions'
const techImage="icons/service-icon/mobile-front-color.png"

const content1=()=>{
    return (
        <>
            {/* Service container body content */}
            

                    <div className='service-container-body-left-content-1'>
                        <p className='service-para'>A fully-functional and highly interactive website is required for your business to keep things on the right track!
                            At Code Garage Tech, we offer full web development services, from initial planning to final delivery and third-party testing. Backed by a team of dedicated and skilled developers, we have established ourselves as one of the most renowned and trusted custom website development companies. We work with you to meet your most challenging needs for professional website application development services. Our professionals can offer cost-effective end-to-end web development services.
                            <br /><br />Our pertinent goal is to provide easy-to-customize, user-friendly, responsive, highly secure, and stable web solutions that are tailored according to your business needs. We constantly work to ensure that the ideal website of our customers has a top-notch web presence. We care for your needs, and hence, offer you complete web development solutions.
                        </p>
                    </div>
                    <div className='service-container-body-left-content-2'>
                        <h2 className='service-h1'>Process we follow</h2>
                        <p className='service-para'>How Our Experts Handle The Project Efficiently</p>
                        <ol>
                            <li>
                                <p className='service-h2'>1) Planning</p>
                                <p className='service-para'>Gather all the information and plan the project, craft the idea for the website and CMS development.</p>
                            </li>
                            <li>
                                <p className='service-h2'>2) Web Designing</p>
                                <p className='service-para'>Our front-end designers will craft a stunning and striking responsive website following the wireframe, UI/UX design to prototype.</p>
                            </li>
                            <li>
                                <p className='service-h2'>3) Define Content</p>
                                <p className='service-para'>A website is incomplete without content. Thus, we will put informative content on the website and make it SEO-friendly.</p>
                            </li>
                            <li>
                                <p className='service-h2'>4) Development</p>
                                <p className='service-para'>After deciding the website's objectives, it is time for development. The process is the pre-final stage of the website.</p>
                            </li>
                            
                            </ol>
                            </div>
        </>
    )

    
}

const content2=()=>(
    <>
    <div>
                        <ol>
                        <li>
                                <p className='content2-service-h2'>5) Testing</p>
                                <p className='content2-service2-para'>It is essential to conduct a test to ensure that the website is 100% bug-free and you get a seamless, user-friendly website.</p>
                            </li>
                        <li>
                            <p className='content2-service2-h2'>6) Deployment</p>
                            <p className='content2-service2-para'>After everything is covered, from design to deployment, it is time to launch the website.</p>
                        </li>
                        <li>
                            <p className='content2-service2-h2'>7) Post Deployment & Maintenance</p>
                            <p className='content2-service2-para'>After the website's launch, we will provide all support and answer every query after the deployment.</p>
                        </li>
                    </ol>
                </div>
                <div className='service-container-body-left-content-3'>
                    <h2 className='content2-service-h1'>The Technologies And Services We Use For Website & CMS Development</h2>
                    <p>Innovative and Advanced Technologies for the Website & CMS Development</p>

                    <h2 className='content2-service-h2'>WordPress Web Development</h2>
                    <p className='content2-service-para'>Our developer provides the best WordPress Web Development to create an efficient website.</p>
                </div>
    </>
)

const MobileSolutions = () => {

    return (
        <ServiceForm content1={content1} content2={content2} techTitle={techTitle} techImage={techImage}/>
    )
}

export default MobileSolutions


