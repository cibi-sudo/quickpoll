import { describe, it, expect } from "vitest";
import { createPoll } from "../../app/api/actions/poll/createPoll";

describe("createPoll", () => {
    const question = "Is React.js the best framework?";

    it("should create a poll successfully", async () => {
        const result = await createPoll({
            question,
            options: ["Yes", "No", "Maybe"],
        });

        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.message).toBe("Poll created successfully");
        }
    });

    it("should fail when creating a poll with the same question", async () => {
        const result = await createPoll({
            question,
            options: ["Yes", "No", "Maybe"],
        });

        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error).toBe("Question already exists. Try voting instead!");
        }
    });

    it("should fail validation with empty data", async () => {
        const result = await createPoll({
            question: "",
            options: [],
        });

        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error).toBe("Validation failed");
        }
    });
});
