import { z } from "zod";

export const basicInformationSchema = z.object({
    organizationLegalName: z.string().min(1, "Organization legal name is required"),
    organizationShortName: z.string().min(1,"organization short name is required"),
    organizationCode: z.string().min(2,"Organization code must be at least 4 digits"),
    organizationVoucherCode: z.string().optional(),
    natureOfOrganization: z.string().min(1,"Nature of organization is required"),
    currency: z.string().min(1,"Currency is required"),
    panNumber: z.coerce.number().min(1, "PAN number is required"),
    registrationNumber: z.coerce.number().min(1, "Registration number is required"),
    
    country: z.string().min(1,"Country is required"),
    province: z.string().min(1,"Province is required"),
    district: z.string().min(1,"District is required"),
    city: z.string().min(1,"City is required"),
    phoneNumber: z.string().min(10,"Phone number must be 10 digits"),
    email: z.string().email("Invalid email address").min(1,"Email is required"),
    website: z.string().url("Invalid website URL").min(1,"Website is required"),

   
});

export type BasicInformationFormValue = z.infer<typeof basicInformationSchema>;
