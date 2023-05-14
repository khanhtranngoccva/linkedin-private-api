export interface LinkedInFeedReactionTypeCount {
    reactionType: "LIKE" | "EMPATHY" | "PRAISE" | "INTEREST" | "APPRECIATION" | "MAYBE" | "ENTERTAINMENT" | unknown,
    socialDetailEntityUrn: string,
    urn: string,
}