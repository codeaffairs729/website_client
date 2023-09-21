import Link from 'next/link'
import styles from '../styles/blogStyle.module.css'

const Testbloggrid = ({ data, authorized, setDelId, db }) => {
  const blog_category = [
    {
      category: 'Web Development & Optimization',
      heading: 'A Complete Guide on How to Enhance the Speed of Your Website',
      id: '0',
    },
    {
      category: 'Cost Estimation',
      heading: 'What Is The Cost of Progressive Web App Development in 2023?',
      id: '1',
    },
    {
      category: 'Technology',
      heading: 'A Complete Guide on Headless Shopify, Including Its Benefits',
      id: '2',
    },
    {
      category: 'Technology',
      heading: 'A Complete Guide on Node.js, Its Features & Advantages',
      id: '3',
    },
    {
      category: 'Technology',
      heading: 'A Comprehensive Guide on React Native with its Benefits',
      id: '4',
    },
    {
      category: 'Technology',
      heading: 'Ruby Frameworks For Web Development In 2023',
      id: '5',
    },
    {
      category: 'Web Development & Optimization',
      heading: 'Steps to take for Accelerating a Growing Web Application',
      id: '6',
    },
    {
      category: 'Artificial Intelligence',
      heading: 'A Guide to APIs and Open AI with Their Importance',
      id: '7',
    },
    {
      category: 'Technology',
      heading:
        'Importance of getStaticProps and getServerSideProps to increase your page speed',
      id: '8',
    },
    {
      category: 'Technology',
      heading: 'A Guide to MeteorJS – What it Is, and Its Advantages',
      id: '9',
    },
    {
      category: 'Software security',
      heading: 'Why Is Mobile App Security Crucial? And Its Typical Threats',
      id: '10',
    },
    {
      category: 'Cloud Technology',
      heading: 'Top 7 Cloud Security Threats to Watch Out for in 2023',
      id: '11',
    },
    {
      category: 'Technology',
      heading: '4 Best Web Development Frameworks -Frontend & Backend',
      id: '12',
    },
    {
      category: 'Artificial Intelligence',
      heading: 'Is ChatGPT Suitable for Building and Scaling a Mobile App?',
      id: '13',
    },
  ]
  function getCategoryForBlog(title) {
    const blog = blog_category.find((blog) => title.includes(blog.heading))
    return blog ? blog.category : 'Technology Insights'
  }
  return (
    <>
      <div className={styles.topblogcontainer}>
        <div className={`container  ${styles.bloglistcontainer} `}>
          <div className={styles.pinkcircle}></div>
          <div className="row d-flex justify-content-center">
            {data.map((e, i) => (
              <div
                className={`card m-2 mb-5  p-3 ${styles.card}`}
                // style={{ width: ' 600px;' }}
                key={i}
              >
                <div className={`cursor_pointer ${styles.blogimage}`}>
                  <Link href={`/${db}/${e.slug}`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${
                        db === 'case-study' ? e.banner_img : e.image
                      }`}
                      style={{ width: '100%', height: '158px' }}
                      alt="a snow-capped mountain range"
                    />
                  </Link>
                </div>
                <div className={`card-body ${styles.title}`}>
                  <div className={styles.bloglistdesc}>
                    <div className={styles.blogheading}>
                      {getCategoryForBlog(e.title)}
                    </div>
                    {/* <div className="blog-list-desc"> */}
                    <Link href={`/${db}/${e.slug}`}>
                      <h3 className={`pt-2 cursor_pointer ${styles.blogtitle}`}>
                        {/* <h3 className=" card-title pt-2 cursor_pointer"> */}
                        {e.title}
                      </h3>
                    </Link>
                  </div>
                  <br />
                  <div
                    className={`d-flex justify-content-between ${styles.readtxt}`}
                  >
                    <span className="text-primary fw-bold">
                      <Link href={`/${db}/${e.slug}`}>
                        <a className={styles.blog__link}>
                          Read
                          <svg
                            className={styles.icon}
                            aria-labelledby="fwd-icon"
                          >
                            <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                          </svg>
                        </a>
                      </Link>
                    </span>
                    {authorized && (
                      <>
                        <Link href={`/${db}/edit/${e.id}`}>
                          <span className="text-primary fw-bold">
                            <span
                              className={` ${styles.textblue} link-text fs-6 fw-semibold cursor_pointer`}
                            >
                              EDIT
                            </span>
                          </span>
                        </Link>
                        <button
                          className={`${styles.textblue} fs-6 fw-semibold cursor_pointer fw-bold`}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => setDelId(e.id)}
                        >
                          DELETE
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottombluecircle}></div>
          <div className={styles.bottomcircle}></div>
        </div>
      </div>
    </>
  )
}

export default Testbloggrid
