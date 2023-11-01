import { CreateIndividualUserDto } from './dto/create-individual-user.dto';
import { UpdateIndividualUserDto } from './dto/update-individual-user.dto';
import { IndividualUser } from './entities/individual-user.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class IndividualUsersService {
    private readonly userRepository;
    private readonly individualUserRepository;
    constructor(userRepository: Repository<User>, individualUserRepository: Repository<IndividualUser>);
    create(createIndividualUserDto: CreateIndividualUserDto): Promise<CreateIndividualUserDto & IndividualUser>;
    findOneByEmail(email: string): Promise<IndividualUser>;
    findAll(): string;
    findOne(id: number): string;
    findOneByToke(token: string): Promise<IndividualUser>;
    save(individualUser: IndividualUser): Promise<IndividualUser>;
    update(id: number, updateIndividualUserDto: UpdateIndividualUserDto): string;
    remove(id: number): string;
}
