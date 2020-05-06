import { Model } from './_model';

export class Record extends Model {
    public id: string;
    public name: string;
    public date_analyse: string;
    public cote_douleur: string;
    public email: string;
    public douleur_endroit: string;
    public niveau_de_douleur: string;
    public irradie_jambes: string;
    public irradie_jambe_cote: string;
    public operation: string;
    public empeche_de_redresser: string;
    public materiel: string;
    public position_douleur: string;
    public douleur_reguliere: string;
    public depuis_quand: string;
    public telephone: string;
    public age: string;
    public pain_test_date: string;
    public pt_front: string;
    public pt_back: string;
    public pt_shift_right: string;
    public pt_shift_left: string;
    public pt_rotation_right: string;
    public pt_rotation_left: string;
}
