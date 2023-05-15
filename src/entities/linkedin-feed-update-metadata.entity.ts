export interface LinkedInFeedUpdateMetadata {
    $type: "com.linkedin.voyager.feed.render.UpdateMetadata";
    "*hidePostAction": string;
    "*updateActions": string;
    actionTriggerEnabled: boolean;
    actionsPosition: string;
    detailPageType: string;
    excludedFromSeen: boolean;
    shareAudience: string;
    shareUrn: string;
    trackingData: {
        requestId: string;
        trackingId: string;
    };
    urn: string;
}