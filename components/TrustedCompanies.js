const TrustedCompanies = ({ title, images }) => {
  return (
    <>
    <div className="mt-36 lg:mt-32">
      <p className="font-display text-lg font-semibold text-black text-center">
        {title}
      </p>
      <ul
        role="list"
        className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-10"
      >
        {images.slice(0, 6).map((image, index) => (
          <li key={index} className="flex">
            <img
              alt={image.alt || "Company logo"}
              src={image.src}
              width={image.width || 150}
              height={image.height || 48}
              loading="lazy"
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default TrustedCompanies;