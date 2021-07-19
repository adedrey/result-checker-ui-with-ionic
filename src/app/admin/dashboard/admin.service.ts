import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Complaint } from '../../forum/complaints/complaints.model';
import { Assignment } from 'src/app/shared/assignment.model';
import { User } from 'src/app/shared/users.model';
import { AlertController } from '@ionic/angular';
import { Lecturer } from 'src/app/shared/lecturer.model';
import openSocket from 'socket.io-client';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;
const BACKEND_SOCKET_URL = environment.apiSocketUrl;
export interface Student {
    _id?: string,
    matric_no: string,
    registered?: Date,
    __v?: any
}
export interface Staff {
    _id?: string,
    file_no: string,
    registered?: Date,
    __v?: any
}
@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private assignments: Assignment[] = [];
    private assignmentChanged = new BehaviorSubject<Assignment[]>([]);
    private complaints: Complaint[] = [];
    private complaintChanged = new BehaviorSubject<Complaint[]>([]);
    private students: Student[] = [];
    private studentChanged = new BehaviorSubject<Student[]>([]);
    private staff: Staff[] = [];
    private staffChanged = new BehaviorSubject<Staff[]>([]);
    private users: User[] = [];
    private userChanged = new BehaviorSubject<User[]>([]);
    private lecturers: Lecturer[] = [];
    private lecturerChanged = new BehaviorSubject<Lecturer[]>([]);

    constructor(
        private http: HttpClient,
        private router: Router,
        private alertCtrl: AlertController
    ) { }

    getComplaints() {
        this.http.get<{ complaints: Complaint[] }>(BACKEND_URL + 'admin/complaints')
            .subscribe(responseData => {
                this.complaints = responseData.complaints;
                this.complaintChanged.next(this.complaints);
            });
        const socket = openSocket(BACKEND_SOCKET_URL);
        socket.on('complaints', data => {
            if (data.action === 'create') {
                this.addComplaints(data.complaint);
            }
        });
    }

    addComplaints(complaint: Complaint) {
        this.complaints.unshift(complaint);
        this.complaintChanged.next(this.complaints);
    }

    deleteAssignments(assignmentId : string) {
        const getAssignments = [...this.assignments];
        const getAssignmentFiltered = getAssignments.filter(p => p._id !== assignmentId);
        this.assignments = getAssignmentFiltered;
        this.assignmentChanged.next(this.assignments);
    }

    getComplaintStatusListener() {
        return this.complaintChanged.asObservable();
    }

    getUserStatusListener() {
        return this.userChanged.asObservable();
    }

    getLecturerStatusListener() {
        return this.lecturerChanged.asObservable();
    }

    getComplaint(complaintId: string) {
        return this.http.get<{ complaint: Complaint }>(BACKEND_URL + 'admin/complaints/' + complaintId);
    }

    updateComplaintStatus(complaintId: string) {
        const postData = {
            complaintId: complaintId
        }
        this.http.post<{ complaint: Complaint }>(BACKEND_URL + 'admin/complaints', postData)
            .subscribe(responseData => {
                const getComplaints = [...this.complaints];
                const getComplaintIndex = getComplaints.findIndex(p => p._id === complaintId);
                getComplaints[getComplaintIndex] = responseData.complaint;
                this.complaints = getComplaints;
                this.complaintChanged.next(this.complaints);
            });
    }
    deleteComplaint(complaintId: string) {
        console.log(complaintId);
        this.http.delete<{ message: string }>(BACKEND_URL + 'admin/complaints/' + complaintId)
            .subscribe(responseData => {
                const oldComplaints = [...this.complaints];
                const updateComplaints = oldComplaints.filter(p => p._id !== complaintId);
                this.complaints = updateComplaints;
                this.complaintChanged.next(this.complaints);
                this.router.navigateByUrl('/admin/complaints');
            });

    }

    createAssignment(assignment: Assignment) {
        this.http.post<{ assignment: Assignment }>(BACKEND_URL + 'admin/assignment', assignment)
            .subscribe(responseData => {
                this.assignments.unshift(responseData.assignment);
                this.assignmentChanged.next(this.assignments);
                this.router.navigateByUrl('/admin/assignments');
            });
    }

    getAssignments() {
        // ...
        this.http.get<{ assignments: Assignment[] }>(BACKEND_URL + 'admin/assignments')
            .subscribe(responseData => {
                this.assignments = responseData.assignments;
                this.assignmentChanged.next(this.assignments);
            });
        const socket = openSocket(BACKEND_SOCKET_URL);
        socket.on('lecturer_assignments', data => {
            if (data.action === 'lecturercreate') {
                this.addAssignments(data.assignment);
            } else if (data.action === 'delete') {
                this.deleteAssignments(data.assignmentId);
            }
        });

        socket.on('assignments', data => {
            if (data.action === 'update') {
                this.updateAssignments(data.assignment);
            }
        });
    }

    addAssignments(assignment: Assignment) {
        this.assignments.unshift(assignment);
        this.assignmentChanged.next(this.assignments);
    }

    updateAssignments(assignment: Assignment) {
        const assignmentIndex = this.assignments.findIndex(p => p._id === assignment._id);
        this.assignments[assignmentIndex] = assignment;
        this.assignmentChanged.next(this.assignments);
    }

    getAssignmentChanged() {
        return this.assignmentChanged.asObservable();
    }

    getAssignmentById(assignmentId: string) {
        return this.http.get<{ assignment: Assignment }>(BACKEND_URL + 'admin/assignment/' + assignmentId);
    }

    deleteAssignment(assignmentId: string) {
        this.http.delete(BACKEND_URL + 'admin/assignment/' + assignmentId)
            .subscribe(responseData => {
                const getAssignments = [...this.assignments];
                const getAssignmentsFiltered = getAssignments.filter(p => p._id !== assignmentId);
                this.assignments = getAssignmentsFiltered;
                this.assignmentChanged.next(this.assignments);
                this.router.navigateByUrl('/admin/assignments');
            })
    }
    getPregisterStudentListener() {
        return this.studentChanged.asObservable();
    }
    preRegisterStudent(attachment: File | string) {
        const postCredentials = new FormData();
        postCredentials.append('attachment', attachment);
        console.log(postCredentials.get('attachment'));
        // console.log(student);
        return this.http.post<{ users: User[], message: string }>(BACKEND_URL + 'admin/students/register', postCredentials)
            .pipe(tap(responseData => {
                this.users = [...responseData.users, ...this.users];
                this.userChanged.next(this.users);
            }));
    }

    getPregisterStaffListener() {
        return this.staffChanged.asObservable();
    }
    preRegisterStaff(attachment: File | string) {
        const postCredentials = new FormData();
        postCredentials.append('attachment', attachment);
        console.log(postCredentials.getAll);
        return this.http.post<{ lecturers: Lecturer[],  message: string }>(BACKEND_URL + 'admin/staff/register', postCredentials)
            .pipe(tap(responseData => {
                this.lecturers = [...responseData.lecturers, ...this.lecturers];
                this.lecturerChanged.next(this.lecturers);
            }));
    }

    getUsers() {
        this.http.get<{ users: User[] }>(BACKEND_URL + 'admin/users')
            .subscribe(responseData => {
                this.users = responseData.users;
                this.userChanged.next(this.users);
            });
    }

    getLecturers() {
        this.http.get<{ lecturers: Lecturer[] }>(BACKEND_URL + 'admin/lecturers')
            .subscribe(responseData => {
                this.lecturers = responseData.lecturers;
                this.lecturerChanged.next(this.lecturers);
            });
    }

    deleteLecturer(lecturerId: string) {
        this.http.delete<{ message: string }>(BACKEND_URL + 'admin/lecturers/' + lecturerId)
            .subscribe(responseData => {
                const lecturersFilter = this.lecturers.filter(p => p._id !== lecturerId);
                this.lecturers = lecturersFilter;
                this.alertCtrl.create({
                    header: "Success",
                    message: responseData.message,
                    buttons: ['Okay']
                }).then(alertEl => {
                    this.lecturerChanged.next(this.lecturers);
                    alertEl.present();
                });
            });
    }

    updateLecturerStatus(lecturerId: string) {
        this.http.get<{ lecturer: Lecturer }>(BACKEND_URL + 'admin/lecturers/' + lecturerId)
            .subscribe(responseData => {
                const lecturerIndex = this.lecturers.findIndex(p => p._id === lecturerId);
                this.lecturers[lecturerIndex] = responseData.lecturer;
                this.lecturerChanged.next(this.lecturers);
            });
    }

    deleteUser(userId: string) {
        this.http.delete<{ message: string }>(BACKEND_URL + 'admin/users/' + userId)
            .subscribe(responseData => {
                const usersFilter = this.users.filter(p => p._id !== userId);
                this.users = usersFilter;
                this.alertCtrl.create({
                    header: "Success",
                    message: responseData.message,
                    buttons: ['Okay']
                }).then(alertEl => {
                    this.userChanged.next(this.users);
                    alertEl.present();
                });
            });
    }

    updateUserStatus(userId: string) {
        this.http.get<{ user: User }>(BACKEND_URL + 'admin/users/' + userId)
            .subscribe(responseData => {
                const userIndex = this.users.findIndex(p => p._id === userId);
                this.users[userIndex] = responseData.user;
                this.userChanged.next(this.users);
            });
    }

    getPreregisteredStudent() {
        this.http.get<{ students: Student[] }>(BACKEND_URL + 'admin/students')
            .subscribe(responseData => {
                this.students = responseData.students;
                this.studentChanged.next(this.students);
            });
    }
    getPreregisteredStaff() {
        this.http.get<{ staff: Staff[] }>(BACKEND_URL + 'admin/staff')
            .subscribe(responseData => {
                this.staff = responseData.staff;
                this.staffChanged.next(this.staff);
            });
    }
}
