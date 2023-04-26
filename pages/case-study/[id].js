import React, { useEffect } from 'react'
import styles from './../../styles/CaseStudy.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CaseStudyPage = ({ data }) => {
  const router = useRouter()

  useEffect(() => {
    if (data.length === 0) {
      router.push('/404')
    }
  }, [])

  return (
    <>
      <div className={`${styles.header}`}></div>
      <div className={`${styles.first_container}`}>
        <div
          className={`${styles.first_background}`}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/upload/${data[0]?.cover_img})`,
          }}
        >
          <div style={{ fontSize: 40, fontWeight: '600' }}>
            {data[0]?.title}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              padding: 20,
            }}
          >
            {data[0]?.subTitle}
          </div>
        </div>
      </div>

      <section className={` row ${styles.story_container}`}>
        <div
          className={`col-lg-6 col-md-6 col-sm-12 ${styles.story_text_container}`}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: 7,
              fontWeight: '500',
              marginBottom: 15,
            }}
          >
            THE STORY
          </div>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 2,
              fontWeight: '600',
              marginBottom: 15,
            }}
          >
            Fintech for the people
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 2,
              //   fontWeight: '400',
              marginBottom: 15,
            }}
          >
            {data[0]?.story}
          </div>
        </div>
        <div
          className={`col-lg-6 col-md-6 col-sm-12 ${styles.story_image_container}`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${data[0]?.story_img}`}
            width={554}
            height={400}
            objectFit="cover"
            // objectPosition="50% 50%"
          />
        </div>
      </section>
      <section className={`${styles.the_goal_container}`}>
        <div
          style={{
            letterSpacing: 6,
            fontWeight: '500',
          }}
        >
          CHALLANGE
        </div>
        <div
          style={{
            letterSpacing: 2,
            fontWeight: '600',
            fontSize: 25,
            textAlign: 'center',
            padding: 10,
          }}
        >
          Increasing customer reach and acquisition
        </div>
        <div
          style={{
            letterSpacing: 2,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          {data[0]?.challenge}
        </div>
      </section>

      <section className={`${styles.the_solution_container}`}>
        <div
          style={{
            letterSpacing: 6,
            fontWeight: '400',
            fontSize: 14,
          }}
        >
          THE SOLUTION
        </div>
        <div
          style={{
            letterSpacing: 2,
            fontWeight: '600',
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 7.8,
          }}
        >
          Using machine learning with Advantage+ app campaigns
        </div>
      </section>

      <section className={`row ${styles.solution_items_container}`}>
        <div
          className={`col-lg-6 col-sm-12 col-md-6 ${styles.solution_details_container}`}
        >
          <p className={`${styles.solution_paragrah}`}>{data[0]?.solution}</p>
        </div>
        <div
          className={`col-lg-6 col-sm-12 col-md-6 ${styles.solution_image_container}`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${data[0]?.solution_img}`}
            width={554}
            height={483}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
      </section>

      <section className={`row ${styles.the_results_container}`}>
        <div
          className={`col-lg-6 col-md-6 col-sm-12 ${styles.the_results_items_container}`}
        >
          <div className={`${styles.result_content}`}>
            <div
              style={{
                color: 'white',
                letterSpacing: 6,
                fontSize: 14,
                fontWeight: '500',
                marginBottom: 2,
              }}
            >
              THE RESULTS
            </div>
            <div
              style={{
                color: 'white',
                letterSpacing: 2,
                fontSize: 26,
                fontWeight: '500',
                marginBottom: 13,
              }}
            >
              Increased app activity
            </div>
            <div
              style={{
                color: 'white',
                letterSpacing: 2,
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 13,
              }}
            >
              {data[0]?.result}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-10 col-md-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${data[0]?.result_img}`}
            width={554}
            height={383}
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </div>
      </section>
      <section className={`${styles.summary_container}`}>
        <div className={`${styles.summary_items_container}`}>
          <div className={`${styles.quotes_container}`}>
            <p
              style={{
                fontSize: 200,
                paddingBottom: 50,
                position: 'relative',
                bottom: 230,
                color: '#4267b2',
              }}
            >
              ,,
            </p>
          </div>
          <div className={`${styles.summary_content}`}>
            {data[0]?.comment}
            <div style={{ marginTop: 30 }}>{}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyPage

export async function getServerSideProps({ params }) {
  const { id } = params
  const res = await await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/case-study/${id}`
  )
  const blogData = await res.json()

  if (res.status === 200) {
    return {
      props: {
        data: blogData,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
