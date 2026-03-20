import { HRCard } from '~/components/Card/Card'
import { employees } from '../../Schema/EmployeeTableData'

export const PersonalDetailDisplay = ({
  employeeId,
}: {
  employeeId: string
}) => {
  const employee = employees.find((emp) => emp.employeeId === employeeId)

  return (
    <>
      <HRCard
        cardClassName=" border-none p-0 rounded-none shadow-none"
        cardContnetClassName="p-0"
      >
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>First Name</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.firstName}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Middle Name</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.middleName}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Last Name</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.lastName}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Personal Email</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.email}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Phone number</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.phone}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Country</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.country}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Province</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.province}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>City</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.city}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Municipality/VDC</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.municipality}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Ward Number</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.ward}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Date of Bith</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.dateOfBirth}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Gender</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.gender}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className='text-[12px] font-medium leading-4 text-[#71717A]'>Marital Status</span>
            <span className='text-[14px] font-medium leading-5 text-[#09090B]'>{employee?.maritalStatus}</span>
          </div>
        </div>
      </HRCard>
    </>
  )
}
