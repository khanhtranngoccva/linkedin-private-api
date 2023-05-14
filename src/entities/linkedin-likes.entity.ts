interface Paging {
    start: number,
    count: number,
    total: number,
    links: string[],
    $type: "com.linkedin.restli.common.CollectionMetadata",
}

export interface LinkedInLikes {
    $type: "com.linkedin.voyager.feed.Likes",
    elements: unknown[],
    paging: Paging,
}