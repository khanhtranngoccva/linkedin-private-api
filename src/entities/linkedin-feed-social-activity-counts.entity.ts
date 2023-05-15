import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";

export const LINKEDIN_FEED_SOCIAL_ACTIVITY_COUNTS_TYPE = "com.linkedin.voyager.feed.shared.SocialActivityCounts";
export type LinkedInFeedSocialActivityCountsUrn = string;

export interface LinkedInFeedSocialActivityCounts {
    $type: typeof LINKEDIN_FEED_SOCIAL_ACTIVITY_COUNTS_TYPE;
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