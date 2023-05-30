import {LinkedInReactionType} from "./linkedin-social-reaction-type.entity";


export interface LinkedInFeedReactionTypeCount {
    $type: "com.linkedin.voyager.feed.social.ReactionTypeCount";
    reactionType: LinkedInReactionType,
    count: number,
}