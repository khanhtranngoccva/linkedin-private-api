import {LinkedInImageViewModel} from "./linkedin-image-view-model.entity";

export const LINKEDIN_FEED_IMAGE_COMPONENT_TYPE = "com.linkedin.voyager.feed.render.ImageComponent";

export interface LinkedInFeedImageComponent {
    $type: typeof LINKEDIN_FEED_IMAGE_COMPONENT_TYPE,
    images: LinkedInImageViewModel[],
}