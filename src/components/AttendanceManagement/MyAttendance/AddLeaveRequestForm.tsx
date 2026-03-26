import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { HRTextArea } from '~/components/TextArea/TextArea'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { Form } from '~/components/Form/Form'
import { HRDatePicker } from '~/components/DatePicker/Date'
import { HRTimePicker } from '~/components/TimePicker/TimePicker'
import {
  addLeaveRequestSchema,
  type AddLeaveRequestFormValue,
} from './AddLeaveRequest.Zod'
import { HRLabel } from '~/components/Label/Label'
import { LuCloudUpload, LuDot } from 'react-icons/lu'
import { HRSelect } from '~/components/Select/Select'
import { FileUpload } from '~/components/Dashboard/CreateAnnouncement/FileUpload'
import { UploadIcon } from 'lucide-react'

export const AddLeaveRequestForm = () => {
  const form = ({} = useForm<AddLeaveRequestFormValue>({
    resolver: zodResolver(addLeaveRequestSchema),
    mode: 'onChange',
  }))
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = form

  const [text, setText] = useState('')
  const closeDialog = useDialogFormStore((state) => state.onClose)

  const onsubmit = (data: AddLeaveRequestFormValue) => {
    console.log('Save Changes: ', data)
    closeDialog()
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const words = newText.trim().split(/\s+/)

    if (words.length <= 100) {
      setText(newText)
      setValue('reasonforLeave', newText)
    }
  }
  const leaveOptions = [
    { id: 0, content: 'Annual Leave', value: 'Annual Leave' },
    { id: 1, content: 'Sick Leave', value: 'Sick Leave' },
    { id: 2, content: 'Unpaid', value: 'Unpaid' },
  ]

  const durationOptions = [
    { id: 0, content: 'Full', value: 'Full' },
    { id: 1, content: 'First Half', value: 'First Half' },
    { id: 2, content: 'Second Half', value: 'Second Half' },
  ]
  return (
    <div className="w-full flex flex-col gap-4">
      <Form form={form} onSubmit={onsubmit}>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-3 p-3 rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] shadow-sm">
            <span className="text-[12px] text-[#71717A] font-medium leading-4">
              Available Balances
            </span>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#18181B] font-medium leading-5">20</span>
                <span className="text-[12px] text-[#71717A] font-medium leading-4">Annual leaave</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#18181B] font-medium leading-5">2</span>
                <span className="text-[12px] text-[#71717A] font-medium leading-4">Sick leaave</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <HRDatePicker
              Label="Start Date"
              isRequired
              placeholder="2026-03-10"
              className=" py-2.5 rounded-[6px] border border-[#E4E4E7]"
              error={errors.startDate?.message as string}
              {...register('startDate')}
            />
            <HRDatePicker
              Label="End Date"
              isRequired
              placeholder="2026-03-10"
              className=" py-2.5 rounded-[6px] border border-[#E4E4E7]"
              error={errors.endDate?.message as string}
              {...register('endDate')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="leaveType"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Leave Type"
                  isRequired={true}
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={leaveOptions}
                  placeholder="Leave Type"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.leaveType?.message}
                  disabled={false}
                />
              )}
            />

            <Controller
              name="durationType"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Duration Type"
                  isRequired={true}
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={durationOptions}
                  placeholder="Duration Typet"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.durationType?.message}
                  disabled={false}
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">
              Attachment (Image/ File)
            </HRLabel>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <FileUpload
                  className="border border-[#E4E4E7] bg-[#F4F4F5] rounded-[2px] py-6 text-center cursor-pointer flex flex-col justify-center items-center gap-2"
                  cardClassName="flex flex-col gap-2 items-center"
                  iconClassName="w-12 h-12 p-1 flex justify-center items-center rounded-[400px] bg-[#C6D2FF]"
                  icon={LuCloudUpload}
                  iconClass="text-indigo-600"
                  label="Drag and drop to upload a file"
                  subLable="Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)"
                  buttonClassName="w-30 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium text-white"
                  browseText="Browse Files"
                  drag
                  onChange={(file) => field.onChange(file)}
                />
              )}
            />
          </div>
          <HRTextArea
            Label="Reason for Leave"
            isRequired={true}
            placeholder="explain the reason for request"
            textAreaClassName="px-3 py-[10px] rounded-[6px] border  border-[#E4E4E7]"
            value={text}
            onChange={handleChange}
            error={errors.reasonforLeave?.message}
          />
        </div>
      </Form>
    </div>
  )
}
