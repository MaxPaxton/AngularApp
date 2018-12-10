import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AdminsComponent} from './admins/admins.component';
import { VideosComponent} from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AdminVideosComponent } from './admin-videos/admin-videos.component';
import { AdminVideoDetailsComponent } from './admin-video-details/admin-video-details.component'
import { AuthGuard } from './auth.guard';
import { AdminVideoCreateComponent } from './admin-video-create/admin-video-create.component';
import { CustomersComponent } from './customers/customers.component';

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
    path: 'admin-videos',
    component: AdminVideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-video/create',
    component: AdminVideoCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-video/:id',
    component: AdminVideoDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-customers',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
