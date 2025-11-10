import { describe, it, expect } from "vitest";
import { createPollAction } from "../../app/api/actions/poll/createPollAction";

describe("createPollAction", () => {
    it("should validate data and return success", async () => {
        const result = await createPollAction({
            question: "Favorite Framework",
            options: ["Next.js", "Svelte", "React"]
        });
        expect(result.success).toBe(true);
    });

    it("should fail on invalid data", async () => {
        const result = await createPollAction({ question: "", options: [] });
        expect(result.success).toBe(false);
    });
});
