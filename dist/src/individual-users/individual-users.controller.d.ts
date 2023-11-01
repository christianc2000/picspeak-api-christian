import { IndividualUsersService } from './individual-users.service';
import { CreateIndividualUserDto } from './dto/create-individual-user.dto';
import { UpdateIndividualUserDto } from './dto/update-individual-user.dto';
export declare class IndividualUsersController {
    private readonly individualUsersService;
    constructor(individualUsersService: IndividualUsersService);
    create(createIndividualUserDto: CreateIndividualUserDto): Promise<CreateIndividualUserDto & import("./entities/individual-user.entity").IndividualUser>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateIndividualUserDto: UpdateIndividualUserDto): string;
    remove(id: string): string;
}
