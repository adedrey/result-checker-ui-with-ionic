
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
    constructor(private alertController: AlertController) {}
    intercept(req : HttpRequest<any>, next: HttpHandler) {
        
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = "Sorry, we couldn't complete your request. Please try again in a moment.";
                if(error.error.message){
                    errorMessage = error.error.message;
                }
                this.alertController.create({
                    header: "Error",
                    message: errorMessage,
                    buttons: ['Dismiss']
                }).then(alertEl => {
                    alertEl.present();
                });
                return throwError(error);
            })
        );
    }
}