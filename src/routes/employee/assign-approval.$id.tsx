import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { LuArrowLeft } from 'react-icons/lu'
import { employees } from '~/components/Employee/Schema/EmployeeTableData'

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
      <div className="w-full  max-h-[calc(100vh-84px)] overflow-auto flex flex-col  bg-[#F9FAFB] px-6 pb-13">
        <div
          className="flex gap-1 cursor-pointer px-12 pt-6 items-center"
          onClick={() => navigate({ to: '/employee' })}
        >
          <LuArrowLeft />
          <span>Back</span>
        </div>
      </div>
    </>
  )
}
