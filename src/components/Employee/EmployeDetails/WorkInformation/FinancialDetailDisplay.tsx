import { HRCard } from '~/components/Card/Card'
import { employees } from '../../Schema/EmployeeTableData'

export const FinancialDetailDisplay = ({
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
              Gross Salary
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.grossSalary}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Basic Salary
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.basicSalary}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Bank Name
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.bankName}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Bank Account Number
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.bankAccountNumber}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-medium leading-4 text-[#71717A]">
              Bank Account Name
            </span>
            <span className="text-[14px] font-medium leading-5 text-[#09090B]">
              {employee?.bankAccountName}
            </span>
          </div>
        </div>
      </HRCard>
    </>
  )
}
