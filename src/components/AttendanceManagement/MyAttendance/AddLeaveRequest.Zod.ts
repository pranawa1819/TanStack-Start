import z from 'zod'

export const addLeaveRequestSchema = z.object({
  startDate: z.string().min(10, 'Start Date is required'),
  endDate: z.string().min(10, 'End Date is required'),
  leaveType: z.string().min(1, 'Leave type is required'),
  durationType: z.string().min(1, 'Duration type is required'),
  substitutionColleague: z
    .string()
    .min(1, 'Substitution colleague is required'),
  reasonforLeave: z.string().min(1, 'Reason for leave is required'),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'Image is required'),
})

export type AddLeaveRequestFormValue = z.infer<typeof addLeaveRequestSchema>
