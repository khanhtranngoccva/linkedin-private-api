export const LINKEDIN_FEED_VIDEO_COMPONENT_TYPE = "com.linkedin.voyager.feed.render.LinkedInVideoComponent";

export interface LinkedInFeedVideoComponent {
    $type: typeof LINKEDIN_FEED_VIDEO_COMPONENT_TYPE;
    "*videoPlayMetadata": string;
    headlineBackgroundColor: string;
    mediaDisplayVariant: string;
    tapTargets: unknown[];
}