import {
    LinkedInCollectionResponseVariant2,
    LinkedInMiniCompany,
    LinkedInMiniProfile
} from "../entities";
import {LinkedInFollowingInfo} from "../entities/linkedin-following-info.entity";
import {LinkedInFeedSocialDetail} from "../entities/linkedin-feed-social-detail.entity";
import {LinkedInHidePostAction} from "../entities/linkedin-hide-post-action.entity";
import {LinkedInSaveAction} from "../entities/linkedin-save-action.entity";
import {LinkedInUpdateActions} from "../entities/linkedin-update-actions.entity";
import {LinkedInFeedUpdate, LinkedInFeedUpdateUrn} from "../entities/linkedin-feed-update.entity";
import {LinkedInVideoPlayMetadata} from "../entities/linkedin-video-play-metadata.entity";
import {LinkedInFeedSocialActivityCounts} from "../entities/linkedin-feed-social-activity-counts.entity";

interface FeedResponseMetadata {
    $type: "com.linkedin.voyager.feed.metadata",
    id: string,
    newRelevanceFeed: boolean,
    paginationToken: string,
    paginationTokenExpiryTime: number,
    queryAfterTime: number,
}

type FeedItem =
    LinkedInFollowingInfo
    | LinkedInMiniCompany
    | LinkedInFeedSocialDetail
    | LinkedInHidePostAction
    | LinkedInSaveAction
    | LinkedInUpdateActions
    | LinkedInFeedUpdate
    | LinkedInMiniProfile
    | LinkedInVideoPlayMetadata
    | LinkedInFeedSocialActivityCounts;
export type FeedResponse = LinkedInCollectionResponseVariant2<LinkedInFeedUpdateUrn, FeedItem, FeedResponseMetadata>