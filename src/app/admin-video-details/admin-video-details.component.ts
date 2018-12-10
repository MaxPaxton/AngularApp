import { Component, OnInit } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Video } from './Video';

@Component({
  selector: 'app-admin-video-details',
  templateUrl: './admin-video-details.component.html',
  styleUrls: ['./admin-video-details.component.css']
})

export class AdminVideoDetailsComponent implements OnInit {

  video$: Object;
  videos: Video[];
  rentObject$: Object;

  constructor( private data: VideoDataService, private route: ActivatedRoute,
    private router: Router, private vds: VideoDataService ) {
    this.route.params.subscribe( params => this.video$ = params.id);
  }

  ngOnInit() {
    this.data.getVideoDetails(this.video$).subscribe(
      data => this.video$ = data
    );
  }
  
  onUpdate(video, event) {
    const target  = event.target;
    const updatedVideo = {
      _id: video._id,
      title: target.querySelector('#title').value,
      rating: target.querySelector('#rating').value,
      lenght: target.querySelector('#length').value, // dat typo doe
      genre: target.querySelector('#genre').value,
      rent: target.querySelector('#rent').value
    };
    console.log(updatedVideo.genre);

    this.data.updateVideo(updatedVideo).subscribe(data => {
      video.genre = updatedVideo.genre;
      console.log('update function called');
    });
  }

}
