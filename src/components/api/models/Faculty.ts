import { IKeyValue } from '../Helper';
import { getAllFaculty } from '../API';

export namespace Faculty {
    export interface IEntity {
        readonly faculty: IKeyValue;
        readonly isActiveSchedule: boolean;
    }

    export class Model {
        getName = (): string => {
            return this.entity.faculty.value;
        }
        getKey = (): number => {
            return this.entity.faculty.key;
        }
        private entity: IEntity;

        constructor(entity: Faculty.IEntity) {
            this.entity = entity;
        }
    }

    export const getAll = getAllFaculty;
}