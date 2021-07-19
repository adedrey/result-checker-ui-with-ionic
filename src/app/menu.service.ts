import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class MenuService {
    userOption = new BehaviorSubject<string>(null);

    getUserOptionStatus() {
        return this.userOption.asObservable();
    }
}