import { AddressInformationForm } from './BasicDetails/AddressInformationForm'
import { EmergencyForm } from './BasicDetails/EmergencyForm'
import { PersonalInformationForm } from './BasicDetails/PersonalInformationForm'

export const BasicDetailForm = () => {

  return (
    <>
    <div className='flex flex-col gap-4'>
      <PersonalInformationForm />
      <AddressInformationForm/>
      <EmergencyForm />
      </div>
    </>
  )
}
