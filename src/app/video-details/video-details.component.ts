import { Component, OnInit } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  video$: Object;

  constructor( private data: VideoDataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.video$ = params.id);
   }

  ngOnInit() {
    this.data.getVideoDetails(this.video$).subscribe(
      data => this.video$ = data
    );
  }

}
