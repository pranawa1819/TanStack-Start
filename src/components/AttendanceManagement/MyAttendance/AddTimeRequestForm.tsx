import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { HRTextArea } from '~/components/TextArea/TextArea'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import { Form } from '~/components/Form/Form'
import { HRDatePicker } from '~/components/DatePicker/Date'
import { HRTimePicker } from '~/components/TimePicker/TimePicker'
import {
  addTimeRequestSchema,
  type AddTimeRequestFormValue,
} from './AddTimeRequest.Zod'
import { HRLabel } from '~/components/Label/Label'
import { LuDot } from 'react-icons/lu'

export const AddTimeRequestForm = () => {
  const form = ({} = useForm<AddTimeRequestFormValue>({
    resolver: zodResolver(addTimeRequestSchema),
    mode: 'onChange',
  }))
  const {
    register,
    setValue,
    formState: { errors },
  } = form

  const [text, setText] = useState('')
  const closeDialog = useDialogFormStore((state) => state.onClose)

  const onsubmit = (data: AddTimeRequestFormValue) => {
    console.log('Save Changes: ', data)
    closeDialog()
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const words = newText.trim().split(/\s+/)

    if (words.length <= 100) {
      setText(newText)
      setValue('reasonforCheckIn', newText)
    }
    if (words.length <= 100) {
      setText(newText)
      setValue('reasonforCheckout', newText)
    }
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <Form form={form} onSubmit={onsubmit}>
        <div className="flex flex-col gap-4 ">
          <HRDatePicker
            Label="Effective Date"
            isRequired
            placeholder="2026-03-10"
            className="py-2.5 rounded-[6px] border border-[#E4E4E7]"
            error={errors.date?.message as string}
            {...register('date')}
          />
          <div className="grid grid-cols-2 gap-4">
            <HRTimePicker
              Label="Revised Check-In"
              isRequired={true}
              placeholder="9:00 am"
              className=" py-2.5 rounded-[6px] border border-[#E4E4E7]"
              error={errors.checkIn?.message}
              {...register('checkIn')}
            />
            <HRTimePicker
              Label="Revised Check-Out"
              isRequired={true}
              placeholder="6:00 pm"
              className=" py-2.5 rounded-[6px] border border-[#E4E4E7]"
              error={errors.checkOut?.message}
              {...register('checkOut')}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <HRTextArea
              Label="Reason for Check-In Correction"
              isRequired={true}
              placeholder="e.g biometric failure"
              textAreaClassName="px-3 py-[10px] rounded-[6px] border  border-[#E4E4E7]"
              value={text}
              onChange={handleChange}
              error={errors.reasonforCheckIn?.message}
            />
            <HRTextArea
              Label="Reason for Check-Out Correction"
              isRequired={true}
              placeholder="e.g biometric failure"
              textAreaClassName="px-3 py-[10px] rounded-[6px] border  border-[#E4E4E7]"
              value={text}
              onChange={handleChange}
              error={errors.reasonforCheckout?.message}
            />
          </div>
          <HRLabel labelClassName="text-[14px] text-[#09090B] font-medium leading-5">
            Request Workflow Approvers
          </HRLabel>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 p-3 bg-[#F4F4F5] rounded-xl">
              <img src="/Image.png" alt="profile" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#09090B] font-medium leading-5">
                  Samita Waiba
                </span>
                <span className="flex text-[12px] text-[#71717A] font-medium leading-4">
                  EID 012
                  <LuDot className="text-[16px] " />
                  Front End Lead
                </span>
              </div>
            </div>
            <div className="flex gap-2 p-3 bg-[#F4F4F5] rounded-xl">
              <img src="/Image.png" alt="profile" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#09090B] font-medium leading-5">
                  Ramesh Sharma
                </span>
                <span className="flex text-[12px] text-[#71717A] font-medium leading-4">
                  EID 012
                  <LuDot className="text-[16px] " />
                  HR Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
