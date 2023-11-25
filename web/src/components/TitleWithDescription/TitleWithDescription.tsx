type TitleWithDescriptionProps = {
  title: string
  description: string
}

const TitleWithDescription = ({
  title,
  description,
}: TitleWithDescriptionProps) => {
  return (
    <>
      <h1 className="mb-2 text-[1.5rem] font-bold leading-[150%] text-dark-grey md:text-hm">
        {title}
      </h1>
      <p className="text-bm  text-grey">{description}</p>
    </>
  )
}

export default TitleWithDescription
