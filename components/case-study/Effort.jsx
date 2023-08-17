import style from '../../styles/case-page.module.css'

const Effort = () => {
  const effortList = [
    {
      info: "For a real-time image enhancement experience, we integrated an AI model into the mobile application that dynamically refines and enriches the visuals of photos and videos. We also created a logbook within the mobile app (client side) that compiles images, videos, and metadata information. Client-side compilation is vital due to the lack of cellular network availability underwater. Upon the diver's return and subsequent reconnection of the app to the internet, a seamless mechanism automatically synchronizes the data with the cloud.",
      img: 'case_study/result_pixel_1.png',
    },
    {
      info: 'We organized a meeting with Physics Ph.D. holders who helped us in implementing the Buhlmann Decompression. Their expertise provided some insights, and with the help of that, we were able to design complex scientific algorithms to represent gathered data. ',
      img: 'case_study/effort_pixel_2.png',
    },
    {
      info: "We acquired the necessary equipment, such as pressure chambers, and established a dark room to simulate a virtual environment for testing purposes. This helped us in conducting controlled experiments and accurately assessing the performance under various conditions. By utilizing pressure chambers and a dark room to simulate a virtual environment, we replicated real-world scenarios of our application's capabilities.",
      img: 'case_study/effort_pixel_1.png',
    },
  ]

  const resultData = [
    {
      info: 'This innovative mobile application and hardware device have proven invaluable to scuba divers, as it significantly reduces their expenses by eliminating the need to purchase separate types of equipment, such as a Diving computer and GoPro camera. In contrast to other exorbitantly priced diving gears, the hardware device and application serve as a cost-saving measure. Together, the app and device provided a user-friendly diving experience.',
      img: 'case_study/result_pixel_1.png',
    },
  ]
  return (
    <>
      <div className={style.case_container}>
        <h1 className={style.challenge_header}>Our Efforts: </h1>
        <div className={style.effort_div}>
          {effortList.map((item, index) => (
            <div key={index} className={style.effort_section}>
              {index % 2 === 0 ? (
                <>
                  <p>
                    {item.info}
                    {index}
                  </p>
                  <img src={item.img} />
                </>
              ) : (
                <>
                  <img src={item.img} />
                  <p>
                    {item.info}
                    {index}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {resultData.map((item, index) => (
          <div key={index} className={style.result_section}>
            <div className={style.result_img}>
              <img src={item.img} alt="effort-jpg" />
            </div>
            <div>
              <h1 className={style.challenge_header}>Result</h1>
              <p>
                {item.info}
                {index}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Effort
