import { User } from '../../users/entities/user.entity';
import { Interest } from 'src/interest/entities/interest.entity';
export declare class InterestUser {
    id: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User;
    interest: Interest;
}
