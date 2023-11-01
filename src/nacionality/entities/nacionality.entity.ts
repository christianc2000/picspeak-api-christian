import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity() //convierte inmediatamente a una tabla
export class Nacionality {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({  name: 'name', nullable: false})
    name:string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: Date;

    @OneToMany(() => User, (user) => user.nacionality)
    users: User[]

   
}
