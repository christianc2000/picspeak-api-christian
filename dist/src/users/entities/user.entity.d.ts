import { IndividualUser } from "src/individual-users/entities/individual-user.entity";
import { Nacionality } from "src/nacionality/entities/nacionality.entity";
import { InappropriateContentUser } from "../../configuration/entities/inappropriate_content_user.entity";
import { InterestUser } from "../../configuration/entities/interest_user.entity";
import { LanguageUser } from "../../configuration/entities/language_user.entity";
export declare class User {
    id: number;
    photoUrl: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    individual: IndividualUser;
    nacionality: Nacionality;
    inappropriateContentUsers: InappropriateContentUser[];
    interestUsers: InterestUser[];
    languageUsers: LanguageUser[];
}
