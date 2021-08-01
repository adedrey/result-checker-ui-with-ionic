import { Injectable } from '@angular/core';
import { Assignment } from '../shared/assignment.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import openSocket from 'socket.io-client';
const BACKEND_SOCKET_URL = environment.apiSocketUrl;
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: "root"
})
export class LecturerService {
    private assignments: Assignment[] = [];
    private assignmentChanged = new BehaviorSubject<Assignment[]>([]);

    constructor(
        private http: HttpClient,
        private router: Router,
        private alertCtrl: AlertController
    ) { }
    createAssignment(assignment: Assignment) {
        this.http.post<{ assignment: Assignment }>(BACKEND_URL + 'staff/assignment', assignment)
            .subscribe(responseData => {
                const getAssignments = [...this.assignments];
                getAssignments.unshift(responseData.assignment);
                this.assignments = [...getAssignments];
                this.assignmentChanged.next(this.assignments);
                this.router.navigateByUrl('/staff/assignments');
            });
    }

    getAssignments() {
        // ...
        this.http.get<{ assignments: Assignment[] }>(BACKEND_URL + 'staff/assignments')
            .subscribe(responseData => {
                this.assignments = responseData.assignments;
                this.assignmentChanged.next(this.assignments);
            });
        const socket = openSocket(BACKEND_SOCKET_URL);
        socket.on('assignments', data => {
            if (data.action === 'update') {
                //
                this.updateAssignments(data.assignment);
            } else if (data.action === 'admin_delete') {
                this.deleteAssignments(data.assignmentId);
            }
        });
    }

    deleteAssignments(assignmentId: string) {
        const getAssignments = [...this.assignments];
        const getAssignmentFiltered = getAssignments.filter(p => p._id !== assignmentId);
        this.assignments = getAssignmentFiltered;
        this.assignmentChanged.next(this.assignments);
    }

    updateAssignments(assignment: Assignment) {
        const assignmentIndex = this.assignments.findIndex(p => p._id === assignment._id);
        this.assignments[assignmentIndex] = assignment;
        this.assignmentChanged.next(this.assignments);
    }

    uploadResult(attachment: File | string, course_code: string, session: string, semester: string) {
        // ...
        const postCredentials = new FormData();
        postCredentials.append('attachment', attachment);
        postCredentials.append('course_code', course_code);
        postCredentials.append('session', session);
        postCredentials.append('semester', semester);
        console.log(attachment);
        return this.http.post<{ message: string}>(BACKEND_URL + 'staff/result/upload', postCredentials);
    }

    uploadTestResult(attachment: File | string, course_code: string, result_type: string, session: string, semester: string) {
        // ...
        const postCredentials = new FormData();
        postCredentials.append('attachment', attachment);
        postCredentials.append('course_code', course_code);
        postCredentials.append('result_type', result_type);
        postCredentials.append('session', session);
        postCredentials.append('semester', semester);
        console.log(attachment);
        return this.http.post<{ message: string}>(BACKEND_URL + 'staff/result/test/upload', postCredentials);
    }
    

    getAssignmentChanged() {
        return this.assignmentChanged.asObservable();
    }

    getAssignmentById(assignmentId: string) {
        return this.http.get<{ assignment: Assignment }>(BACKEND_URL + 'staff/assignment/' + assignmentId);
    }

    deleteAssignment(assignmentId: string) {
        this.http.delete(BACKEND_URL + 'staff/assignment/' + assignmentId)
            .subscribe(responseData => {
                const getAssignments = [...this.assignments];
                const getAssignmentsFiltered = getAssignments.filter(p => p._id !== assignmentId);
                this.assignments = getAssignmentsFiltered;
                this.assignmentChanged.next(this.assignments);
                this.router.navigateByUrl('/staff/assignments');
            });
    }

    // Stipe connects to Backend
    createOrder(stripeToken: string) {
        const postCredentials = {stripeToken: stripeToken}
        return this.http.post<{ order: any}>(BACKEND_URL + 'staff/order', postCredentials);
    }
}