import { InappropriateContentUser } from "src/configuration/entities/inappropriate_content_user.entity";
export declare class InappropriateContent {
    id: number;
    name: string;
    original_name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    inappropriateContentUsers: InappropriateContentUser[];
}
