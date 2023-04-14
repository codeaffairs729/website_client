import dynamic from 'next/dynamic'
import { useState, useRef } from 'react'
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
const config = {
  buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source'],
}

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'align',
  'list',
  'bullet',
  'link',
  'image',
]
const RichTextEditor = ({ pageName, btnName, uploadbtn, data, db }) => {
  const [title, setTitle] = useState(data.title)
  const [image, setImage] = useState(data.image)
  const [content, setContent] = useState(data.content)
  const [imagePreview, setImagePreview] = useState(null)
  const [imageField, setImageField] = useState(null)
  const router = useRouter()
  const ref = useRef(null)
  let name
  let token
  let id

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

  if (typeof window !== 'undefined' && window.localStorage) {
    name = localStorage.getItem('token')
    token = localStorage.getItem('token')
    id = localStorage.getItem('id')
  }
  // function for selecting image
  const handleSelectImage = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    const imageUrl = URL.createObjectURL(file)

    reader.onload = function () {
      const img = new Image()
      img.onload = function () {
        if (img.width == 1264 || img.height == 632) {
          setImageField(e.target.files[0])
          setImagePreview(imageUrl)
        } else {
          ref.current.value = null
          setImagePreview(null)
          notifyError('Invalid image ratio')
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  }

  // function for update image
  const onClickUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('author_id', id)
    formData.append('fname', imageField)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${db}/${data.id}`,
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
      router.push(db === 'blogs' ? '/blogs' : '/case-studies')
    } catch (error) {
      notifyError(json.message)
    }
  }

  // function for upload image
  const onClickUpload = async (e) => {
    e.preventDefault()
    if (imageField == null) {
      notify('Oops! You must upload file')
      return
    }
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('author_id', id)
    formData.append('fname', imageField)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${db}`,
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
      router.push(db === 'blogs' ? '/blogs' : '/case-studies')
    } catch (error) {
      // notifyError(json.message)
    }
  }

  const handleOnBack = () => {
    router.back()
  }
  return (
    <div className="rich-text-containar d-flex flex-column justify-content-center">
      {/* <Link href={db === 'blogs' ? '/blogs' : '/case-studies'}> */}
      <div className="blog-back-btn cursor_pointer d-flex ">
        <div className="align-self-center">
          <img src="/icons/left-angle.png" style={{ height: '24px' }} />
        </div>
        <div
          className="fs-6  fw-semibold fw-bold"
          style={{ color: '#2522BA' }}
          onClick={handleOnBack}
        >
          &nbsp;&nbsp;Back
        </div>
      </div>
      {/* </Link> */}
      <ToastContainer />
      <div className="edit-blog">
        <h1 className="text-center">{pageName}</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              {uploadbtn}
            </label>
            <input
              className="form-control"
              type="file"
              id="file-upload"
              name="fname"
              ref={ref}
              onChange={handleSelectImage}
            />
            <p className="fs-6 text-secondary file-error">
              Image must be at least 1264 pixels width and 632 pixels height
            </p>
            {imagePreview === null ? (
              <div className="upload-banner-img">
                {image && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${image}`}
                    style={{ width: '300px' }}
                  />
                )}
              </div>
            ) : (
              <div className="upload-banner-img">
                <img src={imagePreview} alt="Image Preview" width="300" />
              </div>
            )}
          </div>
          <br />
          <ReactQuill
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={setContent}
            value={content}
          />
          <div className="text-end">
            <button
              type="submit"
              className="editor-btn"
              onClick={btnName === 'Update' ? onClickUpdate : onClickUpload}
            >
              {btnName}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RichTextEditor
