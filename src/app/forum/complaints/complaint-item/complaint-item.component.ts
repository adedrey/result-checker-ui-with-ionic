import { Component, OnInit, Input } from '@angular/core';
import { Complaint } from '../complaints.model';

@Component({
  selector: 'app-complaint-item',
  templateUrl: './complaint-item.component.html',
  styleUrls: ['./complaint-item.component.scss'],
})
export class ComplaintItemComponent implements OnInit {
  @Input() complaint: Complaint;
  constructor() { }

  ngOnInit() {}

}
