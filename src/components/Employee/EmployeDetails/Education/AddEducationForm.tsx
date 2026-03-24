import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '~/ui/button'
import { HRInput } from '~/components/Input/Input'
import { educationSchema, type EducationFormValue } from './AddEducationZod'
import { HRSelect } from '~/components/Select/Select'
import { HRCard } from '~/components/Card/Card'

type Props = {
  setOpen: (open: boolean) => void
}

export const AddEducationForm = ({ setOpen }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EducationFormValue>({
    resolver: zodResolver(educationSchema),
    mode: 'onChange',
  })

  console.log(errors)
  const onsubmit = (data: EducationFormValue) => {
    console.log('Save Changes: ', data)
    setOpen(false)
  }

  const statusData = [
    {
      id: 0,
      content: 'Completed',
      value: 'Completed',
    },
    {
      id: 1,
      content: 'InCompleted',

      value: 'InComplete',
    },
    {
      id: 2,
      content: 'In Progress',
      value: 'In Progress',
    },
  ]

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="absolute -top-2.5 left-0 text-[16px] font-semibold leading-6">
        Education Details
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <HRCard
          cardClassName="mt-9  border rounded-lg border-[#E4E4E7] p-4 "
          cardContnetClassName="flex flex-col gap-4 p-0"
        >
          <HRInput
            Label="Degree/Qualification"
            isRequired
            type="text"
            placeholder="e.g. Bachelor of Science"
            inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
            error={errors.qualification?.message}
            {...register('qualification')}
          />

          <HRInput
            Label="Field of Study"
            isRequired
            type="text"
            placeholder="e.g. Computer Science"
            inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
            error={errors.studyField?.message}
            {...register('studyField')}
          />

          <HRInput
            Label="Institution/University"
            isRequired
            type="text"
            placeholder="e.g. Global College"
            inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
            error={errors.university?.message}
            {...register('university')}
          />
          <div className="grid grid-cols-2 gap-4">
            <HRInput
              Label="Start Year"
              type="text"
              placeholder="e.g 2016"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              {...register('startYear')}
            />

            <HRInput
              Label="End Year"
              type="text"
              placeholder="e.g 2020"
              inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
              {...register('endYear')}
            />
          </div>

          <HRInput
            Label="Grade/GPA"
            type="text"
            placeholder="e.g. 3.8"
            inputClassName="px-3 py-[10px] rounded-[6px] border border-[#E4E4E7]"
            {...register('grade')}
          />

          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <HRSelect
                Label="Status"
                selectData={statusData}
                triggerClassName="w-full px-3 py-[10px] rounded-[6px] border-1 border-[#E4E4E7] bg-white"
                placeholder="State"
                value={field.value}
                onValueChange={field.onChange}
                disabled={false}
              />
            )}
          />

          <div className="bg-white rounded-b-xl flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className=" text-[14px] font-medium leading-4 text-[#A6A6A6] "
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="secondary"
              className="text-[14px] leading-5 font-medium text-white "
            >
              Add
            </Button>
          </div>
        </HRCard>
      </form>
    </div>
  )
}
