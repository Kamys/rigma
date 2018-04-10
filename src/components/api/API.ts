import { Faculty } from './models/Faculty';
import parseView = Faculty.parseView;

const jsonData: Faculty.IEntity[] = require('./jsonData/getFaculties.json');

export function getAllFaculty(): Faculty.IView[] {
    return parseView(jsonData);
}