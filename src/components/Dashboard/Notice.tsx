import { useState } from 'react'
import { Dialog } from '../Dialog/Dialog'
import { noticeData } from './Schema/NoticeData'
import { CreateAnnouncementForm } from './CreateAnnouncement/CreateAnnouncementForm'

export const Notice = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="w-full h-153 py-6 pl-6 pr-3 bg-white rounded-xl shadow-sm flex flex-col gap-4">
        <div className="text-[18px] text-[#09090B] font-medium leading-7">
          Notice
        </div>
        <div className="flex flex-col gap-3 overflow-auto pr-3 notice-scroll">
          {noticeData.map((val, index) => (
            <div
              className="p-2 bg-[#F9FAFB] rounded-xl  flex gap-3"
              key={index}
            >
              <div className="w-17.5 h-17.5 rounded-xl p-px border border-[#E4E4E7] bg-[#E4E4E7]">
                <img
                  src={val.image}
                  alt="image"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-[14px] text-[#09090B] font-medium leading-5 line-clamp-1">
                    {val.title}
                  </span>
                  <div
                    className={`px-2 py-1 rounded-[400px] font-normal text-[12px] leading-4
                        ${val.noticeType === 'Important' ? 'bg-[#FFE2E2] text-red-600 ' : ''}
                        ${val.noticeType === 'Info' ? 'bg-[#DBEAFE] text-blue-600 ' : ''}
                        ${val.noticeType === 'Notice' ? 'bg-[#FEF9C2] text-yellow-600 ' : ''}
                        `}
                  >
                    {val.noticeType}
                  </div>
                </div>
                <span className="text-[12px] text-[#71717A] font-normal leading-4 line-clamp-3">
                  {val.description}
                </span>
                <span className="text-[8px] text-[#71717A] font-normal leading-3">
                  {val.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={open}
          onOpenChange={setOpen}
          triggerContent={
            <div className="flex justify-end">
              <button
                type="button"
                className="w-30 text-center gap-2 px-4 py-2 bg-[#4F39F6] rounded-sm text-[14px] font-medium leading-5 text-white"
              >
                Create Now
              </button>
            </div>
          }
          className="p-4"
        >
          <CreateAnnouncementForm setOpen={setOpen} />
        </Dialog>
      </div>
    </>
  )
}
