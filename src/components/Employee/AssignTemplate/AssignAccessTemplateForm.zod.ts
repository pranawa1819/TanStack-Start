import z from "zod";

export const assignAccessTemplateSchema = z.object({
    assignRole: z.string().optional(),
    dataScope: z.string().optional()
})

export type AssignAccessTemplateFormValue = z.infer<typeof assignAccessTemplateSchema>;

export interface AssignAccessTemplateData {
    assignRole: string,
    dataScope: string,

}