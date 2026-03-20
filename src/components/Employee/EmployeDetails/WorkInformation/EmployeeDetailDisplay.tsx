import { HRCard } from '~/components/Card/Card'
import { employees } from '../../Schema/EmployeeTableData'

export const EmployeeDetailDisplay = ({
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
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Employee ID
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.employeeId}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Branch
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.branch}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Department
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.department}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Job Level
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.jobLevel}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Designation
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.designation}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Manager
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.reportingManager}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Shift
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.shift}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Work Type
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.workType}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Employee type
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.employeeType}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Work Email
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.workEmail}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Work Phone{' '}
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.workPhoneNumber}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Joining Date
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.joiningDate}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Contract Start Date
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.contractStartDate}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Contract End Date
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.contractEndDate}
            </span>
          </div>
        </div>
      </HRCard>
    </>
  )
}
