import z from 'zod'

export const addBranchSchema = z.object({
  branchName: z.string().min(1, 'Branch name is required'),
  branchId: z.string().min(1, 'Branch id is required'),
  address:z.string().min(1,"Address is required"),
  contact:z.string().min(1,"Contact is required").regex(/^[0-9]+$/, 'Phone number can only contain digits'),
  status: z.string().min(1, 'Status is required'),
 
})

export type AddBranchFormValue = z.infer<
  typeof addBranchSchema
>
