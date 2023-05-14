import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";

export interface LinkedInFeedTextComponent {
    $type: "com.linkedin.voyager.feed.render.TextComponent",
    numLines: number,
    templateType: string,
    text: LinkedInTextViewModel,
}