import { BaseEntity } from 'typeorm';
export declare class Trees extends BaseEntity {
    id: number;
    type_emplacement: string;
    domanialite: string;
    arrondissement: string;
    complement_adresse: string;
    numero: string;
    adresse: string;
    idemplacement: string;
    libelle_francais: string;
    genre: string;
    espece: string;
    variete_oucultivar: string;
    circonference: string;
    hauteur: string;
    stade_de_developpement: string;
    remarquable: string;
    geo_point_2d: string;
}
