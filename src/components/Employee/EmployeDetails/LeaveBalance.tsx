import { HRCard } from '~/components/Card/Card'
import { Button } from '~/ui/button'
import { LuPlus } from 'react-icons/lu'
import { leaveBalanceData } from './LeaveBalance/LeaveBalanceData'
import { LuHistory } from 'react-icons/lu'
import { Dialog } from '~/components/Dialog/Dialog'
import { useState } from 'react'
import { AssignLeaveForm } from './LeaveBalance/AssignLeaveForm'

export const LeaveBalance = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="flex flex-col gap-6 max-h-115 overflow-auto pr-3">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-medium leading-7 text-[#09090B]">
            Leave Balance
          </div>
          <Dialog
            open={open}
            onOpenChange={setOpen}
            triggerContent={
              <Button
                type="button"
                variant="secondary"
                className="flex gap-2 items-center text-[14px] font-medium leading-5"
              >
                <LuPlus className="text-[16px] " />
                Assign Leave
              </Button>
            }
            className='p-4 sm:max-w-185'
          >
            <AssignLeaveForm setOpen={setOpen} />
          </Dialog>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {leaveBalanceData.map((items) => {
            const remaining = items.total - items.used

            const progress =
              items.used === 0
                ? 100
                : Math.max((remaining / items.total) * 100, 0)

            const barStyle = {
              width: `${progress}%`,
              backgroundColor: '#4F39F6',
              height: '100%',
            }

            return (
              <HRCard
                key={items.leave}
                cardClassName="p-6 border-l-4 border-r border-b border-t border-[#615FFF] rounded-xl shadow-sm bg-[#FFF]"
                cardContnetClassName="flex flex-col gap-2 p-0"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="text-[12px] font-medium leading-4 text-[#71717A]">
                        {items.leave}
                      </div>
                      <div className="text-[24px] font-normal text-[#312C85] flex gap-2 items-end">
                        {items.day}.0
                        <span className="text-[12px] leading-4 font-normal text-[#71717A]">
                          Days Left
                        </span>
                      </div>
                    </div>
                    <LuHistory className="text-[16px] text-[#615FFF]" />
                  </div>

                  <div className="flex justify-between">
                    <div>Total: {items.total}.0</div>
                    <div>Used: {items.used}.0</div>
                  </div>

                  <div className="w-full h-3 bg-indigo-50 rounded-full overflow-hidden">
                    <div
                      style={barStyle}
                      className="rounded-full transition-all duration-300"
                    />
                  </div>
                </div>
              </HRCard>
            )
          })}
        </div>
      </div>
    </>
  )
}
