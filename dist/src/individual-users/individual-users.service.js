"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualUsersService = void 0;
const common_1 = require("@nestjs/common");
const individual_user_entity_1 = require("./entities/individual-user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let IndividualUsersService = class IndividualUsersService {
    constructor(userRepository, individualUserRepository) {
        this.userRepository = userRepository;
        this.individualUserRepository = individualUserRepository;
    }
    async create(createIndividualUserDto) {
        const user = new user_entity_1.User();
        user.photoUrl = createIndividualUserDto.photo_url;
        const newUser = await this.userRepository.save(user);
        const individual = new individual_user_entity_1.IndividualUser();
        individual.name = createIndividualUserDto.name;
        individual.lastname = createIndividualUserDto.lastname;
        individual.username = createIndividualUserDto.username;
        individual.birthDate = createIndividualUserDto.birthDate;
        individual.email = createIndividualUserDto.email;
        individual.password = createIndividualUserDto.password;
        individual.activationToken = createIndividualUserDto.activationToken;
        individual.user = newUser;
        return this.individualUserRepository.save(createIndividualUserDto);
    }
    findOneByEmail(email) {
        return this.individualUserRepository.findOneBy({ email });
    }
    findAll() {
        return `This action returns all individualUsers`;
    }
    findOne(id) {
        return `This action returns a #${id} individualUser`;
    }
    async findOneByToke(token) {
        return this.individualUserRepository.findOneBy({ activationToken: token });
    }
    async save(individualUser) {
        return this.individualUserRepository.save(individualUser);
    }
    update(id, updateIndividualUserDto) {
        return `This action updates a #${id} individualUser`;
    }
    remove(id) {
        return `This action removes a #${id} individualUser`;
    }
};
IndividualUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(individual_user_entity_1.IndividualUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], IndividualUsersService);
exports.IndividualUsersService = IndividualUsersService;
//# sourceMappingURL=individual-users.service.js.map