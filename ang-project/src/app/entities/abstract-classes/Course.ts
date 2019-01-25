import { ICourse } from '../interfaces/ICourse';

export class Course implements ICourse {
    id;
    title;
    creationDate;
    duration;
    description;
}
