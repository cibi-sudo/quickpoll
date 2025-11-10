"use server";

import {pollServices} from "../../services/pollServices";
import { pollSchema, pollType } from "@repo/validation";
import {actionResponse} from "@repo/validation";

export async function pollActions(data: pollType): Promise<actionResponse> {
    try {
    const validated = pollSchema.safeParse(data);
    if (!validated.success) {
        return {
            success: false,
            error: "Validation failed",
            details: validated.error.message,
        };
    }

        const exitingQuestion = await pollServices.findByQuestion({ question: validated.data.question });
        if (exitingQuestion) {
            return { success: false, error: "Question already exists. Try voting instead!" };
        }

        await pollServices.createPoll(validated.data);
        return { success: true, message: "Poll created successfully" };
    } catch (error) {
        console.error("[pollActions] Error:", error);
        return { success: false, error: "Internal server error" };
    }
}
