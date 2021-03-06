import { NgModule } from '@angular/core';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatSortModule } from '@angular/material';
import { ComplaintsGetterComponent } from '../admin/dashboard/complaints/complaints-getter/complaints-getter.component';
import { CommonModule } from '@angular/common';
import { PreregisterStaffComponent } from '../admin/dashboard/users/preregister-staff/preregister-staff.component';
import { PreregisterStudentComponent } from '../admin/dashboard/users/preregister-student/preregister-student.component';
import { UsersItemComponent } from '../admin/dashboard/users/users-item/users-item.component';
import { AdminAssignmentsItemComponent } from '../admin/dashboard/admin-assigments/admin-assignments-item/admin-assignments-item.component';
import { AdminAssignmentDetailItemComponent } from '../admin/dashboard/admin-assigments/admin-assignment-detail/admin-assignment-detail-item/admin-assignment-detail-item.component';
import { LecturerAssignmentDetailItemComponent } from '../lecturer/lecturer-assignments/lecturer-assignment-detail/lecturer-assignment-detail-item/lecturer-assignment-detail-item.component';
import { LecturerAssignmentItemComponent } from '../lecturer/lecturer-assignments/lecturer-assignment-item/lecturer-assignment-item.component';
import { StaffItemComponent } from '../admin/dashboard/users/staff-item/staff-item.component';
import { FinalStepComponent } from '../lecturer/test-result/final-step/final-step.component';
import { StripePaymentComponent } from '../lecturer/test-result/stripe-payment/stripe-payment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ComplaintsGetterComponent,
        AdminAssignmentsItemComponent,
        AdminAssignmentDetailItemComponent,
        LecturerAssignmentDetailItemComponent,
        LecturerAssignmentItemComponent,
        PreregisterStaffComponent,
        PreregisterStudentComponent,
        UsersItemComponent,
        StaffItemComponent,
        FinalStepComponent,
        StripePaymentComponent,
    ],
    imports: [
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatDialogModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        ComplaintsGetterComponent,
        AdminAssignmentsItemComponent,
        AdminAssignmentDetailItemComponent,
        PreregisterStaffComponent,
        PreregisterStudentComponent,
        UsersItemComponent,
        LecturerAssignmentDetailItemComponent,
        LecturerAssignmentItemComponent,
        StaffItemComponent,
        FinalStepComponent,
        StripePaymentComponent,
        FormsModule,
        CommonModule
    ]
})

export class ComplaintNewsModule { }
