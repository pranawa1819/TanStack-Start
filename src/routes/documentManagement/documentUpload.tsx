import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { Controller, useForm } from 'react-hook-form'
import { LuChevronDown, LuCloudUpload } from 'react-icons/lu'
import z from 'zod'
import { FileUpload } from '~/components/Dashboard/CreateAnnouncement/FileUpload'
import { DropDown } from '~/components/DropDown/DropDown'
import { Button } from '~/ui/button'
import PageHeader from '~/ui/header'
import { Label } from '~/ui/label'
import { Switch } from '~/ui/switch'

export const Route = createFileRoute('/documentManagement/documentUpload')({
  component: RouteComponent,
})

const options = [
  {
    label: 'option1',
    value: 'option1',
  },
  {
    label: 'option2',
    value: 'option2',
  },
  {
    label: 'option3',
    value: 'option3',
  },
]

const uploadDocumentSchema = z.object({
  employeeName: z.string().min(1, 'Employee name is required'),
  documentCategory: z.string().min(1, 'Document Category name is required'),
  isVisibleToEmployee: z.boolean().optional(),
  file: z.instanceof(File).refine((file) => file.size > 0, 'File is required'),
})

type UploadDocumentFormProps = z.infer<typeof uploadDocumentSchema>

function RouteComponent() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<UploadDocumentFormProps>({
    resolver: zodResolver(uploadDocumentSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: UploadDocumentFormProps) => {
    console.log('form data:', data)
  }
  return (
    <div>
      <PageHeader title="Document Upload" />
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-xl bg-[#FFF] mx-6 flex flex-col gap-6"
      >
        <div className="flex gap-3 justify-around">
          <Label className="flex flex-col items-start w-full">
            Select Employee
            <Controller
              name="employeeName"
              control={control}
              render={({ field }) => (
                <DropDown
                  trigger={
                    <button className="flex items-center gap-2 py-2.5 w-full px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                      {field.value || 'Choose Employee'}
                      <LuChevronDown className="text-[#71717A] ml-auto" />
                    </button>
                  }
                  triggerClassName="w-full"
                  className="pt-1 pb-0 px-0 w-[var(--radix-dropdown-menu-trigger-width)]"
                >
                  <div
                    className=" flex flex-col w-full transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {options.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => field.onChange(item.value)}
                        className="px-2 py-1.5 w-full text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </DropDown>
              )}
            />
          </Label>

          <Label className="flex flex-col items-start w-full">
            Document Category
            <Controller
              name="documentCategory"
              control={control}
              render={({ field }) => (
                <DropDown
                  trigger={
                    <button className="flex items-center w-full gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                      {field.value || 'Choose Category'}
                      <LuChevronDown className="text-[#71717A] ml-auto" />
                    </button>
                  }
                  align="end"
                  className="pt-1 pb-0 px-0 w-[var(--radix-dropdown-menu-trigger-width)]"
                >
                  <div
                    className=" flex flex-col  transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {options.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => field.onChange(item.value)}
                        className="px-2 py-1.5 text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </DropDown>
              )}
            />
          </Label>
        </div>

        <Controller
          name="isVisibleToEmployee"
          control={control}
          render={({ field }) => (
            <div className="flex gap-3 items-center">
              <Switch
                color="#4F39F6"
                checked={field.value || false}
                onCheckedChange={field.onChange}
              />
              <div className="text-sm font-medium flex flex-col">
                Show to Employee
                <span className="text-[#71717A] font-normal">
                  Enable this to make the document visible in employee portal
                </span>
              </div>
            </div>
          )}
        />

        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <FileUpload
              className="border border-dashed rounded-[2px] bg-[#F4F4F5] py-6 text-center cursor-pointer flex flex-col justify-center items-center gap-2"
              icon={
                <LuCloudUpload
                  className="text-[#4F39F6] bg-[#C6D2FF] p-3 rounded-full"
                  size={48}
                />
              }
              label="Drag and drop to upload a file"
              subLable="Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)"
              buttonClassName="w-30 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium text-white"
              browseText="Browse Files"
              drag
              onChange={(file) => field.onChange(file)}
            />
          )}
        />

        <div className="flex ml-auto gap-4">
          <Button
            variant="destructive"
            className="border border-[#A6A6A6] cursor-pointer"
            disabled={isSubmitting}
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#4F39F6] text-[#FFF] cursor-pointer"
            disabled={!isValid || isSubmitting}
          >
            Upload Document
          </Button>
        </div>
      </form>
    </div>
  )
}
