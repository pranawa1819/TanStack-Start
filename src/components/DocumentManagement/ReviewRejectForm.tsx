import { LuDot } from 'react-icons/lu'
import type { CardProps } from './Types/ReviewAndApprove.type'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../Form/Form'
import { HRInput } from '../Input/Input'
import { HRTextArea } from '../TextArea/TextArea'
import { useState } from 'react'
import { useDialogFormStore } from '../Dialog/form-store'
import InitialsCard from './InitialsCard'

const ReviewRejectReasonFormSchema = z.object({
  documentName: z.string().min(1, 'Document Name is required'),
  rejectionReason: z
    .string()
    .min(1, 'Rejection reason is required')
    .max(200, 'Rejection reason must be less than 200 characters'),
})

type ReviewRejectReasonFormProps = z.infer<typeof ReviewRejectReasonFormSchema>

const ReviewRejectForm = ({ data }: { data: CardProps }) => {
  const form = ({} = useForm<ReviewRejectReasonFormProps>({
    resolver: zodResolver(ReviewRejectReasonFormSchema),
    mode: 'onChange',
  }))
  const {
    register,
    setValue,
    formState: { errors },
  } = form

  const [text, setText] = useState('')
  const closeDialog = useDialogFormStore((state) => state.onClose)

  const onSubmit = (data: ReviewRejectReasonFormProps) => {
    console.log('form data:', data)
    closeDialog()
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const words = newText.trim().split(/\s+/)

    if (words.length <= 200) {
      setText(newText)
      setValue('rejectionReason', newText)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        Send Rejection Reason To:
        <div className="flex p-3 gap-2 rounded-xl bg-[#F4F4F5]">
          <InitialsCard name={data.employeeName} />
          <div className="text-[16px] font-semibold">
            {data.employeeName}
            <div className="text-[12px] flex items-center font-medium text-[#71717A]">
              {data.employeeId} <LuDot /> {data.employeeDepartment}
            </div>
          </div>
        </div>
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <HRInput
            Label="Document Name"
            labelClassName="flex flex-col gap-3 items-start"
            className="p-3"
            inputClassName="mb-4"
            type="text"
            value={data.fileName}
            disabled
            {...register('documentName')}
          />

          <HRTextArea
            Label="Rejection Reason"
            placeholder="Type here"
            textAreaClassName="flex flex-col gap-3 items-start"
            subLabel="Less than 200 words"
            value={text}
            onChange={handleChange}
            error={errors.rejectionReason?.message}
          />
        </div>
      </Form>
    </div>
  )
}

export default ReviewRejectForm
