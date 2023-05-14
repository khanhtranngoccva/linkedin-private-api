import {LinkedinVideoStreamingLocation} from "./linkedin-video-streaming-location.entity";

export const VIDEO_PROGRESSIVE_DOWNLOAD_METADATA_TYPE = "com.linkedin.videocontent.ProgressiveDownloadMetadata";

export interface LinkedinVideoProgressiveDownloadMetadata {
    $type: typeof VIDEO_PROGRESSIVE_DOWNLOAD_METADATA_TYPE;
    bitRate: number;
    height: number;
    width: number;
    mediaType: string;
    size: number;
    streamingLocation: LinkedinVideoStreamingLocation[];
}
