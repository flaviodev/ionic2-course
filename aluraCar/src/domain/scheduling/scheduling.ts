import { Car } from './../car/car';

export class  Scheduling {
    constructor(
        public car?: Car, 
        public totalAmount?: number, 
        public name?: string, 
        public address?: string,
        public email?: string,
        public date?: string,
        public confirmed: boolean = false) {}
}