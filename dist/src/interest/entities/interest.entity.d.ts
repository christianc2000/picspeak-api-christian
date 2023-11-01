import { InterestUser } from '../../configuration/entities/interest_user.entity';
export declare class Interest {
    id: number;
    name: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    interestUsers: InterestUser[];
}
