import { LuSearch } from 'react-icons/lu'

const SearchBar = ({
  placeholder,
  className,
}: {
  placeholder: string
  className?: string
}) => {
  return (
    <div
      className={`rounded-[6px] py-2.5 px-4 bg-[#FFF] border border-[#E4E4E7] gap-2 flex items-center ${className}`}
    >
      <LuSearch className="text-[#71717A]" />
      <input
        placeholder={placeholder}
        className="placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-[#71717A]"
      ></input>
    </div>
  )
}

export default SearchBar
