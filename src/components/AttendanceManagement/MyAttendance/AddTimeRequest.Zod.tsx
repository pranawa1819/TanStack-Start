import z from 'zod'

export const addTimeRequestSchema = z.object({
  date: z
    .string()
    .min(10, 'Date is required'),
  checkIn: z.string().min(1, 'Check In is required'),
  checkOut: z.string().min(1, 'Check Out is required'),
  reasonforCheckIn: z.string().min(1, 'Reason for check in is required'),
  reasonforCheckout: z.string().min(1, 'Reason for check out is required'),


})

export type AddTimeRequestFormValue = z.infer<typeof addTimeRequestSchema>
