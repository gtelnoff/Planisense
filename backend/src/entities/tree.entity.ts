import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trees extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true, default: '' })
  type_emplacement: string;

  @Column({ type: 'text', nullable: true, default: '' })
  domanialite: string;

  @Column({ type: 'text', nullable: true, default: '' })
  arrondissement: string;

  @Column({ type: 'text', nullable: true, default: '' })
  complement_adresse: string;

  @Column({ type: 'text', nullable: true, default: '' })
  numero: string;

  @Column({ type: 'text', nullable: true, default: '' })
  adresse: string;

  @Column({ type: 'text', nullable: true, default: '' })
  idemplacement: string;

  @Column({ type: 'text', nullable: true, default: '' })
  libelle_francais: string;

  @Column({ type: 'text', nullable: true, default: '' })
  genre: string;

  @Column({ type: 'text', nullable: true, default: '' })
  espece: string;

  @Column({ type: 'text', nullable: true, default: '' })
  variete_oucultivar: string;

  @Column({ type: 'text', nullable: true, default: '' })
  circonference: string;

  @Column({ type: 'text', nullable: true, default: '' })
  hauteur: string;

  @Column({ type: 'text', nullable: true, default: '' })
  stade_de_developpement: string;

  @Column({ type: 'text', nullable: true, default: '' })
  remarquable: string;

  @Column({ type: 'text', nullable: true, default: '' })
  geo_point_2d: string;
}