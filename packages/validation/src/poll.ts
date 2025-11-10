import {z} from "zod";

export const pollSchema = z.object({
    question: z.string().min(9, "Question must be at least 9 characters long."),
    options: z.array(z.string().min(1, "Option text cannot be empty.")),
});

export type pollType = z.infer<typeof pollSchema>;
