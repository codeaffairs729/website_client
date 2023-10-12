import Link from 'next/link'
import styles from '../styles/blogStyle.module.css'

const BlogGrid = ({ data, authorized, setDelId, db }) => {
  const blog_category = [
    {
      category: 'Web Development ',
      heading: 'A Complete Guide on How to Enhance the Speed of Your Website',
      id: '0',
    },
    {
      category: 'Cost Estimation',
      heading: 'What is the Cost of Progressive Web App Development in 2023?',
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
      category: 'Web Development',
      heading: 'Steps To Take For Accelerating A Growing Web Application',
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
      category: 'Software Security',
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
      heading: '4 Best Web Development Frameworks Frontend & Backend',
      id: '12',
    },
    {
      category: 'Artificial Intelligence',
      heading:
        'Is ChatGPT Suitable for Building and Scaling a Web & Mobile Application?',
      id: '13',
    },
    {
      category: 'E-Commerce',
      heading:
        'Crafting an E-Commerce Web or Mobile App from Scratch to Success',
      id: '14',
    },
  ]
  function getCategoryForBlog(title) {
    const blog = blog_category.find((blog) => title.includes(blog.heading))
    return blog ? blog.category : 'Technology'
  }
  return (
    <>
      <div className="blog-section  ">
        <div className="container">
          <div className="maincontainer">
            <div className="row blog-list my-5 ">
              {data.map((e, i) => (
                <div className="col-12 col-lg-6 blog-list-item " key={i}>
                  <div className="d-flex blog-item">
                    <div className="flex-shrink-0">
                      <Link href={`/${db}/${e.slug}`}>
                        <img
                          src={
                            typeof db === 'undefined'
                              ? e.img
                              : `${process.env.NEXT_PUBLIC_BASE_URL}/upload/${e.image}`
                          }
                          style={{
                            width: '130.3px',
                            height: '90px',
                            objectFit: 'cover',
                          }}
                          alt="a snow-capped mountain range"
                        />
                      </Link>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4>
                        {typeof db === 'undefined'
                          ? 'Technology Insights'
                          : getCategoryForBlog(e.title)}
                      </h4>
                      <Link href={`/${db}/${e.slug}`}>
                        <p>{typeof db === 'undefined' ? e.title : e.title}</p>
                      </Link>
                      <Link
                        href={
                          db ? `/${db}/${e.slug}` : `/Case_Study_List/${e.id}`
                        }
                      >
                        <a href="#" className="fw-bold text-black ">
                          Read <img src="Newimages/arrow.png" alt="" />
                        </a>
                      </Link>
                      {authorized && (
                        <>
                          <div className={styles.edit}>
                            <Link href={`/${db}/edit/${e.id}`}>
                              <span className="text-primary fw-bold">
                                <span
                                  className={` ${styles.textblue} link-text fs-6 fw-semibold cursor_pointer`}
                                >
                                  EDIT
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <button
                              className={`${styles.textblue} fs-6 fw-semibold cursor_pointer fw-bold`}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setDelId(e.id)}
                            >
                              DELETE
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGrid
