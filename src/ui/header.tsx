const PageHeader = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <div className=" py-6 px-12 flex gap-4 items-center">
      <span className="text-xl font-semibold text-[#09090B] ">{title}</span>
      <div className="flex items-center ml-auto">{children}</div>
    </div>
  )
}

export default PageHeader
