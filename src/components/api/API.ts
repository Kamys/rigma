import { Faculty } from './models/Faculty';
import { Speciality } from './models/Speciality';
import parseFacultyView = Faculty.parseView;
import parseSpecialityView = Speciality.parseView;

const faculties: Faculty.IEntity[] = require('./jsonData/getFaculties.json');
const specialities: Speciality.IEntity[] = require('./jsonData/getSpecialtys.json');

export function getAllFaculty(): Faculty.IView[] {
    return parseFacultyView(faculties);
}

export function getAllSpeciality(facultyId: number): Speciality.IView[] {
    return parseSpecialityView(specialities);
}