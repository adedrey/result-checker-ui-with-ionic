import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { Result } from './result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  resultData: Result[] = [];
  totalUnits = 0;
  newResults: Result[];
  emptySpace = "  ";
  userData: { matric_no: string, department: string, name: string };
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.getResults()
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

  getCummulative(results: Result[]) {
    let sum_ctnu = 0;
    let sum_ctcp = 0;
    let sum_ctnup = 0;
    let results_new: Result[] = results.map(response => {
      return {
        session: response.session,
        semester: response.semester,
        totalCreditPoints: response.totalCreditPoints,
        totalUnits: response.totalUnits,
        data: response.data,
        ctnu: sum_ctnu += response.ctnu,
        ctcp: sum_ctcp += response.ctcp,
        ctnup: sum_ctnup += response.ctnup
      }
    })
    return results_new;
  }

  getUnit() {
  }


}
