import Image from 'next/image'

const LazyImage = ({ isVisible, src, alt, height, width }) => {
  if (isVisible) {
    return (
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        // objectFit="cover"
      />
    )
  }
  return null
}

export default LazyImage
