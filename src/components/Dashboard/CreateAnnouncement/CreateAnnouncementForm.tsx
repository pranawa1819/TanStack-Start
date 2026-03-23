import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'


import { useState } from 'react'
import { FileUpload } from './FileUpload'
import { UploadIcon } from 'lucide-react'
import { HRInput } from '~/components/Input/Input'
import { HRSelect } from '~/components/Select/Select'
import { HRTextArea } from '~/components/TextArea/TextArea'
import { createAnnouncementSchema, type CreateAnnouncementFormValue } from './CreateAnnouncementForm.Zod'



export const CreateAnnouncementForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<CreateAnnouncementFormValue>({
    resolver: zodResolver(createAnnouncementSchema),
    mode: 'onChange',
  })

  const [text, setText] = useState('')

  console.log(errors)
  const onsubmit = (data: CreateAnnouncementFormValue) => {
    console.log('Save Changes: ', data)
  }

  const branchOptions = [
    { id: 0, content: 'Baneshwor', value: 'Baneshwor' },
    { id: 1, content: 'Chabhail', value: 'Chabhail' },
    { id: 2, content: 'Koteshwor', value: 'Koteshwor' },
    { id: 3, content: 'Thamel', value: 'Thamel' },
    { id: 4, content: 'Kalanki', value: 'Kalanki' },
  ]

  const departmentOptions = [
    { id: 0, content: 'HR', value: 'HR' },
    { id: 1, content: 'UI/UX Designer', value: 'UI/UX Designer' },
    { id: 2, content: 'Frontend', value: 'Frontend' },
    { id: 3, content: 'Backend', value: 'Backend' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    const words = newText.trim().split(/\s+/)

    if (words.length <= 200) {
      setText(newText)
      setValue('shortDescription', newText)
    }
  }

  return (
    <div className="relative w-full flex flex-col gap-4">
      <form onSubmit={handleSubmit(onsubmit)} id="announcement">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <HRInput
              Label="Announcement Title"
              isRequired={true}
              type="text"
              placeholder="Holiday"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              error={errors.announcementTitle?.message}
              {...register('announcementTitle')}
            />

            <Controller
              name="branch"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Branch"
                  isRequired={true}
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={branchOptions}
                  placeholder="Branch"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.branch?.message}
                  disabled={false}
                />
              )}
            />

            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <HRSelect
                  Label="Department"
                  isRequired={true}
                  triggerClassName="w-full px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
                  selectData={departmentOptions}
                  placeholder="Department"
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.department?.message}
                  disabled={false}
                />
              )}
            />

            <HRTextArea
              Label="Short Description"
              isRequired={true}
              placeholder="Type here"
              subLabel="Less than 200 words"
              textAreaClassName="px-3 py-[10px] rounded-[6px] border  border-[#E4E4E7]"
              value={text}
              onChange={handleChange}
              error={errors.shortDescription?.message}
            />
          </div>

          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <FileUpload
                className="border border-dashed rounded-[2px] py-6 text-center cursor-pointer flex flex-col justify-center items-center gap-2"
                icon={<UploadIcon />}
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
      </form>
    </div>
  )
}
