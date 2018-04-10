import { IKeyValue, parseAll, parseKeyValue } from '../Helper';

export namespace Speciality {

    export interface IEntity {
        readonly speciality: IKeyValue;
        readonly levelQualification: IKeyValue;
    }

    export const parseView = function(entities: IEntity[]): IView[] {
        return parseAll((entity: IEntity) => {
            return {
                ...parseKeyValue(entity.speciality),
                levelQualification: {...parseKeyValue(entity.levelQualification)},
            };
        }, entities);
    };

    export interface IView {
        name: string;
        key: number;
        levelQualification: {
            name: string;
            key: number;
        };
    }
}
