
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth } from './auth.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController, NavController } from '@ionic/angular';
import { MenuService } from '../menu.service';
import { User } from '../shared/users.model';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: "root"
})


export class AuthService {
    private token: string;
    private tokenTimer: any;
    private isAuthenticated: boolean = false;
    private username: string;
    private userimage: string;
    private authStateChange: string = "user"
    private authStatusListener = new BehaviorSubject<boolean>(false);
    constructor(
        private http: HttpClient,
        private router: Router,
        private alertCtrl: AlertController,
        private navCtrl: NavController,
        private menuService: MenuService
    ) { }

    getAuthStateChange() {
        return this.authStateChange;
    }

    createUser(surname: string, firstname: string, course: string, email: string, password: string, matric_no: string) {
        const postData = {
            surname: surname,
            firstname: firstname,
            course: course,
            email: email,
            password: password,
            matric_no: matric_no
        };

        this.http.post<{ message: string }>(BACKEND_URL + "signup", postData)
            .subscribe(
                responseData => {
                    this.alertCtrl.create({
                        header: "Congratulations",
                        message: responseData.message,
                        buttons: ['OK']
                    }).then(alertEl => {
                        alertEl.present();
                        this.router.navigateByUrl('/undergraduate/home');
                    });

                }
            );
    }

    login(user: Auth) {
        return this.http.post<{ success: boolean, user: User, token: any, expiresIn: any }>(BACKEND_URL + 'login', user)
        .pipe(tap(responseData => this.onHandleAuthentication(responseData)));
    }
    private onHandleAuthentication(responseData: { success: boolean, user: User, token: any, expiresIn: any }) {
        const token = responseData.token;
        if (token) {
            this.token = token;
            const expiresIn = parseInt(responseData.expiresIn) * 24 * 60 * 60;
            const name = responseData.user.name;
            const image = responseData.user.image;
            this.username = responseData.user.name;
            this.userimage = responseData.user.image;
            this.setTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
            this.saveAuthData(token, expirationDate, name, image);
            this.authStateChange = "user";
            this.menuService.userOption.next('user');
        }
    }
    getUserDetail() {
        const userInformation = {
            name: this.username,
            image: this.userimage
        };
        return userInformation;
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthStatus() {
        return this.isAuthenticated;
    }
    private setTimer(expiresIn) {
        console.log('Setting Timer: ' + expiresIn);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expiresIn * 1000);
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        // this.router.navigateByUrl('/login');
        this.navCtrl.navigateBack(['/login']);
    }

    // Auto Login

    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const currentDateStamp = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - currentDateStamp.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.username = authInformation.name;
            this.userimage = authInformation.image;
            this.setTimer(expiresIn / 1000);
            this.menuService.userOption.next('user');
        }
    }

    private saveAuthData(token: string, expiresIn: Date, name: string, image: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn.toISOString());
        localStorage.setItem('name', name);
        localStorage.setItem('image', image)
    }

    private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        localStorage.removeItem('image');
        localStorage.removeItem('name');
    }

    private getAuthData() {
        const token = localStorage.getItem('token');
        const expiresIn = localStorage.getItem('expiresIn');
        const name = localStorage.getItem('name');
        const image = localStorage.getItem('image');

        if (!token || !expiresIn) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expiresIn),
            image: image,
            name: name
        }
    }

    getProfile() {
        return this.http.get<{ user: User }>(BACKEND_URL + 'user/profile');
    }

    changeProfile(password: string, newpassword: string) {
        const postData = {
            password: password,
            newpassword: newpassword
        }
        return this.http.post<{ message: string, user: User }>(BACKEND_URL + 'user/profile', postData);
    }

    forgotPassword(email: string) {
        const postData = {
            email: email
        };
        return this.http.post<{ message: string }>(BACKEND_URL + 'user/reset', postData);
    }

    getResetPassword(token: string) {
        return this.http.get<{ resetToken: string, userId: string }>(BACKEND_URL + 'user/reset/' + token);
    }

    postResetPassword(password: string, confirmpassword: string, token: string, userId: string) {
        const postData = {
            password: password,
            token: token,
            userId: userId
        }
        return this.http.post<{ message: string }>(BACKEND_URL + 'user/reset/' + token, postData);
    }
}
