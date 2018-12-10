import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AdminsComponent} from './admins/admins.component';
import { VideosComponent} from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { AdminVideosComponent } from './admin-videos/admin-videos.component';
import { AdminVideoDetailsComponent } from './admin-video-details/admin-video-details.component'
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
    path: 'admin-videos',
    component: AdminVideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-video/:id',
    component: AdminVideoDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
