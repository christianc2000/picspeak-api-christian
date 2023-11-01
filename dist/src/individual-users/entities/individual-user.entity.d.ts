import { User } from "src/users/entities/user.entity";
export declare class IndividualUser {
    id: number;
    name: string;
    lastname: string;
    username: string;
    birthDate: Date;
    gender: string;
    nationality: string;
    email: string;
    password: string;
    activationToken: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: User;
}
