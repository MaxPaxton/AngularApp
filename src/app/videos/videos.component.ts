import { Component, OnInit } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoDataService]
})
export class VideosComponent implements OnInit {

  videos$: Object;

  constructor( private data: VideoDataService) { }

  ngOnInit() {
    this.data.getVideos().subscribe(data => this.videos$ = data);
  }

}
