import { pollActions } from "@repo/db";
import { pollType } from "@repo/validation";

export const pollServices = {
    createPoll: async (data: pollType) => {
        return await pollActions.createPoll(data);
    },

    findByQuestion: async ({ question }: Pick<pollType, "question">) => {
        return await pollActions.findByQuestion({ question });
    },

    getAllPolls : async () => {
        return await pollActions.getAllPolls();
    },
};
