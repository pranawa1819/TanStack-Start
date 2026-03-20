import { ContactInformationForm } from "./WorkDetails/ContactInformationForm"
import { EmployeeDateForm } from "./WorkDetails/EmployeeDateForm"
import { WorkOrganizationForm } from "./WorkDetails/WorkOrganizationForm"
import { WorkScheduleTypeForm } from "./WorkDetails/WorkScheduleTypeForm"


export const WorkInformationForm = () => {

  return (
    <>
    <div className='flex flex-col gap-4'>
      <WorkOrganizationForm />
      <WorkScheduleTypeForm/>
      <ContactInformationForm/>
      <EmployeeDateForm />
      </div>
    </>
  )
}
