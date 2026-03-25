import { HRCard } from "~/components/Card/Card"
import { LuCircleCheckBig } from "react-icons/lu";


export const OverTimeWorkFlow = () => {

  return (
    <>
      
            <HRCard
              cardClassName="w-full p-none  border-none  rounded-none shadow-none"
              cardContnetClassName="p-0 flex flex-col gap-4 items-center"
            >
               <LuCircleCheckBig className="text-[20px]"/>
               <div className="flex flex-col gap-1 items-center">
                <span className="text-[16px] font-medium text-[#71717A] leading-6">No Custom Pipeline Defined</span>
                <span className="text-[14px] font-normal text-[#71717A] leading-5">Requests will follow the company's global default rules.</span>
               </div>
            </HRCard>
          
    </>
  )
}
