import {LinkedInTextViewModel} from "./linkedin-text-view-model.entity";

export const LINKEDIN_TEXT_COMPONENT_TYPE = "com.linkedin.voyager.feed.render.TextComponent";
export interface LinkedinFeedTextComponent {
    $type: typeof LINKEDIN_TEXT_COMPONENT_TYPE;
    navigationContext: unknown;
    numLines: number;
    templateType: string;
    text: LinkedInTextViewModel;
}