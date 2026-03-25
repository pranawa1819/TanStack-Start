import { InputGroup, InputGroupAddon, InputGroupInput } from '~/ui/input-group'
import { LuSearch } from 'react-icons/lu'

const SearchBar = ({
  searchResult,
  placeholder,
  className,
}: {
  placeholder: string
  className?: string
  searchResult?: string
}) => {
  return (
    <InputGroup
      className={`rounded-[6px] bg-[#FFF] border border-[#E4E4E7] flex items-center ${className}`}
    >
      <InputGroupInput
        placeholder={placeholder}
        className="text-[#71717A] font-medium text-sm"
      />
      <InputGroupAddon>
        <LuSearch className="text-[#71717A]" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{searchResult}</InputGroupAddon>
    </InputGroup>
  )
}

export default SearchBar
