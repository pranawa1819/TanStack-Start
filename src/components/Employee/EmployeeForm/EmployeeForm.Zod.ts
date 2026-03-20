import z from 'zod'

export const employeeSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().min(1, 'Middle name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, 'Invalid email address'),
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be atleast 10 digit')
    .regex(/^[0-9]+$/, 'Phone number can only contain digits'),
  dateOfBirth: z.string().min(1, 'Date is required'),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'Image is required'),
  gender: z.string().min(1, 'Select gender'),
  maritalStatus: z.string().min(1, 'Select gender'),

  country:z.string().min(1,"Select Country"),
  province:z.string().min(1,"Select province"),
  city:z.string().optional(),
  municipality:z.string().min(1,"Select Municipality"),
  ward:z.string().min(1,"Ward is required").regex(/^[0-9]+$/, 'Ward can only contain digits'),
  address: z.string().min(1,"Address is required"),

  emergencyContact: z.string()
    .min(10, 'Phone number must be atleast 10 digit')
    .regex(/^[0-9]+$/, 'Phone number can only contain digits'),
  emergencyContactName: z.string().min(1,"Emergency contact name is required"),
  emergencyContactRelation: z.string().min(1,"Emergency contact relation is required"),
  
  branch: z.string().min(1,"Select Branch"),
  department: z.string().min(1,"Select department"),
  employeeId: z.coerce.number().min(1,"Employee ID is required"),
  designation: z.string().min(1,"Designation is required"),
  jobLevel: z.string().min(1,"Select job level"),
  reportingManager: z.string().min(1,"Select reporting manager"),

  shift:z.string().min(1,"Select shift"),
  workType:z.string().min(1,"Select work type"),
  employeeType:z.string().min(1,"Select employee type"),

  workEmail: z
    .string()
    .min(1, 'Email is required')
    .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, 'Invalid email address'),
  workPhoneNumber: z
    .string()
    .min(10, 'Phone number must be atleast 10 digit')
    .regex(/^[0-9]+$/, 'Phone number can only contain digits'),

  joiningDate:z.string().min(1, 'Date is required'),
  contractStartDate:z.string().min(1, 'Date is required'),
  contractEndDate:z.string().min(1, 'Date is required'),
  
  grossSalary:z.string().min(1,"Gross salary is required").regex(/^[0-9]+$/, 'Salary can only contain digits'),
  basicSalary:z.string().min(1,"Basic salary is required").regex(/^[0-9]+$/, 'Salary can only contain digits'),
  
  bankName: z.string().min(1,"Bank name is required"),
  bankAccountNumber: z.string().min(1,"Bank account number is required"),
  bankAccountName: z.string().min(1,"Bank account name is required"),
})

export type EmployeeFormValue = z.infer<typeof employeeSchema>
