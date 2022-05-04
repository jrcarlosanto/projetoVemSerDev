import { Item } from "src/item/entities/item.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

   @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;
    
    @Column({ name: 'password', type: 'varchar', length: 100 })
    password: string;

    /*@OneToMany(() => Item, (item) => item.user)
    item: Item[] 
  */
}
