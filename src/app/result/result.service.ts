import { Injectable } from '@angular/core';
import openSocket from 'socket.io-client';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Result } from './result.model';
import { Test } from '../test-result/test.model';
const BACKEND_SOCKET_URL = environment.apiSocketUrl;
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: "root"
})

export class ResultService {

    constructor(private http: HttpClient) { }

    getResults() {
        return this.http.get<{
            results: Result[],
            userData: { matric_no: string, department: string, name: string }
        }>(BACKEND_URL + 'user/results')
    }

    getTestResults() {
        return this.http.get<{
            results: Test[],
            userData: { matric_no: string, department: string, name: string }
        }>(BACKEND_URL + 'user/test/results')
    }
}