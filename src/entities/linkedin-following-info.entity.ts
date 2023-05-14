export interface LinkedInFollowingInfo {
    $type: "com.linkedin.voyager.common.FollowingInfo",
    dashFollowingStateUrn: string,
    entityUrn: string,
    followerCount: number | null,
    following: boolean,
    followingCount: number | null,
    followingType: string,
    trackingUrn: string,
}