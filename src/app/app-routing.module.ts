import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AdminsComponent} from './admins/admins.component';
import { VideosComponent} from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent
  },
  {
    path: 'video/:id',
    component: VideoDetailsComponent
  },
  {
    path: 'admin/:id',
    component: AdminsComponent
  },
  {
    path: 'admins',
    component: AdminsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
