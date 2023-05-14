import {LinkedInFeedUpdate} from "./linkedin-feed-update.entity";
import {LinkedInVideoPlayMetadata} from "./linkedin-video-play-metadata.entity";
import {LinkedInMiniProfile} from "./linkedin-mini-profile.entity";
import {LinkedInVectorImage} from "./linkedin-vector-image.entity";

export interface FeedPost extends LinkedInFeedUpdate {
    videoAttachment?: LinkedInVideoPlayMetadata;
    imageAttachments?: LinkedInVectorImage[];
    profile?: LinkedInMiniProfile;
}