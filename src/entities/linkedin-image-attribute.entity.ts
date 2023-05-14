import {LinkedInVectorImage} from "./linkedin-vector-image.entity";

export interface LinkedInImageAttribute {
    $type: 'com.linkedin.voyager.common.ImageAttribute';
    '*miniProfile'?: string;
    '*miniCompany'?: string;
    mediaUrn?: string
    sourceType: string;
    vectorImage?: LinkedInVectorImage
}
