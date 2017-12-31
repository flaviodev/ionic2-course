import { SchedulingDao } from './scheduling-dao';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Scheduling } from './scheduling';

@Injectable()
export class SchedulingService{

    constructor(private _http: Http, private _dao: SchedulingDao) {}

    schedule(scheduling: Scheduling) {
        let api = "https://aluracar.herokuapp.com/salvarpedido?carro="+
        scheduling.car.nome
        +"&nome="+
        scheduling.name
        +"&preco="+
        scheduling.totalAmount
        +"&endereco="+
        scheduling.address
        +"&email="+
        scheduling.email
        +"&dataAgendamento="+
        scheduling.date;

        return this._dao.isDuplicatedScheduling(scheduling)
            .then(exists => {
                if(exists) throw new Error('Scheduling has already been');
                return this._http
                    .get(api)
                    .toPromise()
                    .then(() => scheduling.confirmed = true, err => console.log(err))
                    .then(() => this._dao.save(scheduling))
                    .then(() => scheduling.confirmed);
            })
    }
}