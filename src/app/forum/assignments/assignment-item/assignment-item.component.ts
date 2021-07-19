import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from 'src/app/shared/assignment.model';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.scss'],
})
export class AssignmentItemComponent implements OnInit {
  @Input() assignments: Assignment[];
  constructor() { }

  ngOnInit() {}

}
