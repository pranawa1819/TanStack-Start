import { createFileRoute } from '@tanstack/react-router'
import { LuArrowLeft } from 'react-icons/lu'
import { HRCard } from '~/components/Card/Card'
import { EmployeeDetail } from '~/components/Employee/EmployeeDetail'
import { useNavigate } from '@tanstack/react-router'
import { employees } from '~/components/Employee/Schema/EmployeeTableData'

export const Route = createFileRoute('/employee/personalinformation/$id')({
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
    <div className="w-full  max-h-[calc(100vh-84px)] overflow-auto flex flex-col  bg-[#F9FAFB] px-6 pb-13">
      <div
        className="flex gap-1 cursor-pointer px-12 pt-6 items-center"
        onClick={() => navigate({ to: '/employee' })}
      >
        <LuArrowLeft />
        <span>Back</span>
      </div>

      <div className="text-[20px] leading-7 font-semibold text-[#09090B] px-12 py-6">Employee Details</div>
      <HRCard cardClassName="w-full p-6 bg-white border-none rounded-xl shadow-none"
          cardContnetClassName="p-0 flex flex-col gap-8">
        <HRCard
          cardClassName="w-full  p-6 bg-white border border-[#E4E4E7] rounded-xl shadow-sm"
          cardContnetClassName="p-0 flex flex-col gap-4"
        >
          <div className="flex gap-3">
            <div className="w-29.5 h-29.5">
              <img
                src="/Image.png"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <span className="text-lg font-semibold">{employee.name}</span>
               
               <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                  <span className='w-15 text-[12px] font-normal leading-4 text-[#71717A]'>Role</span>
                  <span className='text-[12px] font-medium leading-4 text-[#09090B]'>{employee.designation}</span>
                </div>
                 <div className='flex gap-3'>
                  <span className='w-15 text-[12px] font-normal leading-4 text-[#71717A]'>Email</span>
                  <span className=' text-[12px] font-medium leading-4 text-[#09090B]'>{employee.email}</span>
                </div>
                 <div className='flex gap-3'>
                  <span className='w-15 text-[12px] font-normal leading-4 text-[#71717A]'>Contact</span>
                  <span className='text-[12px] font-medium leading-4 text-[#09090B]'>{employee.phone}</span>

                </div>

               </div>
             
              
            </div>
          </div>
        </HRCard>

        <EmployeeDetail employeeId={id}/>
      </HRCard>
    </div>
  )
}
