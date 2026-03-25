import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { LuArrowLeft } from 'react-icons/lu'
import { HRCard } from '~/components/Card/Card'
import { employees } from '~/components/Employee/Schema/EmployeeTableData'
import { LuDot } from 'react-icons/lu'
import { AssignApproval } from '~/components/Employee/AssignApproval/AssignApprovalTab'

export const Route = createFileRoute('/employee/assign-approval/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

  const employee = employees.find((emp) => emp.employeeId === id)

  if (!employee) {
    return <div>Employee not found</div>
  }

  return (
    <>
      <div className="w-full  max-h-[calc(100vh-84px)] overflow-auto flex flex-col  bg-[#F9FAFB] ">
        <div
          className="flex gap-1 cursor-pointer px-12 pt-6 items-center"
          onClick={() => navigate({ to: '/employee' })}
        >
          <LuArrowLeft />
          <span>Back</span>
        </div>

        <HRCard
          cardClassName="w-full  py-6 px-12 bg-[#F9FAFB] border-none  rounded-none shadow-none"
          cardContnetClassName="p-0"
        >
          <div className="flex gap-3">
            <div className="w-12 h-12">
              <img
                src="/Image.png"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{employee.name}</span>

              <div className="flex items-center">
                <span>{employee.employeeId}</span>
                <LuDot className="text-[16px]" />
                <span>{employee.designation}</span>
              </div>
            </div>
          </div>
        </HRCard>
        <div className='px-6'>
        <HRCard
          cardClassName="w-full p-6 bg-white border-none rounded-xl shadow-none"
          cardContnetClassName="p-0 flex flex-col gap-8"
        >
          <AssignApproval employeeId={id} />
        </HRCard>
        </div>
      </div>
    </>
  )
}
