import {z} from "zod";

export const voteSchema = z.object({
    pollId: z.uuid("Invalid poll ID."),
    optionId: z.uuid("Invalid option ID."),
});

export type voteType = z.infer<typeof voteSchema>;