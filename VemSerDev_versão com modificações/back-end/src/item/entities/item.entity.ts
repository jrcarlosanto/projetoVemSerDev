import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Item extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
 updatedAt: Date;

 @Column({ name: 'name', type: 'varchar', length: 50 })
 name: string;

 @Column({ name: 'description', type: 'varchar', nullable: true, length: 255 })
 description?: string;

 @Column({ name: 'quantity', type: 'int' })
 quantity: number;

 @Column({ name: 'userId', type: 'uuid' })
 userId: string;

 /*@ManyToOne(() => User, (user) => user.item)
 user: User
 */
}