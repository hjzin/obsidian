import * as core from "@actions/core";
import { context, getOcktokit } from "@actions/github";

async function run() {
    try {
        const target = context.payload.pull_request;
        if (target == undefined) {
            throw new Error("Can't get payload. Check your trigger event");
        }
        const { assignees, number, user: { login: author, type } } = target;
        if (assignees.length > 0) {
            core.info("This PR is already assigned");
            return;
        }

        if (type == "Bot") {
            core.info("This PR is created by bot, skip auto-assign");
            return;
        }

        const token = core.getInput("repo-token", { required: true });
        const octokit = getOcktokit(token);
        const result = await octokit.rest.issues.addAssignees({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: number,
            assignees: [author],
        });

        core.debug(JSON.stringify(result));
        core.info(`Assign ${author} to PR #${number}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();