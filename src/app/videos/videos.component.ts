import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoDataService]
})
export class VideosComponent implements OnInit, OnChanges {

  videos$: Object;

  constructor( private data: VideoDataService) { }

  ngOnInit() {
    this.data.getVideos().subscribe(data => this.videos$ = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.data.getVideos().subscribe(data => this.videos$ = data);
  }
}
