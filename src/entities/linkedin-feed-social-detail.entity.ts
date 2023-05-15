import {LinkedInComments} from "./linkedin-comments.entity";
import {LinkedInLikes} from "./linkedin-likes.entity";

export const LINKEDIN_FEED_SOCIAL_DETAIL_TYPE = "com.linkedin.voyager.feed.SocialDetail";
export type LinkedInFeedSocialDetailUrn = string;

export interface LinkedInFeedSocialDetail {
    $type: typeof LINKEDIN_FEED_SOCIAL_DETAIL_TYPE,
    "*socialPermissions": string,
    "*totalSocialActivityCounts": string,
    allowCommentersScope: string,
    commentSocialPermissionsTopicUrn: string | null,
    commentingDisabled: boolean,
    comments: LinkedInComments,
    commentsTopicUrn: string | null,
    companyActor: unknown,
    dashEntityUrn: string,
    detailPageNavigationContext: unknown,
    detailPageUpdateUrn: string | null,
    entityUrn: string,
    feedDetailSocialActionPromptType: string | null,
    hideFirstPrompt: boolean,
    hideSocialCountsIfAllowed: boolean | null,
    liked: boolean,
    likes: LinkedInLikes,
    pillNavigationContext: unknown,
    pillText: string | null,
    quickComments: unknown,
    reactionElements: unknown,
    reactionSummariesTopicUrn: string | null,
    reactionsOnCommentsTopicUrn: string | null,
    reactionsTopicUrn: string | null,
    reshareUpdateUrn: string | null,
    showPremiumAnalytics: boolean,
    showReplyPrivatelyButton: boolean | null,
    showShareButton: boolean,
    socialDetailsTopicUrn: string | null,
    socialPermissionsPersonalTopicUrn: null,
    socialUpdateType: string | null,
    threadId: string,
    totalShares: number,
    updateSaveAction: string | null,
    urn: string,
}