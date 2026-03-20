import { BankDetailForm } from "./FinancialDetails/BankDetailForm"
import { SalaryForm } from "./FinancialDetails/SalaryForm"


export const FinancialDetailForm = () => {

  return (
    <>
    <div className='flex flex-col gap-4'>
    <SalaryForm/>
    <BankDetailForm/>
      </div>
    </>
  )
}
