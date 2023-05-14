export const LINKEDIN_VIDEO_STREAMING_LOCATION_TYPE = "com.linkedin.videocontent.StreamingLocation";

export interface LinkedinVideoStreamingLocation {
    $type: typeof LINKEDIN_VIDEO_STREAMING_LOCATION_TYPE;
    expiresAt: number;
    url: string;
}