import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image'

@Entity('panettones')
export default class panettone {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  weight: number;

  @Column()
  price: number;

  @Column()
  about: string;

  @OneToMany(() => Image, image => image.panettone, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'panettone_id' })
  images: Image[];
}