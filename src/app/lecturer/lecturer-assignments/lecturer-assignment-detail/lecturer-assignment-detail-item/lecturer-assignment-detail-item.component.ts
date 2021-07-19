import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Assignment } from 'src/app/shared/assignment.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lecturer-assignment-detail-item',
  templateUrl: './lecturer-assignment-detail-item.component.html',
  styleUrls: ['./lecturer-assignment-detail-item.component.scss'],
})
export class LecturerAssignmentDetailItemComponent implements OnInit {
  @Input() assignment: Assignment;
  users: any[];
  displayedColumns: string[] = ['name', 'matric_no', 'attachment'];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    console.log(this.assignment)
    this.users = this.assignment.assignments.users;
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
