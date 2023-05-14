import {SkipLimitScroller} from "./skip-limit-scroller";
import {FeedPost} from "../entities/feed-post.entity";
type GetHomeFeed = (props: {skip?: number, limit?: number, type: "chronological" | "relevance"}) => Promise<FeedPost[]>;
export class HomeFeedScroller extends SkipLimitScroller<FeedPost> {
    private getHomeFeed: GetHomeFeed;

    type: "chronological" | "relevance";

    constructor({type, skip = 0, limit = 10, getHomeFeed}: { type: "chronological" | "relevance", skip: number, limit?: number, getHomeFeed: GetHomeFeed }) {
        super({skip, limit});
        this.type = type;
        this.getHomeFeed = getHomeFeed;
    }

    async fetch(): Promise<FeedPost[]> {
        return this.getHomeFeed({skip: this.skip, limit: this.limit, type: this.type});
    }
}