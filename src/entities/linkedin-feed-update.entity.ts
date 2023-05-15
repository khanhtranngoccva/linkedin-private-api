import {LinkedInFeedActor} from "./linkedin-feed-actor.entity";
import {LinkedInFeedImageComponent} from "./linkedin-feed-image-component.entity";
import {LinkedInFeedTextComponent} from "./linkedin-feed-text-component.entity";
import {LinkedInFeedVideoComponent} from "./linkedin-feed-video-component.entity";
import {LinkedInFeedUpdateMetadata} from "./linkedin-feed-update-metadata.entity";

export type LinkedInFeedUpdateUrn = string;
export const LINKEDIN_FEED_UPDATE_TYPE = "com.linkedin.voyager.feed.render.UpdateV2";

export interface LinkedInFeedUpdate {
    $type: typeof LINKEDIN_FEED_UPDATE_TYPE;
    "*socialDetail": string,
    actor: LinkedInFeedActor,
    additionalContents: unknown,
    aggregatedContent: unknown,
    annotation: unknown,
    carouselContent: unknown,
    commentary: LinkedInFeedTextComponent,
    // TODO: LinkedInArticleComponent (company articles) missing. Skip for now, add later.
    content: LinkedInFeedImageComponent | LinkedInFeedVideoComponent | null,
    contextualDescription: unknown,
    contextualDescriptionV2: unknown,
    contextualHeader: unknown,
    dashEntityUrn: string,
    desktopPromoUpdate: unknown,
    detailHeader: unknown,
    entityUrn: string,
    footer: unknown,
    header: unknown,
    highlightedComments: unknown,
    interstitial: unknown,
    leadGenFormContent: unknown,
    leadGenFormContentV2: unknown,
    relatedContent: unknown,
    resharedUpdate: unknown,
    showSocialDetail: unknown,
    updateMetadata: LinkedInFeedUpdateMetadata,
}