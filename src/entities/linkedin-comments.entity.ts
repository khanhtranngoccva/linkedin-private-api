interface Paging {
    start: number,
    count: number,
    total: number,
    links: string[],
    $type: "com.linkedin.restli.common.CollectionMetadata",
}

export interface LinkedInComments {
    $type: "com.linkedin.voyager.feed.Comments",
    elements: unknown[],
    paging: Paging,
}