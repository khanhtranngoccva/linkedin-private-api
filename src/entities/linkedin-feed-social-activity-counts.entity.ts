import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";

export interface LinkedInFeedSocialActivityCounts {
    $type: "com.linkedin.voyager.feed.shared.SocialActivityCounts";
    dashEntityUrn: string,
    entityUrn: string,
    liked: boolean,
    likedByOrganizationActor: boolean | null,
    numComments: number,
    numImpressions: number | null,
    numLikes: number,
    numShares: number,
    numViews: null | number,
    reacted: boolean | number,
    reactionByOrganizationActor: unknown,
    reactionText: LinkedInTextViewModel | null,
}