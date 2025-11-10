import {pollActions} from "@repo/db";
import {pollType} from "@repo/validation";

export const createPoll =  async (data: pollType) => {
    return  await pollActions.createPoll(data);
}
