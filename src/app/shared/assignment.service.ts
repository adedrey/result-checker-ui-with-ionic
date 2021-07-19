import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Assignment } from './assignment.model';
import openSocket from 'socket.io-client';
import { tap } from 'rxjs/operators';
const BACKEND_SOCKET_URL = environment.apiSocketUrl;
const BACKEND_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class AssignmentService {

    private assignments: Assignment[] = [];
    private assignmentChanged = new BehaviorSubject<Assignment[]>([]);
    constructor(
        private http: HttpClient
    ) { }

    // ...
    getAssignments() {
        // ...
        this.http.get<{ assignments: Assignment[] }>(BACKEND_URL + 'user/assignments')
            .subscribe(responseData => {
                this.assignments = responseData.assignments;
                this.assignmentChanged.next(this.assignments);
            });
        const socket = openSocket(BACKEND_SOCKET_URL);
        socket.on('assignments', data => {
            if (data.action === 'admincreate') {
                this.addAssignments(data.assignment);
            } else if (data.action === 'admin_delete') {
                this.deleteAssignments(data.assignmentId);
            }
        });

        socket.on('lecturer_assignments', data => {
            if (data.action === 'lecturercreate') {
                this.addAssignments(data.assignment);
            } else if (data.action === 'delete') {
                this.deleteAssignments(data.assignmentId);
            }
        });
    }

    addAssignments(assignment: Assignment) {
        this.assignments.unshift(assignment);
        this.assignmentChanged.next(this.assignments);
    }

    deleteAssignments(assignmentId : string) {
        const getAssignments = [...this.assignments];
        const getAssignmentFiltered = getAssignments.filter(p => p._id !== assignmentId);
        this.assignments = getAssignmentFiltered;
        this.assignmentChanged.next(this.assignments);
    }

    getAssignmentChanged() {
        return this.assignmentChanged.asObservable();
    }

    getAssignmentById(assignmentId: string) {
        return this.http.get<{ assignment: Assignment }>(BACKEND_URL + 'user/assignment/' + assignmentId);
    }

    submitAssignment(assignmentId: string, attachment: File | string, attachmentString: File | string) {
        // ...
        const postCredentials = new FormData();
        postCredentials.append('assignmentId', assignmentId);
        postCredentials.append('attachment', attachment);
        postCredentials.append('attachmentString', attachmentString);
        return this.http.post<{ message: string, assignment: Assignment }>(BACKEND_URL + 'user/assignment/submit', postCredentials)
            .pipe(tap((responseData => {
                const getAssignmentIndex = this.assignments.findIndex(p => p._id === assignmentId);
                this.assignments[getAssignmentIndex] = responseData.assignment;
                this.assignmentChanged.next(this.assignments);
            })));
    }
}
