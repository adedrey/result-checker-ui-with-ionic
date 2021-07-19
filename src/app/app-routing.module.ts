import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/user.auth.guard';
import { AdminAuthGuard } from './auth/admin.auth.guard';
import { StaffAuthGuard } from './auth/staff.auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule), canLoad : [AuthGuard]
  },
  {
    path: 'results',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule), canLoad : [AuthGuard]
  },
  {
    path: 'test-result',
    loadChildren: () => import('./test-result/test-result.module').then( m => m.TestResultPageModule), canLoad : [AuthGuard]
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule), canActivate: [AdminAuthGuard]
  },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./auth/admin/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./auth/admin/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./lecturer/lecturer.module').then( m => m.LecturerPageModule), canActivate: [StaffAuthGuard]
  },
  // {
  //   path: 'staff/signup',
  //   loadChildren: () => import('./auth/lecturer/lecturer-signup/lecturer-signup.module').then( m => m.LecturerSignupPageModule)
  // },
  {
    path: 'staff/login',
    loadChildren: () => import('./auth/lecturer/lecturer-login/lecturer-login.module').then( m => m.LecturerLoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule), canLoad : [AuthGuard]
  },
  {
    path: 'reset/:token',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'staff/reset/:token',
    loadChildren: () => import('./auth/lecturer/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'staff/forgot-password',
    loadChildren: () => import('./auth/lecturer/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'open-ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'undergraduate/home',
    loadChildren: () => import('./student-home/student-home.module').then( m => m.StudentHomePageModule), canLoad : [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
