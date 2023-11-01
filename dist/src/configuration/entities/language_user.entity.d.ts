import { User } from '../../users/entities/user.entity';
import { Language } from 'src/language/entities/language.entity';
export declare class LanguageUser {
    id: number;
    status: boolean;
    matern_language: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User;
    language: Language;
}
