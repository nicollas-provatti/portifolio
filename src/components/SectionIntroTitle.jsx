function SectionIntroTitle({ title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
      <h2 className="uppercase text-lg lg:text-xl">{title}</h2>
      <div className="w-10 h-1 rounded-lg bg-blue-700"></div>
      <p className="text-xs text-gray-600 max-w-xl m-auto lg:text-sm">{description}</p>
    </div>
  )
}

export default SectionIntroTitle;