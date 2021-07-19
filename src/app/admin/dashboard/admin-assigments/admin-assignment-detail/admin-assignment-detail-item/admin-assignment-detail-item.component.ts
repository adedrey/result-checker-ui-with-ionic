import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Assignment } from 'src/app/shared/assignment.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-assignment-detail-item',
  templateUrl: './admin-assignment-detail-item.component.html',
  styleUrls: ['./admin-assignment-detail-item.component.scss'],
})
export class AdminAssignmentDetailItemComponent implements OnInit {
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
