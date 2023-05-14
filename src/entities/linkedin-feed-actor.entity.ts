import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";
import {LinkedInImageViewModel} from "./linkedin-image-view-model.entity";
import {LinkedInFeedNavigationContext} from "./linkedin-feed-navigation-context.entity";

interface FeedFollowAction {
    $type: "com.linkedin.voyager.feed.render.FollowAction",
    unfollowTrackingActionType: string,
    followTrackingActionType: string,
    trackingActionType: string,
    companyFollowingTrackingContext: string,
    '*followingInfo': string;
    type: string;
}

export interface LinkedInFeedActor {
    $type: "com.linkedin.voyager.feed.render.ActorComponent",
    description: LinkedInTextViewModel,
    followAction?: FeedFollowAction,
    image: LinkedInImageViewModel,
    name: LinkedInTextViewModel,
    navigationContext: LinkedInFeedNavigationContext,
    subDescription: LinkedInTextViewModel,
    supplementaryActorInfo: LinkedInTextViewModel,
    urn: string,
}