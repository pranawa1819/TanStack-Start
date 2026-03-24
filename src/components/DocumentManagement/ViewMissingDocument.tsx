const data = [
  {
    id: 1,
    name: 'Tax Form W-4',
  },
  {
    id: 2,
    name: 'Emergency Contact',
  },
]
const ViewMissingDocument = () => {
  return (
    <div className="text-sm font-medium flex flex-col gap-6">
      Missing Documents
      {data.map((item) => (
        <div className="rounded-xl border border-[#FFF085] bg-[#FEFCE8] p-3 flex items-center shadow-sm">
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default ViewMissingDocument
