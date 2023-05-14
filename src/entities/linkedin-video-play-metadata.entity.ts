import {LinkedInVectorImage} from "./linkedin-vector-image.entity";
import {LinkedinVideoProgressiveDownloadMetadata} from "./linkedin-video-progressive-download-metadata.entity";

export const LINKEDIN_VIDEO_PLAY_METADATA_TYPE = "com.linkedin.videocontent.VideoPlayMetadata";
export type LinkedInVideoUrn = string;

export interface LinkedInVideoPlayMetadata {
    $type: typeof LINKEDIN_VIDEO_PLAY_METADATA_TYPE;
    aspectRatio: number;
    duration: number;
    entityUrn: string;
    firstFrameThumbnail: unknown;
    liveStreamCreatedAt: Date | null;
    liveStreamEndedAt: Date | null;
    media: string;
    provider: string;
    thumbnail: LinkedInVectorImage;
    thumbnails: unknown;
    trackingId: string;
    progressiveStreams: LinkedinVideoProgressiveDownloadMetadata[];
    transcripts: unknown[];
}