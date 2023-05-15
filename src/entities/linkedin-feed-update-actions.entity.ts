import {LinkedInFeedAction} from "./linkedin-feed-action.entity";

export interface LinkedInFeedUpdateActions {
    $type: "com.linkedin.voyager.feed.actions.UpdateActions";
    actions: LinkedInFeedAction[],
    entityUrn: string,
    dashEntityUrn: string,
}