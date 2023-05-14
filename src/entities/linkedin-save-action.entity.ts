export interface LinkedInSaveAction {
    $type: "com.linkedin.voyager.feed.actions.SaveAction";
    dashEntityUrn: string,
    entityUrn: string,
    saved: boolean,
}