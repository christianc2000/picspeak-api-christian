import { LanguageUser } from '../../configuration/entities/language_user.entity';
export declare class Language {
    id: number;
    name: string;
    status: boolean;
    icon_image: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    languageUsers: LanguageUser[];
}
