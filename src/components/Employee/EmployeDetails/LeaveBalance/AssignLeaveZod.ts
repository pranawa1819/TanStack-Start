import { z } from "zod";

export const assignLeaveSchema = z.object({
    leaveCategory: z.string().optional(),
});
export type AssignLeaveFormValue = z.infer<typeof assignLeaveSchema>;
