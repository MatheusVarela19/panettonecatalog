import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import panettone from './Panettone';
import Panettone from './Panettone'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Panettone, panettone => panettone.images)
  @JoinColumn({ name: 'panettone_id' })
  panettone: Panettone;
}