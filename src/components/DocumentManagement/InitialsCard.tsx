type InitialsCardProps = {
  name: string
  className?: string
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

const InitialsCard = ({ name, className }: InitialsCardProps) => {
  const initials = getInitials(name)
  return (
    <div
      className={`p-4 rounded-full bg-[#4F39F6] text-[12px] font-semibold text-[#FFF] w-12 h-12 items-center justify-center flex ${className}`}
    >
      {initials}
    </div>
  )
}

export default InitialsCard
