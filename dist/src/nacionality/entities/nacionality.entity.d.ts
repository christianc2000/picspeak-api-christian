import { User } from "src/users/entities/user.entity";
export declare class Nacionality {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    users: User[];
}
