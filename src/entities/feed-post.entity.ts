import {LinkedInFeedUpdate} from "./linkedin-feed-update.entity";
import {LinkedInVideoPlayMetadata} from "./linkedin-video-play-metadata.entity";
import {LinkedInMiniProfile} from "./linkedin-mini-profile.entity";
import {LinkedInVectorImage} from "./linkedin-vector-image.entity";
import {LinkedInFeedSocialDetail} from "./linkedin-feed-social-detail.entity";
import {LinkedInFeedSocialActivityCounts} from "./linkedin-feed-social-activity-counts.entity";

export interface FeedPost extends LinkedInFeedUpdate {
    videoAttachment?: LinkedInVideoPlayMetadata;
    imageAttachments?: LinkedInVectorImage[];
    profile: LinkedInMiniProfile;
    socialDetail: LinkedInFeedSocialDetail;
    socialActivityCount: LinkedInFeedSocialActivityCounts;
}