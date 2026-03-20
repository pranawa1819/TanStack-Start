import { HRCard } from '~/components/Card/Card'
import { employees } from '../../Schema/EmployeeTableData'

export const EmergencyDetailDisplay = ({
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
              Emergency Contact
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.emergencyContact}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Emergency Contact Name
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.emergencyContactName}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Emergency Contact Relation
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.emergencyContactRelation}
            </span>
          </div>
        </div>
      </HRCard>
    </>
  )
}
