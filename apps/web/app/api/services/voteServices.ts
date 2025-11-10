"use server";

import { voteActions } from "@repo/db";
import { revalidatePath } from "next/cache";
import { voteType } from "@repo/validation";

export async function voteOnOption(data: voteType) {
    await voteActions.voteOnOption(data);

    // ✅ Refresh the poll detail page
    revalidatePath(`/polls/${data.pollId}`);

    // ✅ Refresh the poll list page (optional)
    revalidatePath("/polls");
}
