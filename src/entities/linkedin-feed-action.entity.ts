import {LinkedInImageViewModel} from "./linkedin-image-view-model.entity";

export interface LinkedInFeedAction {
    $type: "com.linkedin.voyager.feed.actions.Action",
    actionType: "SAVE" | "SHARE_VIA" | "DISINTEREST" | "REPORT" | "UNFOLLOW_MEMBER" | "REMOVE_CONNECTION";
    icon: LinkedInImageViewModel;
    text: string;
    secondaryAction?: LinkedInFeedAction;
    targetUrn?: string;
    url?: string;
}