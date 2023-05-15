import {Client} from "../core";
import {HomeFeedScroller} from "../scrollers/home-feed-scroller";
import {FeedPost} from "../entities/feed-post.entity";
import {
    LINKEDIN_FEED_UPDATE_TYPE,
    LinkedInFeedUpdate,
    LinkedInFeedUpdateUrn
} from "../entities/linkedin-feed-update.entity";
import {FeedResponse} from "../responses/feed.response";
import {LinkedInMiniProfile, LinkedInVectorImage, MINI_PROFILE_TYPE, MiniProfileUrn} from "../entities";
import {
    LINKEDIN_VIDEO_PLAY_METADATA_TYPE,
    LinkedInVideoPlayMetadata,
    LinkedInVideoUrn
} from "../entities/linkedin-video-play-metadata.entity";
import {LINKEDIN_FEED_VIDEO_COMPONENT_TYPE} from "../entities/linkedin-feed-video-component.entity";
import {LINKEDIN_FEED_IMAGE_COMPONENT_TYPE} from "../entities/linkedin-feed-image-component.entity";
import * as console from "console";

export interface CategorizedFeedResponse {
    profiles: Record<MiniProfileUrn, LinkedInMiniProfile>;
    feedUpdates: Record<LinkedInFeedUpdateUrn, LinkedInFeedUpdate>;
    videos: Record<LinkedInVideoUrn, LinkedInVideoPlayMetadata>;
}

export function categorizeFeedFromResponse(data: FeedResponse): CategorizedFeedResponse {
    const result: CategorizedFeedResponse = {
        profiles: {},
        feedUpdates: {},
        videos: {},
    };
    for (const item of data.included) {
        if (item.$type === MINI_PROFILE_TYPE) {
            result.profiles[item.entityUrn] = item;
        } else if (item.$type === LINKEDIN_FEED_UPDATE_TYPE) {
            result.feedUpdates[item.entityUrn] = item;
        } else if (item.$type === LINKEDIN_VIDEO_PLAY_METADATA_TYPE) {
            result.videos[item.entityUrn] = item;
        }
    }
    return result;
}

export class FeedRepository {
    private client: Client;

    constructor({client}: { client: Client }) {
        this.client = client;
    }

    getHome({
                skip = 0,
                limit = 10,
                type = "relevance"
            }: { type: "chronological" | "relevance", skip?: number, limit?: number }): HomeFeedScroller {
        return new HomeFeedScroller({
            skip, limit, type, getHomeFeed: this.fetchHome.bind(this),
        })
    }

    private async fetchHome({
                                skip,
                                limit,
                                type
                            }: { skip?: number, limit?: number, type: "chronological" | "relevance" }) {
        const data = await this.client.request.feed.fetchHome({type, limit, skip});
        const categorized = categorizeFeedFromResponse(data);
        console.log(categorized.profiles);
        return data.data["*elements"].map(function transform(feedUpdateUrn): FeedPost {
            const curPost = categorized.feedUpdates[feedUpdateUrn];
            console.log(curPost.actor.urn);
            const result: FeedPost = {
                ...curPost,
                profile: categorized.profiles[curPost.actor.urn],
            }
            if (curPost.content?.$type === LINKEDIN_FEED_VIDEO_COMPONENT_TYPE) {
                result.videoAttachment = categorized.videos[curPost.content["*videoPlayMetadata"]];
                console.log("Video", result.videoAttachment);
            } else if (curPost.content?.$type === LINKEDIN_FEED_IMAGE_COMPONENT_TYPE) {
                result.imageAttachments = curPost.content.images
                    .map(image => image.attributes[0].vectorImage)
                    .filter(item => item) as LinkedInVectorImage[];
            }
            return result;
        })
    }
}
