import { LuDot } from 'react-icons/lu'
import type { CardProps } from './Types/ReviewAndApprove.type'
import { Label } from '~/ui/label'
import { Input } from '~/ui/input'
import { Textarea } from '~/ui/textarea'

const ReviewRejectForm = ({ data }: { data: CardProps }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  }
  const initials = getInitials(data.employeeName)
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        Send Rejection Reason To:
        <div className="flex p-3 gap-2 rounded-xl bg-[#F4F4F5]">
          <div className="p-4 rounded-full bg-[#4F39F6] text-[12px] font-semibold text-[#FFF] w-12 h-12 items-center justify-center flex">
            {initials}
          </div>
          <div className="text-[16px] font-semibold">
            {data.employeeName}
            <div className="text-[12px] flex items-center font-medium text-[#71717A]">
              {data.employeeId} <LuDot /> {data.employeeDepartment}
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <Label className="flex flex-col gap-3 items-start">
          Document Name
          <Input
            className="p-3"
            type="text"
            name="documentName"
            value={data.fileName}
            disabled
          />
        </Label>

        <Label className="flex flex-col gap-3 items-start">
          Rejection Reason
          <Textarea
            name="rejectionReason"
            placeholder="Type here"
            className="resize-none"
          />
          <span className="text-[#71717A] text-[12px] font-normal">
            Less than 200 words
          </span>
        </Label>
      </form>
    </div>
  )
}

export default ReviewRejectForm
