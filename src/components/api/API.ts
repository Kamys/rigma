import { Faculty } from './models/Faculty';

const jsonData: Faculty.IEntity[] = require('./jsonData/getFaculties.json');

export function getAllFaculty(): Faculty.Model[] {
    return jsonData.map(value => new Faculty.Model(value));
}