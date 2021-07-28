import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MenuService } from '../menu.service';
import { AlertController } from '@ionic/angular';
import { Lecturer } from '../shared/lecturer.model';
import { tap } from "rxjs/operators";
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: 'root'
})

export class StaffAuthService {
    token: string;
    private tokenTimer: any;
    private isAuthenticated = false;
    getStaffRole: boolean;
    getAuthStatusListener = new BehaviorSubject<boolean>(false);
    constructor(
        private http: HttpClient,
        private router: Router,
        private menuService: MenuService,
        private alertCtrl: AlertController
    ) { }


    createUser(name: string, rank: string, department: string, email: string, password: string, file_no: string) {
        const postData = {
            name: name,
            rank: rank,
            department: department,
            email: email,
            password: password,
            staff_no: file_no
        };

        this.http.post<{ message: string }>(BACKEND_URL + "staff/signup", postData)
            .subscribe(
                responseData => {
                    this.alertCtrl.create({
                        header: "Congratulations",
                        message: responseData.message,
                        buttons: ['OK']
                    }).then(alertEl => {
                        alertEl.present();
                        this.router.navigateByUrl('/staff/login');
                    });

                }
            );
    }

    login(staff_no: string, password: string) {
        const postData = {
            staff_no: staff_no,
            password: password
        }
        return this.http.post<{ success: boolean, user: Lecturer, token: any, expiresIn: any }>(BACKEND_URL + 'staff/login', postData)
        .pipe(tap(responseData => this.onHandleAuthentication(responseData)));
    }
    private onHandleAuthentication(responseData: { success: boolean, user: Lecturer, token: any, expiresIn: any }) {
        const token = responseData.token;
        if (token) {
            this.token = token;
            const expiresIn = parseInt(responseData.expiresIn) * 24 * 60 * 60;
            this.isAuthenticated = true;
            this.getAuthStatusListener.next(true);
            this.setTokenTimer(expiresIn);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + +expiresIn * 1000);
            this.saveAuthData(token, expirationDate);
            this.menuService.userOption.next('staff');
        }
    }
    checkStaffRole() {
        return this.http.get<{ checked: boolean }>(BACKEND_URL + 'staff/is-hod')
        // .subscribe(response => {
        //     this.getStaffRole = response.checked;
        // });
    }
    getLAcadStaffRole() {
        return this.getStaffRole;
    }
    getStaffAuthStatus() {
        return this.isAuthenticated;
    }
    getAuthStatusEventListener() {
        return this.getAuthStatusListener.asObservable();
    }
    getToken() {
        return this.token;
    }
    private setTokenTimer(expiresIn) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expiresIn * 1000);
    }

    autoAuthStaff() {
        const authInformation = this.getAuthData();

        if (!authInformation) {
            return;
        }
        const currentDate = new Date();
        const expiresIn = authInformation.expiresIn.getTime() - currentDate.getTime();

        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.getAuthStatusListener.next(true);
            this.setTokenTimer(expiresIn / 1000);
            this.menuService.userOption.next('staff');
        }
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.getAuthStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigateByUrl('/staff/login');
    }

    private saveAuthData(token: string, expiresIn: Date) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn.toISOString());
    }

    private getAuthData() {
        const token = localStorage.getItem('token');
        const expiresInDuration = localStorage.getItem('expiresIn');
        if (!token || !expiresInDuration) {
            return;
        }
        return {
            token: token,
            expiresIn: new Date(expiresInDuration)
        };
    }

    private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
    }

    getProfile() {
        return this.http.get<{ lecturer: Lecturer }>(BACKEND_URL + 'staff/profile');
    }

    changeProfile(name: string, rank: string, department: string, password: string, newpassword: string) {
        const postData = {
            name: name,
            rank: rank,
            department: department,
            password: password,
            newpassword: newpassword
        }
        return this.http.post<{ message: string, lecturer: Lecturer }>(BACKEND_URL + 'staff/profile', postData);
    }

    forgotPassword(email: string) {
        const postData = {
            email: email
        };
        return this.http.post<{ message: string }>(BACKEND_URL + 'staff/reset', postData);
    }

    getResetPassword(token: string) {
        return this.http.get<{ resetToken: string, lecturerId: string }>(BACKEND_URL + 'staff/reset/' + token);
    }

    postResetPassword(password: string, confirmpassword: string, token: string, lecturerId: string) {
        const postData = {
            password: password,
            token: token,
            lecturerId: lecturerId
        }
        return this.http.post<{ message: string }>(BACKEND_URL + 'staff/reset/' + token, postData);
    }
}
