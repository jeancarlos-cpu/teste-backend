import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  statusCode: number;

  @Column()
  httpMethod: string;

  @Column()
  webhookUrl: string;

  @Column()
  content: string;
}
