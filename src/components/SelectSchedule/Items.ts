export enum IType {
    Faculty,
    Speciality,
    Group,
    Lesson,
}

export interface IItems {
    name: string;
    key: string;
    type: IType;
}