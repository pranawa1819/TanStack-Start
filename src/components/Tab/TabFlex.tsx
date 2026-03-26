import { LuGrid2X2, LuList } from 'react-icons/lu'
import { TabsList, TabsTrigger } from '~/ui/tabs'

export function TabsFlex() {
  return (
    <TabsList className="bg-[#FFF] flex gap-0 p-0 rounded-xl overflow-hidden">
      <TabsTrigger
        value="table"
        className="flex-1 m-0 rounded-none text-[#71717A] rounded-l-xl data-[state=active]:text-[#FFF] border border-[#4F39F6]  data-[state=active]:bg-[#4F39F6]"
      >
        <LuList />
      </TabsTrigger>
      <TabsTrigger
        value="card"
        className="flex-1 m-0 rounded-none text-[#71717A] rounded-r-xl data-[state=active]:text-[#FFF] border border-[#4F39F6]  data-[state=active]:bg-[#4F39F6]"
      >
        <LuGrid2X2 />
      </TabsTrigger>
    </TabsList>
  )
}
