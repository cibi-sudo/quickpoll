import {z} from "zod";

export const optionSchema = z.object({
    text: z.string().min(1, "Option text cannot be empty."),
    pollId: z.uuid("Invalid poll ID format."),
});

export type optionType = z.infer<typeof optionSchema>;
