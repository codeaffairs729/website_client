// import React from 'react'
// import Link from 'next/link';

// const OpenPosition = () => {
//     const jobProfile = [
//         {
//             jobProfile: 'Android Engineer',
//             jobLocation: 'chandigarh',
//             jobType: 'Full-Time'
//         },
//         {
//             jobProfile: 'iOS Developer',
//             jobLocation: 'chandigarh',
//             jobType: 'Full-Time'
//         },
//         {
//             jobProfile: 'Full Stack Developer',
//             jobLocation: 'chandigarh',
//             jobType: 'Full-Time'
//         },
//     ]
//     console.log(jobProfile);
//     jobProfile.map((element) => {
//         console.log(element.jobProfile);
//     })
//     return (
//         <div className='open-position-container d-flex flex-column align-items-center'>
//             <div className='open-position-container-headline'>
//                 {/* headline */}Open Positions
//             </div>
//             <div className='open-position-nav d-flex flex-wrap justify-content-evenly align-items-center'>
//                 {/* nav for job profiles */}
//                 <Link href='#'>
//                     <a>Developer</a>
//                 </Link>
//                 <Link href='#'>
//                     <a>Marketing</a>
//                 </Link >
//                 <Link href='#'>
//                     <a>Design</a>
//                 </Link>
//                 <Link href='#'>
//                     <a>Operations</a>
//                 </Link>
//                 <Link href='#'>
//                     <a>People</a>
//                 </Link>
//             </div>
//             <div className='open-position-jobs'>
//                 {
//                     jobProfile.map((element) => {
//                         return (
//                             <div className='job-profile-container d-flex justify-content-between align-items-center'>
//                                 <div className='job-profile'>
//                                     <h3 className='job-profile-headline'>{element.jobProfile}</h3>
//                                     <p className='job-profile-para'>{element.jobLocation}, {element.jobType}</p>
//                                 </div>
//                                 <div>
//                                     <button className='job-profile-submit-btn'>Apply Now</button>
//                                 </div>
//                             </div>

//                         )
//                     })
//                 }
//             </div>
//             {/* <div className='apply-job'>
//                 <h2 className='apply-job-heading'>Do You Think this can be
//                     the place for you?</h2>
//                 <Link href='/contact'>
//                     <a target="_blank" className="apply-job-btn" >Get in Touch</a>
//                 </Link>
//             </div> */}
//         </div>
//     )
// }

// export default OpenPosition;
