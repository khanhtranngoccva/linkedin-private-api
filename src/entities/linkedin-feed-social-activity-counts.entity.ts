import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";
import {LinkedInFeedReactionTypeCount} from "./linkedin-feed-reaction-type-count";
import {LinkedInReactionType} from "./linkedin-social-reaction-type.entity";

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
    numLikes: number | null,
    numShares: number | null,
    numViews: number | null,
    reacted: LinkedInReactionType | null,
    reactionByOrganizationActor: unknown,
    reactionText: LinkedInTextViewModel | null,
    reactionTypeCounts: LinkedInFeedReactionTypeCount[],
    socialDetailEntityUrn: string,
    urn: string,
}