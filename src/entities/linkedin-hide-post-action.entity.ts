export interface LinkedInHidePostAction {
    $type: "com.linkedin.voyager.feed.actions.HidePostAction";
    actionType: string,
    confirmationComponent: unknown,
    dashEntityUrn: string,
    entityUrn: string,
    type: string,
}