import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VideoDataService} from '../video-data.service';

@Component({
  selector: 'app-admin-videos',
  templateUrl: './admin-videos.component.html',
  styleUrls: ['./admin-videos.component.css']
})
export class AdminVideosComponent implements OnInit, OnChanges {

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
