import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Video } from '../Video';

@Component({
  selector: 'app-admin-videos',
  templateUrl: './admin-videos.component.html',
  styleUrls: ['./admin-videos.component.css']
})
export class AdminVideosComponent implements OnInit, OnChanges {

  videos$: Object;
  video$: Object;
  videos: Video[];

  constructor(private data: VideoDataService, private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.video$ = params.id);
  }

  ngOnInit() {
    this.data.getVideos().subscribe(data => this.videos$ = data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.data.getVideos().subscribe(data => this.videos$ = data);
  }

  onDelete(video){
    this.data.deleteVideo(video).subscribe(data => {});
    this.ngOnInit();
  }
}
