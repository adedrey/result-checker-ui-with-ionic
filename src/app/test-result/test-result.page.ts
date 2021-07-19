import { Component, OnInit } from '@angular/core';
import { Result } from '../result/result.model';
import { ResultService } from '../result/result.service';
import { Test } from './test.model';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.page.html',
  styleUrls: ['./test-result.page.scss'],
})
export class TestResultPage implements OnInit {

  resultData: Test[] = [];
  totalUnits = 0;
  newResults: Test[];
  emptySpace = "  ";
  userData: { matric_no: string, department: string, name: string };
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getTestResults()
      .subscribe(responseData => {
        this.resultData = this.getCummulative(responseData.results);
        console.log(this.resultData);
        this.userData = responseData.userData;
      });
  }

  async printResult() {
    window.print();
  }

  calculateCreditPoint(unit: number, gp: number) {
    return unit * gp;
  }

  getCummulative(results: Test[]) {
    let results_new: Test[] = results.map(response => {
      return {
        session: response.session,
        semester: response.semester,
        data: response.data,
        upload_date: response.upload_date
      }
    })
    return results_new;
  }

  getUnit() {
  }

}
