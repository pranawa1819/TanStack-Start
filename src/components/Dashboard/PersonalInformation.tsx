import { HRCard } from '../Card/Card'
import { personalData } from './Schema/PersonalData'

export const PersonalInformation = () => {
  return (
    <>
      {personalData.map((items, index) => (
        <HRCard
          cardClassName="w-full h-87.5 p-6 bg-white border-none rounded-xl shadow-sm "
          cardContnetClassName="p-0 flex flex-col gap-4 "
        >
          <div className="flex gap-3" key={index}>
            <div className="w-29.5 h-29.5 ">
              <img
                src={items.image}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <span>{items.name}</span>
                <span>{items.position}</span>
              </div>
              <div
                className={`w-13.25 text-center px-2 py-1  rounded-[400px] text-[12px] leading-4 font-semibold ${items.status == 'Active' ? 'bg-[#DCFCE7] text-green-600' : 'bg-red-100 text-red-600'}`}
              >
                {items.status}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {items.employee.map((val, index) => {
              const Icon = val.icon
              return (
                <HRCard
                  cardClassName="p-2 border-none bg-[#F9FAFB] rounded-xl shadow-none"
                  cardContnetClassName='flex items-center gap-2 p-0'
                  key={index}
                >
                  <Icon className="text-[16px] text-[#71717A]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-[#71717A] font-normal leading-4">
                      {val.label}
                    </span>
                    <span className="text-[14px] text-[#09090B] font-medium leading-5">
                      {val.subLabel}
                    </span>
                  </div>
                </HRCard>
              )
            })}
          </div>
        </HRCard>
      ))}
    </>
  )
}
