import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { PreregisterAccountComponent } from './preregister-account/preregister-account.component';
import { ComplaintNewsModule } from 'src/app/shared/complaint-news.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    ReactiveFormsModule,
    ComplaintNewsModule
  ],
  declarations: [UsersPage, PreregisterAccountComponent],
  entryComponents: [PreregisterAccountComponent]
})
export class UsersPageModule {}
