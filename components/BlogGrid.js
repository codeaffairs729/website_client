import Link from 'next/link'

const BlogGrid = ({ data, authorized, setDelId, db }) => {
  return (
    <>
      <div className="container blog-list-container">
        <div className="row d-flex justify-content-center">
          {data.map((e, i) => (
            <div
              className="card m-2 shadow p-3 bg-body-tertiary"
              style={{ width: '350px' }}
              key={i}
            >
              <div>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${
                    db === 'case-study' ? e.banner_img : e.image
                  }`}
                  style={{ width: '100%', height: '158px' }}
                  alt="a snow-capped mountain range"
                />
              </div>
              <div className="card-body">
                <div className="blog-list-desc">
                  <Link href={`/${db}/${e.id}`}>
                    <h3 className=" card-title pt-2 cursor_pointer">
                      {e.title}
                    </h3>
                  </Link>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <span className="text-primary fw-bold">
                    <Link href={`/${db}/${e.slug}`}>
                      <span className="text-blue link-text fs-6 fw-semibold cursor_pointer">
                        READ MORE
                      </span>
                    </Link>
                  </span>
                  {authorized && (
                    <>
                      <Link href={`/${db}/edit/${e.slug}`}>
                        <span className="text-primary fw-bold">
                          <span className=" text-blue link-text fs-6 fw-semibold cursor_pointer">
                            EDIT
                          </span>
                        </span>
                      </Link>
                      <button
                        className="text-blue fs-6 fw-semibold cursor_pointer  fw-bold"
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
      </div>
    </>
  )
}

export default BlogGrid
