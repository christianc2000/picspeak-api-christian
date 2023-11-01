import { User } from '../../users/entities/user.entity';
import { InappropriateContent } from 'src/inappropriate-content/entities/inappropriate-content.entity';
export declare class InappropriateContentUser {
    id: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User;
    inappropiateContent: InappropriateContent;
}
