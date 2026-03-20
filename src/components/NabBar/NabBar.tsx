import { Notification } from "../Icon/Notification"

export const NabBar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 px-12 py-4 flex justify-between shadow-[0_1px_2px_0_rgba(255,0,0,0.05)] bg-white">
        <div className="px-4 py-2 rounded-3xl border border-[#E4E4E7] flex items-center gap-2 text-[14px] font-medium leading-5 text-[#4F39F6]">
          <span>Clock In</span>
          <span>11:00 AM</span>
        </div>

        <div className="flex gap-2.5 items-center">
          <div className="w-8 h-8  rounded-full p-2 bg-[#E0E7FF] ">
           <Notification />
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 bg-[#FAFAFA] rounded-lg">
            <div className="w-8 h-8 ">
              <img
                src="/Image.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ">
              <span className="text-[14px] text-[#3F3F46] font-semibold leading-5">
                John Doe
              </span>
              <span className="text-[12px] text-[#71717A] font-normal leading-5">
                Project Manager
              </span>
            </div>
            <div className="w-4 h-4 ">
              <img
                src="/chevrons-up-down.svg"
                alt="arrow"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
