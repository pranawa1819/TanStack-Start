import z from 'zod'
import { Form } from '../Form/Form'
import { HRInput } from '../Input/Input'
import { useDialogFormStore } from '../Dialog/form-store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const EditCategoryFormSchema = z.object({
  categoryName: z.string().min(1, 'Category Name is required'),
})

type EditCategoryFormProps = z.infer<typeof EditCategoryFormSchema>

const AddEditCategoryForm = () => {
  const form = ({} = useForm<EditCategoryFormProps>({
    resolver: zodResolver(EditCategoryFormSchema),
    mode: 'onChange',
  }))

  const { register } = form
  const closeDialog = useDialogFormStore((state) => state.onClose)

  const onSubmit = (data: EditCategoryFormProps) => {
    console.log('form data:', data)
    closeDialog()
  }

  return (
    <div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <HRInput
            Label="Category Name"
            labelClassName="flex flex-col gap-3 items-start"
            className="p-3"
            inputClassName="mb-4"
            type="text"
            {...register('categoryName')}
          />
        </div>
      </Form>
    </div>
  )
}

export default AddEditCategoryForm
