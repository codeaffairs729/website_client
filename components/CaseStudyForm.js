import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CaseStudyForm = ({ action, data, db }) => {
  const router = useRouter()
  const notify = (status) => {
    toast.success(status, {
      position: 'top-right',
    })
  }
  const notifyError = (status) => {
    toast.error(status, {
      position: 'top-right',
    })
  }

  const [formContent, setFormContent] = useState({
    title: action === 'update' ? data?.title : '',
    subTitle: action === 'update' ? data?.subTitle : '',
    story: action === 'update' ? data?.story : '',
    challenge: action === 'update' ? data?.challenge : '',
    comment: action === 'update' ? data?.comment : '',
    solution: action === 'update' ? data?.solution : '',
    result: action === 'update' ? data?.result : '',
  })

  const [storyImage, setStoryImage] = useState(null)
  const [resultImage, setResultImage] = useState(null)
  const [bannerImage, setBannerImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const [solutionImage, setSolutionImage] = useState(null)
  const [author_id, setAuthor_id] = useState('1')
  let token

  if (typeof window !== 'undefined' && window.localStorage) {
    token = localStorage.getItem('token')
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target
    setFormContent((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleFileChange = (e, setImageFunction) => {
    e.preventDefault()

    const file = e.target.files[0]
    const reader = new FileReader()
    const imageUrl = URL.createObjectURL(file)

    reader.onload = function () {
      const img = new Image()

      img.onload = function () {
        if (
          img.width >= 1080 &&
          img.height >= 1080 &&
          img.width <= 1920 &&
          img.height <= 1350
        ) {
          setImageFunction(e.target.files[0])
        } else {
          setImageFunction(null)
          alert(
            'Please Provide a Image of pixel between (1920px-1080px width)*(1080px -1350px height)'
          )
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  }
  const handleCoverImage = (e, setImageFunction) => {
    e.preventDefault()

    const file = e.target.files[0]
    const reader = new FileReader()
    const imageUrl = URL.createObjectURL(file)

    reader.onload = function () {
      const img = new Image()

      img.onload = function () {
        if (img.width == 1920 && img.height == 1080) {
          setImageFunction(e.target.files[0])
        } else {
          setImageFunction(null)
          alert('Please Provide a Image of 1920px*1080px')
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  }

  // function for upload image
  const onClickUpload = async (e) => {
    e.preventDefault()
    if (
      storyImage === null ||
      resultImage === null ||
      bannerImage === null ||
      coverImage === null ||
      solutionImage === null
    ) {
      notify('Oops! You must upload file')
      return
    }

    const formData = new FormData()

    formData.append('title', formContent.title)
    formData.append('subTitle', formContent.subTitle)
    formData.append('story', formContent.story)
    formData.append('challenge', formContent.challenge)
    formData.append('comment', formContent.comment)
    formData.append('solution', formContent.solution)
    formData.append('result', formContent.result)
    formData.append('story_img', storyImage)
    formData.append('result_img', resultImage)
    formData.append('banner_img', bannerImage)
    formData.append('cover_img', coverImage)
    formData.append('solution_img', solutionImage)
    formData.append('author_id', author_id)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/case-study`,
        {
          body: formData,
          method: 'POST',
          headers: {
            Authorization: token,
          },
        }
      )
      const json = await response.json()
      notify(json.message)

      router.push(db == 'blogs' ? '/blogs' : '/case-study')
    } catch (error) {
      notifyError(json.message)
    }
  }
  // function for update image
  const onClickUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('title', formContent.title)
    formData.append('subTitle', formContent.subTitle)
    formData.append('story', formContent.story)
    formData.append('challenge', formContent.challenge)
    formData.append('comment', formContent.comment)
    formData.append('solution', formContent.solution)
    formData.append('result', formContent.result)
    formData.append('story_img', storyImage)
    formData.append('result_img', resultImage)
    formData.append('banner_img', bannerImage)
    formData.append('cover_img', coverImage)
    formData.append('solution_img', solutionImage)
    formData.append('author_id', author_id)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/case-study/${data.id}`,
        {
          body: formData,
          method: 'PUT',
          headers: {
            Authorization: token,
          },
        }
      )
      const json = await response.json()
      notify(json.message)
      router.push(db == 'blogs' ? '/blogs' : '/case-study')
    } catch (error) {
      notifyError(json.message)
    }
  }
  return (
    <>
      <div
        style={{
          marginTop: '250px',
          marginBottom: '250px',
          width: '70%',
          marginInline: 'Auto',
        }}
      >
        <h1>
          {action === 'update'
            ? 'Update Case Study Form'
            : 'Create Case Study Form '}
        </h1>
        <br />
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter title"
            value={formContent.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            subTitle
          </label>
          <textarea
            name="subTitle"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formContent.subTitle}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Banner Image between (1920px-1080px width)*(1080px -1350px height)
          </label>
          <input
            name="bannerImage"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/"
            onChange={(event) => handleFileChange(event, setBannerImage)}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Cover Image (1920px*1080px)
          </label>
          <input
            name="coverImage"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/"
            onChange={(event) => handleCoverImage(event, setCoverImage)}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Story
          </label>
          <textarea
            name="story"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter story"
            value={formContent.story}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Story Image between (1920px-1080px width)*(1080px -1350px height)
          </label>
          <input
            name="storyImage"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/"
            onChange={(event) => handleFileChange(event, setStoryImage)}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Challenge
          </label>
          <textarea
            name="challenge"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formContent.challenge}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comment
          </label>
          <textarea
            name="comment"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formContent.comment}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Solution
          </label>
          <textarea
            name="solution"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter solutions"
            value={formContent.solution}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Solution Image between (1920px-1080px width)*(1080px -1350px height)
          </label>
          <input
            name="solutionImage"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/"
            onChange={(event) => handleFileChange(event, setSolutionImage)}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Result
          </label>
          <textarea
            name="result"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter result"
            value={formContent.result}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Result Image between (1920px-1080px width)*(1080px -1350px height)
          </label>
          <input
            name="resultImage"
            className="form-control"
            type="file"
            id="formFile"
            accept="image/"
            onChange={(event) => handleFileChange(event, setResultImage)}
          />
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="editor-btn"
            onClick={action === 'update' ? onClickUpdate : onClickUpload}
          >
            {action === 'update' ? 'Update' : 'Submit'}
          </button>
        </div>
      </div>
    </>
  )
}
export default CaseStudyForm
