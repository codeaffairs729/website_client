import React, { useState, useEffect } from 'react'
import TechComponentIcon from './techComponentIcon'
import styles from '../styles/hireService.module.css'

const TechComponent = ({ techList, frontActive, backActive, mobileActive }) => {
  const mobileTech = [
    { id: 1, name: 'Android', path: '/images/android_4.webp' },
    {
      id: 2,
      name: 'Flutter',
      path: '/images/flutter.webp',
      altImg: '',
    },

    {
      id: 6,
      name: 'Swift',
      path: '/icons/swift.webp',
      altImg: 'Swift Icon',
    },
    {
      id: 7,
      name: 'ionic',
      path: '/icons/ionic.webp',
      altImg: '',
    },
    {
      id: 3,
      name: 'React Native',
      path: '/icons/reactjs.webp',
      altImg: '',
    },
  ]

  const frontTech = [
    {
      name: 'Rails',
      path: '/icons/rails.webp',
    },

    {
      name: 'Vuejs',
      path: '/icons/vuejs.webp',
    },
    { name: 'ReactJs', path: '/icons/reactjs.webp' },
    {
      name: 'NextJs',
      path: '/icons/nextjs.webp',
    },
    {
      name: 'Nuxtjs',
      path: '/icons/nuxtjs.webp',
    },
  ]

  const backTech = [
    {
      name: 'Nodejs',
      path: '/icons/nodejs.webp',
    },

    {
      name: 'Shopify',
      path: '/images/shopify.webp',
    },
    {
      name: 'Laravel',
      path: '/icons/laravel.webp',
    },
    {
      name: 'Ruby',
      path: '/images/ror_orig.webp',
    },
    {
      name: 'Python',
      path: '/images/python_2.webp',
    },
  ]
  const [activeMobile, setActiveMobile] = useState(mobileActive)
  const [activeFront, setActiveFront] = useState(frontActive)
  const [activeBack, setActiveBack] = useState(backActive)

  const handleOnMobile = () => {
    setActiveMobile(true)
    setActiveFront(false)
    setActiveBack(false)

    setPath(mobileTech)
  }
  const handleOnFrontend = () => {
    setActiveMobile(false)
    setActiveFront(true)
    setActiveBack(false)
    setPath(frontTech)
  }
  const handleOnBackend = () => {
    setActiveMobile(false)
    setActiveFront(false)
    setActiveBack(true)
    setPath(backTech)
  }
  // if (techList === 'frontTech') setPath(frontTech)
  // else if (techList === 'mobileTech') setPath(mobileTech)
  // else if (techList === 'frontTech') setPath(backTech)
  const [textColor, setTextColor] = useState('red')
  const [isBlack, setIsBlack] = useState(true)
  const handleChnageTextColor = (e) => {
    setIsBlack(!isBlack)
    setTextColor(isBlack ? '#CCCCCC' : 'black ')
  }
  const [path, setPath] = useState([])
  useEffect(() => {
    if (techList === 'frontTech') setPath(frontTech)
    else if (techList === 'mobileTech') setPath(mobileTech)
    else if (techList === 'backTech') setPath(backTech)
  }, [])
  return (
    <>
      <div
        className={`${styles.servicefooter} d-flex flex-column justify-content-center align-items-center`}
      >
        <h2 className={`${styles.hireh2} service-header text-center`}>
          The Technologies And Services We Use For Website & CMS Development
        </h2>
        <ul className={styles.servicefooternavcontainer}>
          <li
            className={styles.cursor_pointer}
            onClick={handleOnMobile}
            style={{
              color: activeMobile ? 'blue' : 'black',
            }}
          >
            Mobile
          </li>
          <li
            className={styles.cursor_pointer}
            onClick={handleOnFrontend}
            style={{ color: activeFront ? 'blue' : 'black' }}
          >
            Frontend
          </li>
          <li
            className={styles.cursor_pointer}
            onClick={handleOnBackend}
            style={{ color: activeBack ? 'blue' : 'black' }}
          >
            Backend
          </li>
        </ul>
        <div
          className={`${styles.servicecontainer} ${styles.servicefooternavcontainerlogo}`}
        >
          <TechComponentIcon path={path} />
        </div>
      </div>
    </>
  )
}

export default TechComponent
