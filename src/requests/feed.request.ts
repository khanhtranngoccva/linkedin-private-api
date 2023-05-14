import {LinkedInRequest} from "../core/linkedin-request";
import {FeedResponse} from "../responses/feed.response";

export class FeedRequest {
    private request: LinkedInRequest;

    constructor({request}: { request: LinkedInRequest }) {
        this.request = request;
    }

    async fetchHome({
                        type,
                        limit = 10,
                        skip = 0
                    }: { type: "chronological" | "relevance", limit?: number, skip?: number }): Promise<FeedResponse> {
        let typeQuery;
        if (type === "chronological") {
            typeQuery = {q: "chronFeed"};
        } else {
            typeQuery = {q: "feed", sortOrder: "RELEVANCE"};
        }
        const query = {
            ...typeQuery,
            count: limit,
            start: skip,
        }
        return this.request.get<FeedResponse>("feed/updatesV2", {
            params: query,
        })
    }
}
