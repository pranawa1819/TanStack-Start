import { useHome, type HomeData } from '~/hooks/useHome'
import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  const data = useHome(1)

  const filterData = search
    ? data.data?.filter((item: HomeData) => {
        return item.title.toLowerCase().includes(search)
      })
    : []
  console.log(filterData)

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder="search.."
            className="border-2 rounded-2xl px-4 py-1"
          />
          <button className="border-2 rounded-2xl px-4 py-1">Search</button>
        </div>

      {!search ? null:( 
        <div>
          {filterData?.length ===0 ?(<div>Data not found</div>) :(
            <div className="border-2 rounded-2xl p-3 gap-4  h-40  overflow-auto">
              {filterData?.map((item: HomeData, index) => (
                <div key={index} className="flex flex-col  gap-2">
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        )}
      </form>
    </>
  )
}
