import { HRCard } from '../Card/Card'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { DropDown } from '../DropDown/DropDown'
import { Dialog } from '../Dialog/Dialog'
import { employees } from './Schema/EmployeeData'
import { LuDot } from "react-icons/lu";
import { Button } from '~/ui/button'

export const EmployeeCard = () => {
  return (
    <>
      <div>
        <div className="px-6 pb-19.5 bg-[#F9FAFB]">
          <HRCard
            cardClassName="border-none p-6  rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]  "
            cardContnetClassName="grid grid-cols-3 gap-4 p-0"
          >
            {employees.map((items, index) => (
              <HRCard
                key={index}
                cardClassName="relative p-4 border border-[#E4E4E7] rounded-xl bg-white shadow-[0_1px_2px_0_rgba(255,0,0,0.05)]"
                cardContnetClassName="flex flex-col gap-4 p-0"
              >
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12 ">
                    <img
                      src="/Image.png"
                      alt="profile"
                      className="rounded-[400px] w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex-col gap-2  text-[16px] leading-6 font-medium">
                    <span className="text-[#09090B]">{items.name}</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#71717A] ">{items.email}</span>
                      <span className="text-[#71717A] ">
                        {items.designation}
                      </span>
                      <span className={`flex items-center text-[#71717A] ${items.status==="Online"?'text-green-600':''}`}><LuDot className={`w-6 h-6 ${items.status==="Online"?'text-green-600':'text-[#09090B]'}`}/>{items.status}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-5 ">
                  <DropDown
                    trigger={
                      <button>
                        <BsThreeDotsVertical />
                      </button>
                    }
                    align="end"
                    className="pt-1 pb-0 px-0"
                  >
                    <div
                      className=" flex flex-col  transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Dialog
                        triggerContent={
                          <Button type="button" variant="destructive" className="text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5">
                            Edit
                          </Button>
                        }
                      >
                        Hello
                      </Dialog>

                      <Button type="button" variant="destructive" className="text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5">
                        Block
                      </Button>
                      <Button type="button" variant="destructive" className="text-start border-t border-t-[#E4E4E7] text-red-600 cursor-pointer text-[14px] font-normal leading-5">
                        Delete
                      </Button>
                    </div>
                  </DropDown>
                </div>
              </HRCard>
            ))}
          </HRCard>
        </div>
      </div>
    </>
  )
}
