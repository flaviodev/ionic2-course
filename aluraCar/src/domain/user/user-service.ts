import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    
    private _principal: User;
    
    constructor(private _http: Http) {}


    public login(email: string, password: string) {
        let api = `https://aluracar.herokuapp.com/login?email=${email}&senha=${password}`;
        return  this._http.get(api)
        .map(res => res.json().usuario)
        .toPromise()
        .then(data => {
            let usuario = new User(data.nome, data.dataDeNascimento, data.email, data.telefone);
            this._principal = usuario;
            return usuario;
        });
    }

    getPrincipal() {
        return this._principal;
    }

}