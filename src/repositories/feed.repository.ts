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
import {
    LINKEDIN_FEED_SOCIAL_DETAIL_TYPE,
    LinkedInFeedSocialDetail, LinkedInFeedSocialDetailUrn
} from "../entities/linkedin-feed-social-detail.entity";
import {
    LINKEDIN_FEED_SOCIAL_ACTIVITY_COUNTS_TYPE,
    LinkedInFeedSocialActivityCounts,
    LinkedInFeedSocialActivityCountsUrn
} from "../entities/linkedin-feed-social-activity-counts.entity";

export interface CategorizedFeedResponse {
    profiles: Record<MiniProfileUrn, LinkedInMiniProfile>;
    feedUpdates: Record<LinkedInFeedUpdateUrn, LinkedInFeedUpdate>;
    videos: Record<LinkedInVideoUrn, LinkedInVideoPlayMetadata>;
    socialDetails: Record<LinkedInFeedSocialDetailUrn, LinkedInFeedSocialDetail>
    socialDetailsActivityCounts: Record<LinkedInFeedSocialActivityCountsUrn, LinkedInFeedSocialActivityCounts>
}

export function categorizeFeedFromResponse(data: FeedResponse): CategorizedFeedResponse {
    const result: CategorizedFeedResponse = {
        profiles: {},
        feedUpdates: {},
        videos: {},
        socialDetails: {},
        socialDetailsActivityCounts: {},
    };
    for (const item of data.included) {
        if (item.$type === MINI_PROFILE_TYPE) {
            result.profiles[item.objectUrn] = item;
        } else if (item.$type === LINKEDIN_FEED_UPDATE_TYPE) {
            result.feedUpdates[item.entityUrn] = item;
        } else if (item.$type === LINKEDIN_VIDEO_PLAY_METADATA_TYPE) {
            result.videos[item.entityUrn] = item;
        } else if (item.$type === LINKEDIN_FEED_SOCIAL_DETAIL_TYPE) {
            result.socialDetails[item.entityUrn] = item;
        } else if (item.$type === LINKEDIN_FEED_SOCIAL_ACTIVITY_COUNTS_TYPE) {
            result.socialDetailsActivityCounts[item.entityUrn] = item;
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

    async getPostUrlFromUpdateActionsUrn({updateActionsUrn}: { updateActionsUrn: string }): Promise<string | null> {
        const data = await this.client.request.feed.getPostUrl({updateActionsUrn});
        for (const action of data.data.actions) {
            if (action.actionType === "SHARE_VIA" && action.url) {
                return action.url;
            }
        }
        return null;
    }

    private async fetchHome({
                                skip,
                                limit,
                                type
                            }: { skip?: number, limit?: number, type: "chronological" | "relevance" }) {
        const data = await this.client.request.feed.fetchHome({type, limit, skip});
        const categorized = categorizeFeedFromResponse(data);
        const result = data.data["*elements"].map(function transform(feedUpdateUrn) {
            const curPost = categorized.feedUpdates[feedUpdateUrn];
            const profile = categorized.profiles[curPost.actor.urn];
            const socialDetail = categorized.socialDetails[curPost["*socialDetail"]];
            const socialActivityCount = categorized.socialDetailsActivityCounts[socialDetail["*totalSocialActivityCounts"]];
            if (!profile || !socialDetail || !socialActivityCount) {
                return null;
            }
            const feedPost: FeedPost = {
                ...curPost,
                profile: profile,
                socialDetail: socialDetail,
                socialActivityCount: socialActivityCount,
            }
            if (curPost.content?.$type === LINKEDIN_FEED_VIDEO_COMPONENT_TYPE) {
                feedPost.videoAttachment = categorized.videos[curPost.content["*videoPlayMetadata"]];
            } else if (curPost.content?.$type === LINKEDIN_FEED_IMAGE_COMPONENT_TYPE) {
                feedPost.imageAttachments = curPost.content.images
                    .map(image => image.attributes[0].vectorImage)
                    .filter(item => item) as LinkedInVectorImage[];
            }
            return feedPost;
        });
        return result.filter(item => item) as FeedPost[]
    }
}
