import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomersComponent } from './customers/customers.component';
import { VideosComponent } from './videos/videos.component';
import { AdminsComponent } from './admins/admins.component';
import { FormsModule } from '@angular/forms';

import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomersComponent,
    VideosComponent,
    AdminsComponent,
    VideoDetailsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
