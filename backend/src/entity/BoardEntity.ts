import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
  // 자동으로 1씩 증가해 생성되는 값 (sequence)
  @PrimaryGeneratedColumn()
  boardNo: number;

  @Column()
  boardTtl: string;

  @Column()
  boardCntn: string;

  @Column()
  boardWrtr: string;

  @Column()
  regDt: Date;

  @Column({default: 'N'})
  isDel: string;
}