import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

import { Scheduling } from './scheduling';

@Injectable()
export class SchedulingDao{

    constructor(private _storage: Storage) {}

    private _getKey(scheduling: Scheduling) {
        return scheduling.email + scheduling.date.substr(0,10);
    }

    save(scheduling: Scheduling) {
        return this._storage.set(this._getKey(scheduling), scheduling);
    }

}
