import { Injectable } from '@angular/core';
import { Complaint } from './complaints.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import openSocket from 'socket.io-client';
const BACKEND_URL = environment.apiUrl;
const BACKEND_SOCKET_URL = environment.apiSocketUrl;
@Injectable({
    providedIn: 'root'
})
export class ComplaintService {
    private complaints: Complaint[] = [];
    private complaintChanged = new BehaviorSubject<Complaint[]>([]);

    constructor(private http: HttpClient, private router: Router) { }

    getComplaints() {
        this.http.get<{ complaints: Complaint[] }>(BACKEND_URL + 'user/complaints')
            .subscribe(responseData => {
                this.complaints = responseData.complaints;
                this.complaintChanged.next(this.complaints);
            });
        const socket = openSocket(BACKEND_SOCKET_URL);
        socket.on('complaints', data => {
            if (data.action === 'delete') {
                this.deleteComplaints(data.complaintId);
            } else if(data.action === 'update') {
                this.updateComplaints(data.complaint);
            }
        });
    }

    updateComplaints(complaint: Complaint) {
        const getComplaints = [...this.complaints];
        const getComplaintIndex = getComplaints.findIndex(p => p._id === complaint._id);
        getComplaints[getComplaintIndex] = complaint;
        this.complaints = getComplaints;
        this.complaintChanged.next(this.complaints);
    }

    deleteComplaints(complaintId) {
        const oldComplaints = [...this.complaints];
        const updateComplaints = oldComplaints.filter(p => p._id !== complaintId);
        this.complaints = updateComplaints;
        this.complaintChanged.next(this.complaints);
    }

    getComplaintStatusListener() {
        return this.complaintChanged.asObservable();
    }
    createComplaint(case_type: string[], title: string, body: string) {
        const postData = {
            case_type: case_type,
            title: title,
            body: body
        };
        this.http.post<{ complaint: Complaint }>(BACKEND_URL + 'user/complaints/create', postData)
            .subscribe(responseData => {
                this.complaints.unshift(responseData.complaint);
                this.complaintChanged.next(this.complaints);
            });
    }

    openTicket(case_type: string[], title: string, body: string) {
        const postData = {
            case_type: case_type,
            title: title,
            body: body
        };
        return this.http.post<{ message: string }>(BACKEND_URL + 'auth/open-ticket', postData);
    }

    updateComplaint(case_type: string[], title: string, body: string, complaintId: string) {
        const postData = {
            case_type: case_type,
            title: title,
            body: body
        };
        // console.log(postData);
        this.http.post<{ complaint: Complaint }>(BACKEND_URL + 'user/complaints/update/' + complaintId, postData)
            .subscribe(responseData => {
                const complaintIndex = this.complaints.findIndex(p => p._id === complaintId);
                this.complaints[complaintIndex] = responseData.complaint;
                this.complaintChanged.next(this.complaints);
            });
    }

    getComplaint(complaintId: string) {
        return this.http.get<{ complaint: Complaint }>(BACKEND_URL + 'user/complaints/' + complaintId);
    }

    updateComplaintStatus(complaintId: string) {
        const complaint = this.complaints.find(p => p._id === complaintId);
        if (!complaint) {
            return;
        }
        if (complaint.status) {
            complaint.status = false;
        } else {
            complaint.status = true;
        }
        this.complaints[complaint._id] = complaint;
        this.complaintChanged.next(this.complaints);
    }
    deleteComplaint(complaintId: string) {
        console.log(complaintId);
        this.http.delete<{ message: string }>(BACKEND_URL + 'user/complaints/' + complaintId)
            .subscribe(responseData => {
                const oldComplaints = [...this.complaints];
                const updateComplaints = oldComplaints.filter(p => p._id !== complaintId);
                this.complaints = updateComplaints;
                this.complaintChanged.next(this.complaints);
                this.router.navigateByUrl('/forum/tabs/complaints');
            });

    }
}
