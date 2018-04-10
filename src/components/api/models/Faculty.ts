import { doOrDefault, doOrError, IKeyValue, parseAll } from '../Helper';

export namespace Faculty {

    export interface IEntity {
        readonly faculty: IKeyValue;
        readonly isActiveSchedule: boolean;
    }

    export const parseView = function(entities: IEntity[]): IView[] {
        return parseAll((entity: IEntity) => {
            return {
                name: doOrError(() => entity.faculty.value),
                key: doOrError(() => entity.faculty.key),
                isActiveSchedule: doOrDefault(() => entity.isActiveSchedule, false),
            };
        }, entities);
    };

    export interface IView {
        name: string;
        key: number;
        isActiveSchedule: boolean;
    }
}